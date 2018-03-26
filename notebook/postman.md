
#實作網址參考:<https://medium.com/@mikru168/postman-%E6%B8%AC%E8%A9%A6web-service%E7%9A%84%E5%B7%A5%E5%85%B7-c7726997868a>

***

#Postman 的主要功能

- 模擬各種 HTTP requests：
從常用的 GET、POST 到 RESTful 的 PUT 、 DELETE …等等。 甚至還可以送出檔案、送出額外的 header。

- Collection 功能：
Collection 是 requests的集合，在做完單一個測試的時候， 你可以把這次的 request 存到特定的 Collection 裡面，如此一來，下次要測試的時候，就不需要重新輸入。
養成習慣以後，網站 API 的每個方法都寫好存進去，以後在開發的時候，就可以迅速得看到結果。 而 Collection 還可以 Import 或是 Share 出來，讓團隊裡面的其他人，可以一起使用你建立起來的 Collection。

- 整理過後的回傳結果：
一般在用其他工具來測試的時候，回傳的東西通常都是純文字的 raw， 但如果是 JSON ，就是塞成一整行的 JSON。這會造成閱讀時的障礙 ，而 Postman 可以針對回傳資料的格式自動美化。 JSON、 XML 或是 HTML 都會整理成人類可以閱讀的型態。

- 設定環境：
Postman 可以自由新增 Environment，一般我們可能會有多種環境， development 、 staging 或 local， 而這幾種環境的 request URL 也各不相同。新增 Environment，可以讓我們設定一些環境變數，使得切換環境測試的時候， 不用重寫 request。