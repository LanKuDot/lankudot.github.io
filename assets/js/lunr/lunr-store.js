var store = [{
        "title": "[筆記] 避免 Boxing/Unboxing 效能問題",
        "excerpt":"之前在撰寫 Unity 套件的時候，因為不知道使用者會用什麼類別來傳資料，所以都轉成 object 型別來傳遞，後來發現這會有效能上的問題。本篇文章就來探討這個問題以及解法。 問題 根據官方文件，在 value type（如：int、float 等）與 object type 之間轉換會有效能問題： 如果將一個 value type 轉成 object type 的話，C# 會額外在 heap 建立一個 instance 來儲存 value type 的值。這稱為 boxing。 反之將 object type 轉回 value type 的話，C# 會先檢查該 object 存的值（boxed value）是否可以轉到指定的 value type，然後將值複製回 value type。這稱為 unboxing。 如下圖（參考官方文件繪製）： 再依這篇官方文件，boxing 比直接的 reference 賦值...","categories": ["blog"],
        "tags": ["筆記","Unity","C#"],
        "url": "/blog/2021-12-csharp-boxing-and-unboxing/",
        "teaser": null
      },{
        "title": "[心得] 轉換到嘸蝦米半年心得",
        "excerpt":"在受不了輸入法神奇的選字跟換了沒有方向鍵的 60% 鍵盤的因素下，決定學習新的輸入法，享受不用選字的爽感。在以字形為主的輸入法中，最後選擇嘸蝦米，這篇分享學習方法與使用半年的心得。 為何選擇嘸蝦米 在挑選輸入法時，也有考慮過倉頡跟行列，但最後選擇嘸蝦米的原因是： 聯想直覺：嘸蝦米將字形拆解成字根，而字根以形、音或義與英文字母做連結 不用記鍵盤配置：因為以英文字母做為輸入，所以不用再學鍵盤配置，而且對英打也有幫助 完整學習資源：官網有完整的學習資源，從字根練習、拼字練習、文章測驗，到查字碼應有盡有 幾乎不用選字：即使以字形為主，還是會遇到需要選字的情況，但嘸蝦米需要選字的機會非常小 綜合以上四點，以及因為寫程式，而對英打有一定熟悉度，我覺得嘸蝦米是可以快速上手的輸入法。 簡介嘸蝦米 字根 嘸蝦米將字根以形、音或義與對應的英文字母聯想在一起： 形：取字根的外形，如：「口」→「O」、「冊」→「M」 音：取字根的讀音，如：「大」→「D」、「耳」→「R」 義：取字根對應的英文單字，如：「車」→「Car」→「C」、「斤」→「Kilogram」→「K」 拆字 基本上一個字的拆解原則是：由上而下，由左而右，由外而內，也就是以眼睛看到的順序為主，如下面的例子： 紅色代表形，藍色代表音，綠色代表義。 「部」可以拆為「立」「口」「阝」，所以字碼是「LOB」 「圓」可以拆為「囗」「口」「目」「八」，所以字碼是「OOMB」 「新」可以拆為「立」「木」「斤」，所以字碼是「LTK」 更詳細的拆字原則請參考官網。 大根原則 即盡可能的以最大的字根涵蓋字形。例如「立」雖然可以被拆為「亠」「八」「一」三個字根，但是「立」也是一個字根，所以在上面的「部」字的拆解上不會是「亠」「八」「一」「口」「阝」。 除了基礎字根外，嘸蝦米還有「簡速字根」把基礎字根組合成更大的字根，進而減少要輸入的字碼。 截長補短 「截長」意為當一個字需要四個以上的字根組成時，取前三個加上最後一個做為其字碼： 「優」取前三個「亻」「T」「目」及最後一個「夂」，「冖」「心」省略，所以字碼為「PTMP」 「腳」取前三個「⺼」「八」「八」及最後一個「卩」，「口」省略，所以字碼為「UBBP」 「靈」取前三個「雨」「口」「口」及最後一個「巫」，「口」省略，所以字碼為「UOOW」 「補短」則是當字碼不足三個時，要再補「最後一筆」的根： 加上官網的補根定義： 「方」只有一個字根「方」，需補根，所以字碼為「FY」 「來」只有一個字根「來」，需補根，所以字碼為「LN」 「問」只有兩個字根「門」「口」，需補根，所以字碼為「MOO」 詳細的截長補短原則詳見官網。 一二碼字與簡速字根 這是嘸蝦米為了減少輸入的字碼數而設計的，讓輸入過程更快，算進階版，在學會基礎字根後會比較好理解。 一碼字 雖然只有一個字根的字都要補根成為二碼字，但也有只要一個字碼就可以打出來的字，稱為「一碼字」。小寫數字（一到十，加上○）即為此類，另外還有常用的字組成剩下的 15 個一碼字。如： 「一」的字碼是「E」 「對」的字碼是「A」 「有」的字碼是「X」 二碼字 而二碼字除了因補根而成的之外，還有為了減少輸入字根數而成的，一共 26 乘...","categories": ["blog"],
        "tags": ["心得"],
        "url": "/blog/2021-12-switch-to-boshiamy/",
        "teaser": null
      },{
        "title": "[雜談] 身為工具開發者的二三事",
        "excerpt":"最近終於有機會可以跟到大專案，而專案中有一人負責提供開發工具。為了方便進行 code review，所有成員要使用該工具。但沒有想到才剛使用一週，就遇上開發者大改架構，而且連個事前通知都沒有，一個禮拜的進度化為烏有。崩潰之餘只好來寫一下自己認知中，身為工具開發者時應該要有的觀念。 提供文件 我知道如果工具還在開發中的話，撰寫文件會比較麻煩，因為只要工具一更新，文件就過時了。但是別忘記，可以多利用註解幫忙生成文件，而且只要符合對應的註解格式，IDE 或編輯器也會為工具的 API 加上提示，讓團隊成員能了解函式或變數的用途。工具完成後也可以用 doxygen 等工具生成 API 文件。 例如 C# 可以使用 xml 格式的註解，配合 /// 或是 /** 來撰寫文件註解，而 Visual Studio 就會為函式加上提示 提供範例 範例是說明工具如何使用最有效的手段。每個範例最好只介紹一個功能，配合常見的使用情況，例如：如何發出事件，就用 UI 的按鈕做為例子、如何生成一個物件，就用生成敵人做為例子。除了能夠讓團隊成員容易理解如何使用這個工具，也可以用來驗證自己的設計是否合理，以及測試功能是否正常。 記錄版本與修改 API 更動時常發生，最好能夠用版本來區分改動，並且記錄 changelog。而不是讓團隊成員在合併分支時，才知道工具又更新了，然後伴隨各種崩慣的錯誤訊息。 使用者可以利用版本號確認自己是否使用最新的工具。我習慣 「Major.Minor.Patch」 的格式，只是修正錯誤就增加 Patch 的數字，增加一些功能就增加 Minor 的數字，如果這次的更新會造成使用舊版工具的程式出錯的話，就增加 Major 的數字。要注意的是，對於 Minor 跟 Patch 的版本變更，都應該要相容前面的版本，即不會因更新而報錯。 版本號的簡單說明 而 changelog 應該忠實記錄每個版本做了哪些修改，讓團隊成員能夠知道如何修正程式以跟上最新版本。我覺得 changelog...","categories": ["blog"],
        "tags": ["雜談"],
        "url": "/blog/2022-01-advice-for-tool-developers/",
        "teaser": null
      },{
        "title": "[筆記] C# 類別成員存取關係一覧",
        "excerpt":"本篇用圖表來介紹 C# 類別成員的存取關係，有 private、protected、public，跟跨組件的成員存取，有 internal、protected internal、private protected。以及比較一般繼承與多型繼承中，會取得什麼版本的方法。 類別成員的存取 存取來源 private protected public 自己類別中 :heavy_check_mark: :heavy_check_mark: :heavy_check_mark: 衍生類別中 :x: :heavy_check_mark: :heavy_check_mark: 外部 :x: :x: :heavy_check_mark: 自己類別中 在自己類別中存取的情況是： 在類別定義中，存取類別的成員，如 Test1。 在類別定義中，透過該類別的物件存取成員，如 Test2。 所有 private、protected、public 的成員都可以存取。 public class Bar { private int x; private void Func() { Console.WriteLine(\"Func called\"); } public void Test1()...","categories": ["blog"],
        "tags": ["筆記","C#"],
        "url": "/blog/2022-02-csharp-inheritance-member-accessing/",
        "teaser": null
      },{
        "title": "[影集] Apple TV-基地 Foundation",
        "excerpt":"   在一個由帝國長久統治銀河的時代中，帝國的主星「川陀」上出現了一名數學教授ー哈里．謝頓。他用「心理史學」預測帝國將在未來衰敗，整個銀河會陷入黑暗時期，人們必須建立一個「基地」來保存科技與文化，以在黑暗時期過後，讓銀河文明能快速恢復。   劇情   影集改編自以撒．艾西莫夫（Issac Asimov）的基地系列小說，第一季的劇情從到銀河邊緣「端點星」建立基地，到基地的第一次危機結束之後。基地的團隊從川陀出發後，劇情分為三條路線，同時推移：   本篇圖片及劇照皆取自 Apple TV 網站及其在 YouTube 上的預告片   蓋兒與哈里      蓋兒因其數學的天賦而受邀成為哈里的助手，是最接近哈里的預測模型的人，知道他的預測是正確的，但哈里因「天機不可洩漏」而不願透露其基地計劃的細節與理由。隨著劇情的推移，會逐漸理解到蓋兒受到沉重壓力的痛苦，跟哈里不被諒解的無奈。   帝國      深信帝國永不滅亡的「白晝」皇帝克里昴十二世在聽到哈里的理論後相當生氣，憤而將哈里與其追隨者流放到端點星。但是帝國境內的情勢開始出現變化，發生的事情都跟哈里的預測相符。繼任「白晝」的克里昴十三世為了避免預測成真，開始「導正」事件的發展。但在這過程中，即使是一脈相傳的複製人王朝也會開始出現岐異，開始擔心帝國的存亡。   基地      基地線則圍繞在守護者ー賽佛．哈定身上。在團隊抵達端點星之初就存在非自然造物「穹窿」，穹窿會發出「零場」，無論人類還是生物都無法接近，但只有賽佛可以不受影響。在基地建立不久，就受到臨近星球，為了報復帝國的安納克利安人的入侵，即基地的第一次危機。賽佛肩負起保護基地的責任，傾全力對抗敵人的攻擊。   在第一季的結尾，三條劇情線都作了收束，劇情拋下的每個疑問都有解答，同時也看到他們在未來有不同的發展，為下一季作了起頭。   觀後感   我覺得劇情的剪輯完美的呈現「天機不可洩露」的精隨，所謂要欺騙敵人就得先欺騙自己人，觀眾也是自己人之一。每次看到驚人的一幕時，都想著為什麼要這麼作，或危機來臨時，這樣作是對的嗎？帶著滿滿的不解，直到後面解答時才豁然開朗。因為基地團隊不知道計劃的細節，所以哈里與蓋兒的劇情線就有著解答疑問的角色。      角色中滿喜歡複製人皇帝的設定，同時會有「黎明」、「白晝」、「黃昏」三個皇帝在位，分別是少年、壯年、老年的克里昴，而在黃昏任期到的時候，會變成「黑夜」，最後會直接被雷射安樂死燒成灰，此後新的「黎明」誕生，而其它皇帝則繼承下個位子。老實說，在看黑夜皇帝（克里昴十一世）最後一天在世的告別行程時，心中有股強烈的哀傷，尤其是最後走到雷射光束下的那一段。而劇情中期的白晝皇帝（克里昴十三世），原本以為他完全抱有憐憫心了，但是少女星之後的事，理解到他內心還是流有克里昴的冷血，對他是喜怒參半。最可憐的莫過於克里昴十四世，一出生就是個「錯誤」的存在，完全沒有克里昴的特點，就是一個無邪的少年，但最後的下場令人痛心。原本想說如果克里昴十三世真的打算改變帝國的統治方式，那就有可能「破解」哈里的預言了。      另外星際科幻的一大看點就是對外星文化的想像，從服裝、手勢、器物的設定來呈現那個星球的文化跟環境。安納克利安人的最偉大狩獵者以及用最古老的樹雕成的弓，代表入侵基地的首領菲拉不容小覷。瑟斯皮斯人的藍眼睛跟他們以礦業為主，同是瑟斯皮斯人的雨果也擁有藍眼睛。少女星上的水源有很多鹽份而且純水很珍貴，所以會用鹽晶製成的容器裝水給皇帝代表對他的敬重。   真得滿喜歡影集的改編，看完第一集就覺得這會很對我的胃口，片頭的音樂跟動畫也很棒。雖然有看過原著小說，但是細節忘得差不多了，只記得大致的走向，看完影集之後就想回去重看一次小說。如果有第二季的話，我會滿期待騾的登場。  ","categories": ["blog"],
        "tags": ["影集","觀後感"],
        "url": "/blog/2022-02-foundation-apple-tv-series-reviews/",
        "teaser": null
      },{
        "title": "[筆記] 設定 Android 不要備份 PlayerPrefs",
        "excerpt":"用 Unity 開發 Android 上的遊戲時，如果有用到 PlayerPrefs 儲存使用者的資料，可能會發現在重新安裝後，這些資料還是存在。這是因為在 Android 6.0 以上的版本，Android 都會自動備份應用程式的資料，在重新安裝後會恢復這些資料。 關閉 Android 自動備份資料 如果要關閉 Android 自動備份應用程式的資料，可以在 Unity 的專案中設定。 開啟 Project Settings → Player → Publishing Settings → 勾選 Custom Main Manifest 編輯新增的檔案 Assets/Plugins/Android/AndroidManifest.xml 在 application 標籤中加入 android.allowBackup 屬性，並設為 false 這樣就完成設定了 補充 在 Android Developers 的文件中有註明，如果應用程式跑在 Android 12 以上的版本，則這個選項不會影響手機之間的資料轉存，也就是說 PlayerPrefs...","categories": ["blog"],
        "tags": ["筆記","Unity"],
        "url": "/blog/2022-04-prevent-android-from-backing-up-playerprefs-unity/",
        "teaser": null
      },{
        "title": "[C#] 用 interface 模擬多類別繼承",
        "excerpt":"最近負責的 Unity 專案中，有很多 UI 有返回的按鈕，而這些按鈕也要可以透過程式觸發。如果為每個 UI 撰寫觸發的函式，一但觸發的邏輯改變，修改會是個大工程。如果為了這個小功能撰寫基礎類別，又顯得大才小用，而且 C# 的類別只能同時繼承一個類別，擴充性也不高。但 C# 類別可以繼承多個 interface，所以就思考能不能讓類別繼承 interface 的同時，也能提供功能，就好像是繼承了一個類別。 實作 作法是利用 interface 指定對象成員，再配合一個 static 類別來擴充 interface 的函式實作，來讓 interface 看起來也能提供功能。 public interface IPressBack { public UnityEvent onBack { get; } } public static class PressBackCaller { public static void PressBack(this IPressBack i) { i.onBack.Invoke(); } }...","categories": ["blog"],
        "tags": ["C#","Unity","筆記"],
        "url": "/blog/2022-05-csharp-simulating-multi-class-inheritance/",
        "teaser": null
      },{
        "title": "[筆記] 利用 Attribute 為繼承類別給與不同的 Static 成員值",
        "excerpt":"在專案開發上遇到這樣的問題：每個繼承類別要提供類似的 static 函式，功能差不多，但只有要取用的值不一樣。就在想能不能把 static 函式拉到基礎類別上，但又可以依照繼承類別給與不同的 static 成員值。 如果把 static 函式放在繼承類別上，就得每個繼承類別寫類似的函式。如果把 static 函式放在基礎類別，又不能在基礎類別上取得繼承類別的 static 成員值，因為 static 函式不能宣告為 abstract 或是 virtual，所以基礎類別無法知道繼承類別有那個 static 成員。最後想到的方法是透過 attribute 配合 reflection 來取得繼承類別上的不同 static 成員值。 實作 在專案中，每個 Unity 場景都有一個啟動的程式碼，程式碼會提供對應的場景名稱。在場景載入後，就要執行這個程式碼。所以載入場景跟執行啟動程式碼的功能放在基礎類別上，而對應的場景名稱就在繼承類別上指定。 首先建立一個 attribute 類別用來儲存場景名稱的資訊，並限制 TargetSceneAttribute 只能用在類別上： [AttributeUsage(AttributeTargets.Class)] public class TargetSceneAttribute : Attribute { public readonly string SceneName; public TargetSceneAttribute(string sceneName)...","categories": ["blog"],
        "tags": ["C#","Unity","筆記"],
        "url": "/blog/2022-08-csharp-use-attribute-to-provide-varient-static-member/",
        "teaser": null
      },{
        "title": "[筆記] Unity 2021 LTS - C# 9.0 的新語法",
        "excerpt":"Unity 2021 LTS 也出來好一陣子了，在 2021.2 版後就開始導入 C# 9.0。使用了半年後，發覺 C# 9.0 當中新增的語法可以讓程式碼更加簡潔易讀，整理成本篇來介紹個人常用的語法。 C# 9.0 的支援 Unity 2021 LTS 並非完全支援 C# 9.0 的語法[1]，只有其中一部份可以使用，而如果要使用下面介紹的 init-only setter 跟 record 類型的話，則要再自行新增一個程式碼，檔名我會命名為 IsExternalInit.cs： namespace System.Runtime.CompilerServices { public class IsExternalInit { } } 否則會出現編譯錯誤： error CS0518: Predefined type 'System.Runtime.CompilerServices.IsExternalInit' is not defined or imported 這是因為 Unity 是使用...","categories": ["blog"],
        "tags": ["C#","Unity","筆記"],
        "url": "/blog/2022-10-csharp-9-in-unity-2021/",
        "teaser": null
      },{
        "title": "[閱讀] 日本戰國這樣讀",
        "excerpt":"在接觸戰國題材的遊戲後，就一直很想要認識日本戰國時期的歷史，在朋友的推薦下，選擇《日本戰國這樣讀》作為入門。      書中介紹武田、上杉、北條、織田、豐臣、德川這六家在戰國時期的主角，並用便利超商的加盟體系來幫助理解幕府體制下的關係，例如天皇是名譽董事長、幕府將軍是執行長、守護是地區經理等。書中是以各家分章節，縱觀他們在戰國時期的故事，不只有經典的戰役或事件，還有他們如何經營勢力與對那個時期帶來的影響。所以除了為人所知的名將之外，還可以認識到各家是怎麼崛起的，以及是如何沒落或稱霸日本。   因為是以各家視點分章節，所以牽涉到多家的事件，會著重在單一家的歷史。如果要看其它家同時做了什麼事，書中也有標記在各章節提及的部分。也可以搭配書尾的歷史年表一同閱讀，會對各事件有全局的理解。另外可以放一個日本古地圖搭配閱讀，可以幫助了解各家的地盤與戰役位在日本的哪裡。歷史是土地上的故事，有了故事的連結，日後到日本參觀古蹟的時候，應該會更有感覺。  ","categories": ["blog"],
        "tags": ["閱讀"],
        "url": "/blog/2023-01-this-is-sengoku-period/",
        "teaser": "/assets/images/blog/2023-01-08-this-is-sengoku-period/cover-image.JPG"
      },{
        "title": "[筆記] 重構專案中的舊元件",
        "excerpt":"在最近參與的遊戲專案中，我負責重新撰寫經過時間累積、充滿不同想法的核心元件。隨處可見複製的程式碼，元件之間交互使用，亦或是為了加新功能而繞路。可以看出每個新功能為了不影響之前的功能，正維持著微妙的平衡。對於負責重寫元件的我來說就好像是在茂密的遠古森林裡一路披荊斬棘，充滿挑戰。就想寫來記錄過程和心得。 重構元件大概是這樣的感覺吧 理解需求 要作重構還是要回歸需求，知道這些元件或這個功能的目的是什麼，這樣在重新設計時比較容易掌握方向。不過萬事起頭難，這也是最痛苦的階段，尤其是靈力不足以通靈出程式的想法的時候。 如果有文件或是之前的開發者還在的話是最好，就可以快速理解它們的作用，找到切入點。但通常不會那麼美好，可能因為趕時限沒時間作文件，或是之前的開發者不在了。這時候就只能自己看程式碼通靈了。 找出運作流程 我會先找出元件在運作流程中的位置，利用 debug 大法先看事件是如何發生。例如想知道攻擊演出是怎麼播放的，就在覺得可能發生的地方插入 Debug.Log，當演出時就可以知道那個地方有沒有被呼叫到。而且 Unity 的 Debug.Log 也會包含 call stack，可以知道發生的起點。 有 call stack 的幫助，可以知道要重構的元件在流程中的位置，與牽涉的哪些元件，例如演出播放會跟素材載入的元件有關，而發起演出請求的元件有哪些等。如果遇到非同步的程式碼就會麻煩一點，得要找出哪裡呼叫到斷點，再從斷點另一頭開始找。有這些資訊就可以拉出這次重構的界線要到哪裡，因為當牽涉到的元件很多時，一次改動太多東西反而不好掌握。 原本的問題是類型 B 的特效生成與管理跟類型 A 完全不同，想見類型 B 的特效是後來新增的 理解程式碼 即使有文件或是有人可以問，要到能有修改想法前，還是得實際看程式碼，痛苦的開始。在拉出重構界線後，就去看目標元件內的功能是如何運作的，重點在於理解需求，也就是它是為了作什麼事情而存在。最好是能抓出元件內每個功能的作用，還有偷偷幫你做的功能，例如是在意料之外的地方做到不會重複播放特效的功能。這樣在重新設計時會有比較好的藍圖。 找出舊架構每個元件的功能和用途，紅色是有問題的使用方式 在理解程式碼的過程中，也會發現原本的功能有什麼問題。例如生成的特效物件沒有統一管理、使用的資料結構有效能問題等。當然在重新設計時，也得一併考慮解決這些問題。 重新設計 有時候在理解功能的時候，也會有想法冒出來，所以不會等完全理解完才開始重新設計。有想法時先設計新的架構大致要長什麼樣，漸漸體悟出功能後，再逐步更新設計。 重新設計是規劃元件之間要如何互動，要提供什麼樣的功能給其它元件使用，目標是讓程式能直覺好讀與方便後續維護。我習慣的設計方向如下： 單向相依性 同一個系統中，元件之間的相依性是單向的。也就是不會繞過使用的元件，再去取用後面的元件，或是元件之間的相依性不該有迴圈，這很常出現在那個元件是 static 的情況下。這樣在後續追縱程式碼時，路徑會比較單純。 以這次的例子來說，應該要把類型 B 的特效管理元件合併進來 只負責一件事 每個元件只負責一件事。如果規劃出來的元件作的事情太多，就可以考慮將它切出來作成另一個元件。好處是命名更容易，可以直覺知道這個元件負責的功能。但也不用為了一個小功能而切出新元件，反而會使程式更複雜。通常在實作時會意識到這個元件太大或太小，在設計階段不用一直考慮切的好不好。 每個元件專心做它負責的事就好 像共用跟個別使用的特效的管理方式不同，就分出次元件來，EffectManager 再依照請求的特效決定（透過 flag 之類的）從哪邊取資料，EffectUser 不用管這件事 只開放需要的功能...","categories": ["blog"],
        "tags": ["筆記","雜談"],
        "url": "/blog/2023-01-refactor-legacy-component-in-project/",
        "teaser": "/assets/images/blog/2023-01-30-refactor-legacy-component-in-project/refactor-is-like.jpg"
      },{
        "title": "[推廣] 空氣魚實驗室",
        "excerpt":"來介紹一下空氣魚實驗室與現有的專案~      YouTube 頻道 - 來做遊戲啊系列   因喜歡 Nier: Automata 中的 9S 的駭客小遊戲而製作。這系列以程式為主，從機制、關卡設置，到 Boss 製作，逐步完成一個 3D STG。除了程式講解外，也分享設計思路。      YouTube 頻道:      來做遊戲啊系列:      Unity 套件 - Circular Scrolling List   Circular Scrolling List 用有限個選單物件來顯示無限個內容，支援直向跟橫向捲動、可用滑鼠及滾輪操作，也可透過程式來控制。      可以在 Unity Asset Store 上下載：         這個月第 6 版上架啦，新加了編輯器預覽、支援兩端停止選單、程式碼控制：               有問題也可以在 Github Page 上提問:        ","categories": ["blog"],
        "tags": [],
        "url": "/blog/2023-03-airfishlab-promotion/",
        "teaser": "/assets/images/blog/2023-03-26-airfishlab-promotion/logo.png"
      },{
        "title": "[閱讀] Kon's Tone 「千年女優」之道",
        "excerpt":"2022 年在高雄電影館看了《今敏：造夢魔術師》這部記錄片才知道今敏導演，之後就對他的作品很感興趣，還買了所有電影的 BD 來看。當時看完記錄片，朋友就借我這本書看，不過因為工作關係，只看了一半就先還回去了，但是意猶未盡，後來就自己再買了一本來看。      《Kon’s Tone 「千年女優」之道》收錄今敏製作《藍色恐懼》跟《千年女優》時是如何成案，以及製作過程的秘辛，還有收錄幾篇在個人部落格的文章，分享他是如何成為動畫導演，還有人生觀等等。其中分享《藍色恐懼》的製作過程的「《藍色恐懼》戰記」就佔了全書一半以上的內容，從成案開始就遭遇不合理的要求，在製作過程中被製作助理雷到的事情更是層出不窮，真的是充滿「恐懼」的「戰記」，看了人都 blue 了起來。很佩服整個團隊可以在如此艱難的環境下完成《藍色恐懼》，也蠻佩服今敏的脾氣，還可以自嘲地寫出這篇文章。我再看一次電影的話應該會有不同的感覺吧。   成書應該是在製作《東京教父》時。比較可惜的是這本書可能是從簡體中文直接轉換過來的，所以一些用語上還是有差別，在閱讀的時候要稍微思考一下。今敏每部作品都很吸引我，無論是劇情，還是畫面呈現上，他的作品更影響其它了電影，其中我最喜歡《盜夢偵探》。如果你還沒看過他的作品的話，一定要找機會去看。  ","categories": ["blog"],
        "tags": ["閱讀"],
        "url": "/blog/2023-04-kons-tone/",
        "teaser": "/assets/images/blog/2023-04-18-kons-tone/cover-image.png"
      }]
