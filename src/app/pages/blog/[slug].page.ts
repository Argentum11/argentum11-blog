import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { injectContent, MarkdownComponent } from '@analogjs/content';

import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog-post',
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
    <article class="prose max-w-7xl lg:prose-xl mx-auto prose-li:marker:text-black prose-li:marker:font-bold prose-li:text-left">
      <img class="post__image" [src]="postAssetUrl(post.attributes.slug, post.attributes.coverImage)" />
      <analog-markdown [content]="resolveContentImages(post.content, post.attributes.slug)" />
    </article>
    }
  `,
  styles: `
    .post__image {
      max-height: 40vh;
    }
  `,
})
export default class BlogPost {
  readonly post$ = injectContent<PostAttributes>('slug');

  postAssetUrl(slug: string, relativePath: string): string {
    return relativePath.replace(/^\.\//, `./blog/${slug}/`);
  }

  resolveContentImages(content: string | object | undefined, slug: string): string | object | undefined {
    if (typeof content !== 'string') return content;
    return content.replace(/src="\.\//g, `src="./blog/${slug}/`);
  }
}
