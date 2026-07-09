---
title: AWS Certified Cloud Practitioner (CLF-C02) 考照心得
slug: aws-CLF-C02-insights
description: 分享 AWS Certified Cloud Practitioner (CLF-C02) 準備 3.5 個月的考照心得，包含讀書資源、證照陪跑計畫、線上考試經驗與花費整理。
coverImage: ./blog/AWS_CLF-C02_exam_results.png
date: 2026-04-25
---

# AWS Certified Cloud Practitioner (CLF-C02) 考照心得

## 緣起

去年就有注意到這個證照陪跑計畫，但當時已經錯過報名時程，來不及加入。今年剛好又看到宣傳，似乎只要放棄所有的實體活動（像是工作坊、Career Sharing）也還是能參與（多數活動時間都在高雄，不方便為了上述的活動衝到臺北再衝回來），再加上自己也一直想更了解 AWS，於是就決定報名參加。

### 2026 Winter AWS Educate 證照陪跑計畫

2026 的證照陪跑計畫主要以 Certified AI Practitioner（AIF-C01）為核心，提供完整的陪跑資源，包括每週進度回報（本週應完成單元）、工作坊，以及衝刺解題班。至於 Certified Cloud Practitioner（CLF-C02） 與 Certified Solutions Architect - Associate （SAA-C03），則提供部分學習資源。

所謂「陪跑計畫」，比較像是有人陪你規劃進度、提供方向與資源，實際課程內容還是需要自己安排時間完成。整體計畫期間為 2025/12/05 至 2026/05/08 ，並於 4 月安排了 Career Sharing 讓學員了解雲端產業常見職位與職涯發展方向。

各證照提供資源如下表：

|| Certified AI Practitioner （AIF-C01）| Certified Cloud Practitioner (CLF-C02)|Certified Solutions Architect - Associate（SAA-C03）|
|-|-|-|-|
|工作坊、衝刺解題班|✓|||
|進度回報|✓|✓||
|50％ off 證照報名 voucher （需完成小考以及 Skill Builder Question Set）|✓|✓||
|Notion 學習資源 （學習資源彙整、考古題、問答庫）|✓|✓|✓|

## 準備策略

我大約準備了  3.5 個月（12/15 ~ 4/2)。因為先前對雲端的了解不多，所以我的準備策略是先把 AWS Skill Builder 上的基礎的課程（AWS Cloud Practitioner Essentials, Getting Started with AWS Cloud Essentials）上完，同時在自己的 Notion 做筆記（內容主要整理各項服務的用途與特色，如下圖）。接著再看去年 AWS Educate 雲端校園大使的證照進度課程。最後搭配證照陪跑計畫內的題目與 AWS Skill Builder 內的 Official Pretest、Official Practice exam 輪流刷題。(AWS Skill Builder 中部分內容如 Official Pretest, Domain Practice, Official Practice Exam,...須付費訂閱，我是考前一個月才訂閱，費用是 29 USD，大家自行斟酌)

![notion note for AWS CLF-C02](./blog/notion_note_for_AWS_CLF-C02.png)

之所以不用 ExamTopics 刷題，是看了許多網路上的考照心得，其中都不約而同提到網站上的答案不一定正確，雖然也可以參考討論區的答案，但對雲端基礎還不夠熟的我來說，要自行判斷哪些答案可信其實有點困難，因此最後沒有採用這個方式（證照陪跑計畫題庫裡面也有幾題我不太認同的答案，不過數量很少就乾脆算了）

## 遇到的困難

### AWS Skill Builder 答錯後看不到答案

![aws_skill_builder-no_direct_answer](./blog/aws_skill_builder-no_direct_answer.png)

如上圖所示，AWS Skill Builder 課後練習在答錯時，不會直接顯示正確答案。我當時有幾個單元只能一直重刷整份練習，直到每一題都答對為止（課後練習中錯誤的題目不能單獨重做，每次都得全部重來）。答錯其實沒關系，但是如果連正確答案都不知道，就會覺得自己沒有真的搞懂這個單元的精髓。

現在寫這篇心得才想到，當初應該直接丟給 Claude ，先快速找出正確答案，應該會省下不少時間（當初是看到答案還是不懂的題目，才會請 Claude 講解）

### 口音關卡

我選擇的是用英文線上考試（Online with OnVUE），答題前，考官會要求檢查你的應試環境，我剛好被分配到一位帶著濃厚印度口音的考官。沒想到第一句指令就讓我卡住了——他重複講了兩次，我卻只聽懂前幾個字，真正要檢查的重點始終聽不出來他在說什麼，最後他只好改用文字打出指示。看到文字後，我才恍然大悟，也順利完成那一項檢查。接下來的流程雖然還是有點吃力，但還好我有抓到關鍵字，就算沒辦法完全聽懂整句話，也能大概判斷他要我做什麼，最後順利完成所有檢查。

## 心得與建議

AWS Certified Cloud Practitioner (CLF-C02)這張證照整體難度不高，只要掌握各項 AWS 服務的用途，以及相似服務之間的差異即可。雖然AWS 服務眾多，但考試內容不會全部都考到，重點還是放在核心服務，先把常見且重要的服務讀熟就夠了。

## 我的備考資源

- 2026 Winter AWS Educate Taiwan 雲端校園大使證照陪跑計畫 notion
  - 影片
    - 2025 證照進度課程 (一)
    - 2025 證照進度課程 (二)
    - 2025 證照進度課程 (三)
    - 2025 CP 重點整理衝刺班
  - 題目
    - 範例問題
    - 考古題
    - 問答庫
- AWS Skill Builder - Exam Prep Plan: AWS Certified Cloud Practitioner (CLF-C02 - English)
  - 課程
    - AWS Cloud Practitioner Essentials
    - Getting Started with AWS Cloud Essentials (currently removed from the Exam Prep Plan)
  - 題目
    - Official Practice Question Set
    - Official Pretest (Subscription)
    - Domain 1 Practice (Subscription)
    - Domain 2 Practice (Subscription)
    - Domain 3 Practice (Subscription)
    - Domain 4 Practice (Subscription)
    - Official Practice Exam (Subscription)

## 花費

- AWS Skill Builder Individual Monthly subscription：974 TWD （29 USD)
- 考試費用：1711 TWD (52.5 USD)
  - 考試費用：100 USD
  - VAT： 5 USD
  - Voucher: 50% off

## 後記

5 月初，主辦方請學員填寫回饋表單以領取考照獎品，我也因此看到了進度回報排行榜。這時才發現，原來 **AWS Certified Cloud Practitioner（CLF-C02）** 也可以自行回報學習進度來累積積分（排行榜前 20 名有額外奬品），並不是只有 **AWS Certified AI Practitioner（AIF-C01）** 才能參與。

由於陪跑計畫沒有提供 CLF-C02 的官方進度安排，我一直誤以為這張證照無法回報進度，因此整個準備期間都沒有參與。等到發現時，排行榜積分早已拉開差距，也來不及追趕了。

好在除了進度回報之外，分享考照心得也可以獲得 5 分，幸好我早已完成這篇心得，希望能幫助未來準備 **AWS Certified Cloud Practitioner（CLF-C02）** 的考生，同時也作為自己這段備考歷程的紀錄。

6 月中，我收到了陪跑計畫的考照獎品，是一頂帽子和一雙襪子，也算是替這段約 3.5 個月的備考旅程畫下一個圓滿的句點。

![aws_skill_builder-no_direct_answer](./blog/completion_reward.png)
