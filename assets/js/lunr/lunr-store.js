var store = [{
        "title": "[筆記] 避免 Boxing/Unboxing 效能問題",
        "excerpt":"之前在撰寫 Unity 套件的時候，因為不知道使用者會用什麼類別來傳資料，所以都轉成 object 型別來傳遞，後來發現這會有效能上的問題。本篇文章就來探討這個問題以及解法。 問題 根據官方文件，在 value type（如：int、float 等）與 object type 之間轉換會有效能問題： 如果將一個 value type 轉成 object type 的話，C# 會額外在 heap 建立一個 instance 來儲存 value type 的值。這稱為 boxing。 反之將 object type 轉回 value type 的話，C# 會先檢查該 object 存的值（boxed value）是否可以轉到指定的 value type，然後將值複製回 value type。這稱為 unboxing。 如下圖（參考官方文件繪製）： 再依這篇官方文件，boxing 比直接的 reference 賦值...","categories": ["blog"],
        "tags": ["筆記","Unity","C#"],
        "url": "/blog/2021-12-csharp-boxing-and-unboxing/",
        "teaser": null
      }]
