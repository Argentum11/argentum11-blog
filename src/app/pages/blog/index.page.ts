import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';

import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  template: `
    <h1>Blog Archive</h1>

    @for (post of posts; track post.attributes.slug) {
    <a [routerLink]="['/blog/', post.attributes.slug]" class="group block no-underline">
      <h2 class="text-2xl font-bold text-gray-900 mb-2 leading-snug group-hover:underline">{{ post.attributes.title }}</h2>
      <p class="text-base text-gray-500 leading-relaxed">{{ post.attributes.description }}</p>
    </a>
    }
  `,
})
export default class Blog {
  readonly posts = injectContentFiles<PostAttributes>();
}
