// --- Data Definitions ---
const translations = {
    'zh-Hant': {
        'nav_home': '首頁',
        'nav_schedule': '議程時間表',
        'nav_speakers': '講者介紹',
        'nav_tech_creation_market': '技術創作市集',
        'nav_sponsors': '活動夥伴',
        'nav_booths': '社群擺攤',
        'nav_tickets': '票種介紹',
        'nav_about': '關於我們',
        'event_title': 'DevFest 高雄場 X 南臺灣技術社群大聚 2025',
        'event_date_location': '11/22（六）- 23（日）in KO-IN 智高點',
        'day1_schedule': '22 - DevFest 2025 高雄場',
        'day1_time': '🕣 08:30 ~ 18:00',
        'day2_schedule': '23 - 南臺灣技術社群大聚 2025',
        'day2_time': '🕚 11:00 ~ 17:00',
        'cta_button': '報名參加',
        'schedule_title': '議程時間表',
        'schedule_intro': '今年 GDG Kaohsiung 和開發者 Buffet 一起在高雄舉辦軟體社群年會，英文名稱為「DevFest Kaohsiung X S. TW Communities Gathering 2025」，中文名稱為「DevFest 高雄場 X 南臺灣技術社群大聚 2025」。<br><br>讓我們帶你快速的捕捉這場活動的重點',
        'schedule_day1': '11/22 (星期六)',
        'schedule_day2': '11/23 (星期日)',
        'track1': '會場1',
        'track2': '會場2',
        'd1_t1_title': '開放報到',
        'd1_t2_title': '活動開幕',
        'd1_t2_track': '會場1',
        'd1_t3_title': 'Keynote',
        'd1_t3_track': '會場1',
        'd1_t4_s1_title': '議程1-1',
        'd1_t4_s2_title': '議程1-2',
        'd1_t5_s1_title': '議程2-1',
        'd1_t5_s2_title': '議程2-2',
        'd1_t5a_title': '中午休息',
        'd1_t6_s1_title': '議程3-1',
        'd1_t6_s2_title': '議程3-2',
        'd1_t7_s1_title': '議程4-1',
        'd1_t7_s2_title': '議程4-2',
        'd1_t8_title': 'Pizza Time & 交流時間',
        'd1_t9_s1_title': '議程5-1',
        'd1_t9_s2_title': '議程5-2',
        'd1_t10_s1_title': '議程6-1',
        'd1_t10_s2_title': '議程6-2',
        'd1_t11_title': '活動閉幕',
        'd1_t11_track': '會場1',
        'd1_t12_title': 'After Buffet',
        'd1_t12_track': '高雄商旅 Urban Café 都會美饌',
        'd2_t1_title': '開放報到',
        'd2_t2_title': '活動開幕',
        'd2_t2_track': '會場1',
        'd2_t3_s1_title': '交流活動',
        'd2_t4_s2_title': '第二屆 AI 生成大賽 1',
        'd2_t5_s2_title': '第二屆 AI 生成大賽 2',
        'd2_t6_title': '活動閉幕',
        'd2_t6_track': '會場1',
        'speakers_title': '講者介紹',
        'simonliu_name': '劉育維 (Simon Liu)',
        'simonliu_org': 'APMIC / Google Developer Expert - AI',
        'simonliu_title': 'MLOps Engineer',
        'simonliu_topic_category_summary': '議程分類：Gemini AI 的生成式實踐',
        'simonliu_bio_full': '大家好，我是 Simon 劉育維，過去曾擔任過電信業的資深工程師和 在軟體業擔任客戶技術成功工程師，幫助各大知名企業進行機器學習、深度學習、大型語言模型等人工智慧議題進行人工智慧架構規劃的討論，目前在 Medium 上已經公開超過百篇技術文章，我希望能夠嘗試使用 AI 做應用，幫助客戶用 AI 解決痛點。',
        'session_info_title': '議程資訊',
        'session_name_label': '名稱',
        'simonliu_topic_name': '建構 AI Agent：結合 Google Gemini 與 ADK 工具來解放企業生產力',
        'session_abstract_label': '簡介',
        'simonliu_topic_abstract': '透過 Google 一系列的平台工具，讓大家可以從過去的想像，變成現在實際的樣貌，你可以在這個議程中了解到：<br>1. 透過 Google Stitch 了解到如何進行 UI/UX 的規劃<br>2. 透過 Google Firebase Studio 來進行平台建置，並且說明如何進行修改',
        'tech_creation_market_title': '技術創作市集',
        'tech_creation_market_p1': '今年的 DevFest 高雄場 X 南臺灣技術社群大聚 2025 將有一個技術創作市集，這是一個專為技術社群打造的創作展示平台。透過實體攤位，創作者可以直接與會眾互動，展示並販售自己的技術創作作品，讓知識與創意在社群中流動交流。',
        'tech_creation_market_p2': '媒介主要是透過製作書本為主，一本書的頁數大約在 15-30 頁左右 (僅為參考，實際並無限制)。我們歡迎所有與資訊技術相關的創作內容，涵蓋領域包括但不限於：',
        'tech_creation_market_li1': '前端開發 / 後端開發 / DevOps',
        'tech_creation_market_li2': 'UI/UX 設計 / 系統設計',
        'tech_creation_market_li3': '硬體開發 / 韌體開發',
        'tech_creation_market_li4': '軟體工程 / 開發流程與方法論',
        'tech_creation_market_li5': '技術管理 / 職涯發展等相關議題',
        'tech_creation_market_p3': '考量攤位空間限制，我們將優先錄取非商業出版的個人創作作品，讓更多獨立創作者有機會與社群分享他們的技術見解與經驗。',
        'tech_creation_market_p4': '報名擺攤：',
        'tKug_booth_name': 'Taiwan Kotlin User Group 攤位展示',
        'tKug_booth_desc': 'Taiwan Kotlin User Group 致力於推廣 Kotlin 語言與生態，無論是後端開發、Android、KMP 還是伺服器框架 Ktor，都能找到實用與有趣的應用。<br><br>我們在技術創作市集準備了 Kotlin 教學材料與開發案例，讓開發者快速上手並體驗 Kotlin 的優雅與高效。歡迎來攤位交流、分享學習經驗，或一起討論如何用 Kotlin 打造更好的軟體產品！',
        'tKug_booth_items': '<b>預計販售物品：</b>個人技術創作本、個人設計小物。',
        'sponsors_title': '活動夥伴',
        'colosscious_name': '嵙思科技股份有限公司',
        'colosscious_desc': '嵙思專為 #生技製藥 打造智慧化實驗室，讓生成式 AI 作為實驗室的智慧代理人。<br>打造 Lab → QA 無縫數位化，協助生技製藥實驗室提升效率與可靠度',
        'sponsor_tag_company': '公司贊助',
        'booths_title': '社群擺攤',
        'gdg_kaohsiung_name': 'GDG Kaohsiung',
        'gdg_kaohsiung_desc': 'GDG Kaohsiung 全名 Google Developer Groups Kaohsiung，是以研究 Google 以及 Android App 領域的技術、設計、新創或相關產業為主的開發者社群。',
        'tickets_title': '票種介紹',
        'ticket_cta': '立即報名',
        'tickets_paid_title': '付費門票',
        't_2day_name': '兩日會眾票',
        't_2day_price': 'TWD $680',
        't_2day_desc': '小孩子才做選擇，我 DevFest 高雄場 & 南臺灣技術社群大聚全都要參加。',
        't_sponsor_name': '兩日個人贊助票',
        't_sponsor_price': 'TWD $4,400',
        't_sponsor_desc': '限量四位，獨家贈送客製 Badger 2040 電子紙名片顯示器 乙個，還有眾多好禮。',
        't_day1_name': '第一日會眾票',
        't_day1_price': 'TWD $440',
        't_day1_desc': '只能參加第一天的 DevFest 2025 高雄場。',
        't_day2_name': '第二日會眾票',
        't_day2_price': 'TWD $240',
        't_day2_desc': '只能參加第二天的南臺灣技術社群大聚。',
        'tickets_addon_title': '追加購買',
        't_dinner_name': '第一日晚宴票',
        't_dinner_price': 'TWD $740',
        't_dinner_desc': '參加 11/22 星期六晚上的高雄商旅 Urban Café 都會美饌。',
        't_shirt_name': '會眾紀念衣服',
        't_shirt_price': 'TWD $340',
        't_shirt_desc': '透氣材質。',
        'tickets_free_title': '免費門票',
        't_free_price': 'TWD $0',
        'ticket_apply_cta': '填表申請折扣碼',
        't_free_badge_name': '第一日免費票',
        't_free_badge_desc': '必須使用邀請碼購買。我有 GDG 高雄社群名牌卡。',
        't_free_speaker_name': '第一日免費票',
        't_free_speaker_desc': '必須使用邀請碼購買。我曾經是 GDG 高雄活動的講者。',
        't_free_volunteer_name': '第一日免費票',
        't_free_volunteer_desc': '必須使用邀請碼購買。我當過 GDG 高雄的志工。',
        't_free_oscv_name': '第一日免費票',
        't_free_oscv_desc': '必須使用邀請碼購買。我有 OSCVPass 開源貢獻者快速通關。',
        'about_title': '關於我們',
        'about_gdg_name': 'GDG Kaohsiung',
        'about_gdg_desc': 'GDG Kaohsiung 全名 Google Developer Groups Kaohsiung，是以研究 Google 以及 Android App 領域的技術、設計、新創或相關產業為主的開發者社群。Google Developer Groups Kaohsiung 前身是 Android 高雄開發者社群，誕生於 2014 年 3 月，我們每年定期舉辦 Build with AI、 Google I/O Extended、DevFest 和 TOOCON 天黑黑月會，希望讓高雄對軟體開發有興趣的朋友能夠有實體交流的機會，歡迎加入 Google Developer Groups Kaohsiung 粉絲專業頁和 GDG Kaohsiung 臉書社團，掌握最新活動資訊。',
        'about_buffet_name': '開發者 Buffet',
        'about_buffet_desc': '我們是一群在台灣科技研討會結識的夥伴，自疫情期間，我們所在的城市技術社群與聚會逐漸減少。希望能保持討論和交流的熱度，因此我們決定發起聚會。 在這裏會舉辦各種形式的活動，議題大致上包括但不限於前、後端、UI/UX、ML、軟體開發等，希望大家能在這裡找到並盡情享受自己感興趣的事物，因此取名為【開發者 Buffet】。目前有線下活動，【開發者 café】每月的最後一個周二晚上 19:00 - 21:00，在高雄的咖啡廳與最多 10 位左右的開發者們一起輕鬆聊聊天，歡迎任何主題 ☕以及我們也有不定期舉辦線上讀書會，你可以在 Discord 找到更多詳細資訊，歡迎加入 🙌',
        'about_cta': '前往社群',
        'register_cta': '報名參加',
        'view_map': '📍 查看地圖',
        'devfest_what_title': '🧐 DevFest 高雄場 是什麼？',
        'devfest_what_content': 'DevFest 是由 GDG (Google Developer Groups) 社群主辦的年度技術盛會，也是全球最大的開發者社群科技大會，因為是全球年會，在字尾增加城市名稱區別不同場次。<br><br>DevFest高雄場是 GDG Kaohsiung社群舉辦的軟體年會。我們致力將外地的技術大神帶到高雄，讓高雄的開發者不用舟車勞頓就能與頂尖講者交流；我們更希望能打造一個專屬「高雄」的技術年會，邀請高雄在地講者上台分享，有更多曝光的機會！',
        'devfest_what_detail': 'DevFest 高雄場是 GDG Kaohsiung 社群舉辦的軟體年會。我們致力將外地的技術大神帶到高雄，讓高雄的開發者不用舟車勞頓就能與頂尖講者交流；我們更希望能打造一個專屬「高雄」的技術年會，邀請高雄在地講者上台分享，有更多曝光的機會！',
        'stw_what_title': '🧐 南臺灣技術社群大聚 是什麼？',
        'stw_what_content': '這是一個給技術社群組織者、技術活動參與者的交流活動。大多數在南部的社群都是單打獨鬥，努力經營著聚會維持著科技人的充電環境。我們希望透過這場聚會找到社群們以及參與者，讓社群被發現，同時也讓社群之間有機會交流籌備或經營的經驗，並且從中找到更多夥伴。<br><br>這場聚會是由眾多社群擔任主辦單位合力舉辦，以互動與趣味為核心安排了許多內容，目標是讓大家更能聚焦在「交流」。',
        'stw_what_detail': '這場聚會是由眾多社群擔任主辦單位合力舉辦，以互動與趣味為核心安排了許多內容，目標是讓大家更能聚焦在「交流」。',
        'about_event_title': '📝 關於活動',
        'devfest_section_title': '🎤 DevFest 2025 高雄場',
        'devfest_section_content': '議程講座：11/22（星期六） 08:30~18:00<br>生成大賽：11/23（星期日） 11:00~17:00',
        'day1_theme_title': '🚀 第一日議程主題：實作 (Implements)',
        'day1_theme_content': '從一個想法到一行程式碼，從一次部署到深遠的影響力。2025 年的 DevFest Kaohsiung，我們聚焦於 「實作 (Implements)」！我們不僅僅是探討理論，更要拿起鍵盤，敲打程式碼，把想法化為現實。<br><br>呼應 DevFest 全球主題 "Building Safe, Secure and Scalable Solutions with AI and Cloud"，您將會看到實戰經驗分享，無論你想學習成功的架構、想知道前人踩過哪些坑，或是想了解如何用技術讓世界更美好，這裡都有能啟發你的內容。',
        'day2_theme_title': '🏆 第二日工作坊主題：第二屆 AI 生成大賽',
        'day2_theme_content': '廣受好評的 AI 生成大賽又來啦！第二天的活動中，我們有二場生成大賽對應不同主體，先讓講者進行工作坊教學，再依照內容進行生成創作，流程如下<br><br>1. 會前準備：請自行攜帶充飽電的筆記型電腦。<br>2. 現場實作：我們將提供價值 $5 美元的 GCP 抵免額，讓您無負擔進行生成創作。<br>3. 創意挑戰：隨機公布創作主題，請運用該工作坊提供的工具生成對應的創作。<br>4. 優勝獎勵：每個場次的「最佳生成創作者」將可獲得活動紀念品乙個。',
        'polaroid_fest_title': '📸 拍立得 Fest',
        'polaroid_fest_content': '活動期間每人提供一張免費拍立得拍照服務，留下珍貴的活動回憶。',
        'pizza_time_title': '🍕 Pizza Time',
        'pizza_time_content': '下午茶時間享用美味 Pizza 和現場製作韓式雞蛋燒，為大腦充電繼續精彩議程。',
        'after_buffet_title': '🍽️ After Buffet',
        'after_buffet_content': '議程結束，Buffet 開始！讓我們一起到「高雄商旅 Urban Café 都會美饌」享用美味的 After Buffet，邊吃邊聊邊交流。<br><br>地點：https://maps.app.goo.gl/y9jiDaV2RFedoLkk7',
        'stw_section_title': '🧑‍🤝‍🧑 南臺灣技術社群大聚',
        'stw_section_content': '11/23（星期日） 11:00~17:00',
        'networking_title': '⭐ 眾多技術人的聊天交流或 Lightning Talk',
        'networking_content': '在這場活動旨在聚集眾多的技術社群組織者、技術工作者們參與 (包括但不限於： Mobile、前端、後端、AI、敏捷、系統、DevOps、設計、PM、Marketing Tech 等等)，在這個活動中可以有機會與不同領域的參與者們聊天交流、切磋技術、交流辦活動的想法，必定會有滿滿的收穫。<br><br>如果你有一個小議題或專案想要和所有人分享，這場活動中有一個時段與開放式舞台 (含投影設備) 提供登記閃電講，時間約在 3 - 5 分鐘，可以利用這個機會曝光你的議題或專案分享。',
        'tech_market_title': '⭐ 首次引入南臺灣的技術創作市集',
        'tech_market_content': '發想自日本的「技術書典」，這是一個專為技術社群打造的創作展示平台。透過實體攤位，創作者可以直接與會眾互動，展示並販售自己的技術創作作品，讓知識與創意在社群中流動。<br><br>報名擺攤：https://forms.gle/ZpXHk8VbA7q9bsWQ9',
        'meeting_room_title': '⭐ 主題討論會議室',
        'meeting_room_content': '提供了兩個會議室，讓參與者可以自行登記，呼朋引伴在會議室中聊天或分享較長的議題。在與他人進行眾多議題的交流中，很有可能會找到一個聚焦的議題和聽眾，此時非常推薦你立刻登記會議室坐下來和大家進行一個時段的議題深度交流。',
        'food_drinks_title': '⭐ 食物、點心、飲料',
        'food_drinks_content': '知識的交流可能會需要更多的美好零食來刺激，本次活動提供零食點心等下午茶供參與者自由取用。',
        'event_tips_title': '✨ 活動小擇步',
        'event_tips_content': '一些小提示和建議，幫助你更好地享受這次活動。',
        'transport_title': '🚇 離捷運站最近的場地',
        'transport_content': '今年我們一樣在交通更便利的「KO-IN 智高點」，距離捷運橘線信義國小站 3 號出口僅需 1 分鐘步程，出站即達！',
        'eco_friendly_title': '🥤 請記得自備容器',
        'eco_friendly_content': '跟往年一樣，我們定時補充飲品，讓您隨時補充能量！別忘了攜帶您的環保杯，現場不提供一次性容器，一起為地球盡一份心力。',
        'code_conduct_title': '✨ GDG 活動行為準則 (Code of Conduct)',
        'code_conduct_content': '所有參與者皆需遵守 GDG 活動行為準則，以確保所有人都能在一個安全友善的環境中學習與交流。<br><br>詳細內容請參閱：https://gdg.tw/code_of_conduct/',
        'privacy_title': '✔️ 袒集個人資料告知事項暨個人資料提供同意聲明',
        'privacy_content': '我們尊重並保護您的個人隱私<br><br>詳細內容請參閱：https://docs.google.com/document/d/1_rTlfAkLMl5ZfFwxZrNPhwzGQ5xU8g96bXyKZ3siW-4/edit?usp=sharing',
    },
    'en': {
        'nav_home': 'Home',
        'nav_schedule': 'Schedule',
        'nav_speakers': 'Speakers',
        'nav_tech_creation_market': 'Tech Creation Market',
        'nav_sponsors': 'Dream Team',
        'nav_booths': 'Community Booths',
        'nav_tickets': 'Tickets',
        'nav_about': 'About',
        'event_title': 'DevFest Kaohsiung X S. TW Communities Gathering 2025',
        'event_date_location': '11/22 (Sat) - 23 (Sun) in KO-IN',
        'day1_schedule': '22 - DevFest 2025 Kaohsiung',
        'day1_time': '🕣 08:30 ~ 18:00',
        'day2_schedule': '23 - S. TW Communities Gathering 2025',
        'day2_time': '🕚 11:00 ~ 17:00',
        'cta_button': 'Register Now',
        'schedule_title': 'Schedule',
        'schedule_intro': 'This year, GDG Kaohsiung and Developer Buffet are co-hosting a software community conference in Kaohsiung, titled "DevFest Kaohsiung X S. TW Communities Gathering 2025". <br><br>Let us give you a quick overview of the event highlights.',
        'schedule_day1': '11/22 (Saturday)',
        'schedule_day2': '11/23 (Sunday)',
        'track1': 'Track 1',
        'track2': 'Track 2',
        'd1_t1_title': 'Registration',
        'd1_t2_title': 'Opening',
        'd1_t2_track': 'Track 1',
        'd1_t3_title': 'Keynote',
        'd1_t3_track': 'Track 1',
        'd1_t4_s1_title': 'Session 1-1',
        'd1_t4_s2_title': 'Session 1-2',
        'd1_t5_s1_title': 'Session 2-1',
        'd1_t5_s2_title': 'Session 2-2',
        'd1_t5a_title': 'Lunch Break',
        'd1_t6_s1_title': 'Session 3-1',
        'd1_t6_s2_title': 'Session 3-2',
        'd1_t7_s1_title': 'Session 4-1',
        'd1_t7_s2_title': 'Session 4-2',
        'd1_t8_title': 'Pizza Time & Networking',
        'd1_t9_s1_title': 'Session 5-1',
        'd1_t9_s2_title': 'Session 5-2',
        'd1_t10_s1_title': 'Session 6-1',
        'd1_t10_s2_title': 'Session 6-2',
        'd1_t11_title': 'Closing',
        'd1_t11_track': 'Track 1',
        'd1_t12_title': 'After Buffet',
        'd1_t12_track': 'Urban Café at The Ambassador Hotel Kaohsiung',
        'd2_t1_title': 'Registration',
        'd2_t2_title': 'Opening',
        'd2_t2_track': 'Track 1',
        'd2_t3_s1_title': 'Community Networking',
        'd2_t4_s2_title': '2nd AI Generation Contest 1',
        'd2_t5_s2_title': '2nd AI Generation Contest 2',
        'd2_t6_title': 'Closing Ceremony',
        'd2_t6_track': 'Track 1',
        'speakers_title': 'Speakers',
        'simonliu_name': 'Simon Liu',
        'simonliu_org': 'APMIC / Google Developer Expert - AI',
        'simonliu_title': 'MLOps Engineer',
        'simonliu_topic_category_summary': 'Category: Generative Practices of Gemini AI',
        'simonliu_bio_full': 'Hello everyone, I\'m Simon Liu. I have served as a senior engineer in the telecommunications industry and as a customer technical success engineer in the software industry, helping major well-known companies discuss AI architecture planning for topics such as machine learning, deep learning, and large language models. I have published over a hundred technical articles on Medium. I hope to try to use AI for applications and help customers solve their pain points with AI.',
        'session_info_title': 'Session Information',
        'session_name_label': 'Name',
        'simonliu_topic_name': 'Building AI Agents: Combining Google Gemini and ADK Tools to Unleash Enterprise Productivity',
        'session_abstract_label': 'Abstract',
        'simonliu_topic_abstract': 'Through a series of Google platform tools, everyone can turn past imaginations into present realities. In this session, you will learn about:<br>1. How to plan UI/UX through Google Stitch<br>2. How to build a platform through Google Firebase Studio, and how to modify it',
        'tech_creation_market_title': 'Tech Creation Market',
        'tech_creation_market_p1': 'This year\'s DevFest Kaohsiung X S. TW Communities Gathering 2025 will feature a Tech Creation Market, a platform designed for the tech community to showcase their creations. Through physical booths, creators can interact directly with attendees, display and sell their tech-related works, allowing knowledge and creativity to flow and be exchanged within the community.',
        'tech_creation_market_p2': 'The primary medium is books, with each book being around 15-30 pages (this is just a reference, there are no strict limits). We welcome all creative content related to information technology, covering areas including but not limited to:',
        'tech_creation_market_li1': 'Frontend Development / Backend Development / DevOps',
        'tech_creation_market_li2': 'UI/UX Design / System Design',
        'tech_creation_market_li3': 'Hardware Development / Firmware Development',
        'tech_creation_market_li4': 'Software Engineering / Development Processes and Methodologies',
        'tech_creation_market_li5': 'Technical Management / Career Development and related topics',
        'tech_creation_market_p3': 'Considering the limited booth space, we will give priority to personal, non-commercially published works, giving more independent creators the opportunity to share their technical insights and experiences with the community.',
        'tech_creation_market_p4': 'Register for a booth: ',
        'tKug_booth_name': 'Taiwan Kotlin User Group Booth',
        'tKug_booth_desc': 'The Taiwan Kotlin User Group is dedicated to promoting the Kotlin language and its ecosystem. Whether it\'s backend development, Android, KMP, or the Ktor server framework, you can find practical and interesting applications.<br><br>At the Tech Creation Market, we have prepared Kotlin learning materials and development case studies to help developers get started quickly and experience the elegance and efficiency of Kotlin. We welcome you to come to our booth to exchange ideas, share learning experiences, or discuss how to build better software products with Kotlin!',
        'tKug_booth_items': '<b>Expected items for sale:</b> Personal technical zines, custom-designed small items.',
        'sponsors_title': 'Dream Team',
        'colosscious_name': 'Colosscious Teknology Inc.',
        'colosscious_desc': 'Colosscious builds intelligent laboratories for the #biotech and #pharmaceutical industries, enabling generative AI to act as an intelligent agent in the lab.<br>Creating seamless digitalization from Lab → QA, helping biotech and pharmaceutical laboratories improve efficiency and reliability.',
        'sponsor_tag_company': 'Corporate Sponsor',
        'booths_title': 'Community Booths',
        'gdg_kaohsiung_name': 'GDG Kaohsiung',
        'gdg_kaohsiung_desc': 'GDG Kaohsiung (Google Developer Groups Kaohsiung) is a developer community focused on technologies in the Google and Android App domains, including design, startups, and related industries. Formerly the Android Kaohsiung Developer Group, it was established in March 2014. We regularly host events like Build with AI, Google I/O Extended, DevFest, and TOOCON monthly meetups, aiming to provide opportunities for software development enthusiasts in Kaohsiung to connect. Follow our Facebook page and join our group for the latest event information.',
        'tickets_title': 'Tickets',
        'ticket_cta': 'Register Now',
        'tickets_paid_title': 'Paid Tickets',
        't_2day_name': '2-Day Pass',
        't_2day_price': 'TWD $680',
        't_2day_desc': 'Why choose? I want to attend both DevFest Kaohsiung & S. TW Communities Gathering.',
        't_sponsor_name': '2-Day Personal Sponsor Ticket',
        't_sponsor_price': 'TWD $4,400',
        't_sponsor_desc': 'Limited to four people. Includes a custom Badger 2040 e-ink name badge and many other gifts.',
        't_day1_name': 'Day 1 Pass',
        't_day1_price': 'TWD $440',
        't_day1_desc': 'For attending only the first day of DevFest 2025 Kaohsiung.',
        't_day2_name': 'Day 2 Pass',
        't_day2_price': 'TWD $240',
        't_day2_desc': 'For attending only the second day of S. TW Communities Gathering.',
        'tickets_addon_title': 'Add-ons',
        't_dinner_name': 'Day 1 Dinner Ticket',
        't_dinner_price': 'TWD $740',
        't_dinner_desc': 'Join the dinner at Urban Café, The Ambassador Hotel Kaohsiung on Saturday, 11/22.',
        't_shirt_name': 'Commemorative T-Shirt',
        't_shirt_price': 'TWD $340',
        't_shirt_desc': 'Breathable material.',
        'tickets_free_title': 'Free Tickets',
        't_free_price': 'TWD $0',
        'ticket_apply_cta': 'Apply for Discount Code',
        't_free_badge_name': 'Day 1 Free Ticket',
        't_free_badge_desc': 'Requires an invitation code. I have a GDG Kaohsiung community name badge.',
        't_free_speaker_name': 'Day 1 Free Ticket',
        't_free_speaker_desc': 'Requires an invitation code. I have been a speaker at a GDG Kaohsiung event.',
        't_free_volunteer_name': 'Day 1 Free Ticket',
        't_free_volunteer_desc': 'Requires an invitation code. I have been a volunteer for GDG Kaohsiung.',
        't_free_oscv_name': 'Day 1 Free Ticket',
        't_free_oscv_desc': 'Requires an invitation code. I have an OSCVPass (Open Source Contributor Fast Pass).',
        'about_title': 'About Us',
        'about_gdg_name': 'GDG Kaohsiung',
        'about_gdg_desc': 'GDG Kaohsiung (Google Developer Groups Kaohsiung) is a developer community focused on technologies in the Google and Android App domains, including design, startups, and related industries. Formerly the Android Kaohsiung Developer Group, it was established in March 2014. We regularly host events like Build with AI, Google I/O Extended, DevFest, and TOOCON monthly meetups, aiming to provide opportunities for software development enthusiasts in Kaohsiung to connect. Follow our Facebook page and join our group for the latest event information.',
        'about_buffet_name': 'Developer Buffet',
        'about_buffet_desc': 'We are a group of partners who met at tech conferences in Taiwan. Since the pandemic, tech community gatherings in our cities have become less frequent. To keep the spirit of discussion and exchange alive, we decided to organize meetups. We host various events covering topics like front-end, back-end, UI/UX, ML, and software development. We hope everyone can find and enjoy their interests here, hence the name "Developer Buffet". We have offline events, "Developer Café," every last Tuesday of the month from 19:00 to 21:00 at a café in Kaohsiung for casual chats with up to 10 developers. All topics are welcome ☕. We also hold online study groups periodically. You can find more details on our Discord. Welcome to join us 🙌',
        'about_cta': 'Visit Community',
        'register_cta': 'Register Now',
        'view_map': '📍 View Map',
        'devfest_what_title': '🧐 What is DevFest Kaohsiung?',
        'devfest_what_content': 'DevFest 是由 GDG (Google Developer Groups) 社群主辦的年度技術盛會，也是全球最大的開發者社群科技大會，因為是全球年會，在字尾增加城市名稱區別不同場次。<br><br>DevFest高雄場是 GDG Kaohsiung社群舉辦的軟體年會。我們致力將外地的技術大神帶到高雄，讓高雄的開發者不用舟車勞頓就能與頂尖講者交流；我們更希望能打造一個專屬「高雄」的技術年會，邀請高雄在地講者上台分享，有更多曝光的機會！',
        'devfest_what_detail': 'DevFest Kaohsiung is a software conference organized by the GDG Kaohsiung community. We are committed to bringing technical experts from outside to Kaohsiung, allowing Kaohsiung developers to interact with top speakers without traveling far; we also hope to create a technology conference exclusively for "Kaohsiung", inviting local Kaohsiung speakers to share on stage for more exposure opportunities!',
        'stw_what_title': '🧐 What is S. TW Communities Gathering?',
        'stw_what_content': '這是一個給技術社群組織者、技術活動參與者的交流活動。大多數在南部的社群都是單打獨鬥，努力經營著聚會維持著科技人的充電環境。我們希望透過這場聚會找到社群們以及參與者，讓社群被發現，同時也讓社群之間有機會交流籌備或經營的經驗，並且從中找到更多夥伴。<br><br>這場聚會是由眾多社群擔任主辦單位合力舉辦，以互動與趣味為核心安排了許多內容，目標是讓大家更能聚焦在「交流」。',
        'stw_what_detail': 'This gathering is jointly organized by multiple communities as co-hosts, with many interactive and fun activities at its core, aiming to help everyone focus more on "exchange".',
        'about_event_title': '📝 關於活動',
        'devfest_section_title': '🎤 DevFest Kaohsiung 2025',
        'devfest_section_content': '議程講座：11/22（星期六） 08:30~18:00<br>生成大賽：11/23（星期日） 11:00~17:00',
        'day1_theme_title': '🚀 第一日議程主題：實作 (Implements)',
        'day1_theme_content': '從一個想法到一行程式碼，從一次部署到深遠的影響力。2025 年的 DevFest Kaohsiung，我們聚焦於 「實作 (Implements)」！我們不僅僅是探討理論，更要拿起鍵盤，敲打程式碼，把想法化為現實。<br><br>呼應 DevFest 全球主題 "Building Safe, Secure and Scalable Solutions with AI and Cloud"，您將會看到實戰經驗分享，無論你想學習成功的架構、想知道前人踩過哪些坑，或是想了解如何用技術讓世界更美好，這裡都有能啟發你的內容。',
        'day2_theme_title': '🏆 第二日工作坊主題：第二屆 AI 生成大賽',
        'day2_theme_content': '廣受好評的 AI 生成大賽又來啦！第二天的活動中，我們有二場生成大賽對應不同主體，先讓講者進行工作坊教學，再依照內容進行生成創作，流程如下<br><br>1. 會前準備：請自行攜帶充飽電的筆記型電腦。<br>2. 現場實作：我們將提供價值 $5 美元的 GCP 抵免額，讓您無負擔進行生成創作。<br>3. 創意挑戰：隨機公布創作主題，請運用該工作坊提供的工具生成對應的創作。<br>4. 優勝獎勵：每個場次的「最佳生成創作者」將可獲得活動紀念品乙個。',
        'polaroid_fest_title': '📸 拍立得 Fest',
        'polaroid_fest_content': '活動期間每人提供一張免費拍立得拍照服務，留下珍貴的活動回憶。',
        'pizza_time_title': '🍕 Pizza Time',
        'pizza_time_content': '下午茶時間享用美味 Pizza 和現場製作韓式雞蛋燒，為大腦充電繼續精彩議程。',
        'after_buffet_title': '🍽️ After Buffet',
        'after_buffet_content': '議程結束，Buffet 開始！讓我們一起到「高雄商旅 Urban Café 都會美饌」享用美味的 After Buffet，邊吃邊聊邊交流。<br><br>地點：https://maps.app.goo.gl/y9jiDaV2RFedoLkk7',
        'stw_section_title': '🧑‍🤝‍🧑 南臺灣技術社群大聚',
        'stw_section_content': '11/23（星期日） 11:00~17:00',
        'networking_title': '⭐ 眾多技術人的聊天交流或 Lightning Talk',
        'networking_content': '在這場活動旨在聚集眾多的技術社群組織者、技術工作者們參與 (包括但不限於： Mobile、前端、後端、AI、敏捷、系統、DevOps、設計、PM、Marketing Tech 等等)，在這個活動中可以有機會與不同領域的參與者們聊天交流、切磋技術、交流辦活動的想法，必定會有滿滿的收穫。<br><br>如果你有一個小議題或專案想要和所有人分享，這場活動中有一個時段與開放式舞台 (含投影設備) 提供登記閃電講，時間約在 3 - 5 分鐘，可以利用這個機會曝光你的議題或專案分享。',
        'tech_market_title': '⭐ 首次引入南臺灣的技術創作市集',
        'tech_market_content': '發想自日本的「技術書典」，這是一個專為技術社群打造的創作展示平台。透過實體攤位，創作者可以直接與會眾互動，展示並販售自己的技術創作作品，讓知識與創意在社群中流動。<br><br>報名擺攤：https://forms.gle/ZpXHk8VbA7q9bsWQ9',
        'meeting_room_title': '⭐ 主題討論會議室',
        'meeting_room_content': '提供了兩個會議室，讓參與者可以自行登記，呼朋引伴在會議室中聊天或分享較長的議題。在與他人進行眾多議題的交流中，很有可能會找到一個聚焦的議題和聽眾，此時非常推薦你立刻登記會議室坐下來和大家進行一個時段的議題深度交流。',
        'food_drinks_title': '⭐ 食物、點心、飲料',
        'food_drinks_content': '知識的交流可能會需要更多的美好零食來刺激，本次活動提供零食點心等下午茶供參與者自由取用。',
        'event_tips_title': '活動小擇步',
        'event_tips_content': '一些小提示和建議，幫助你更好地享受這次活動。',
        'transport_title': '🚇 離捷運站最近的場地',
        'transport_content': '今年我們一樣在交通更便利的「KO-IN 智高點」，距離捷運橘線信義國小站 3 號出口僅需 1 分鐘步程，出站即達！',
        'eco_friendly_title': '🥤 請記得自備容器',
        'eco_friendly_content': '跟往年一樣，我們定時補充飲品，讓您隨時補充能量！別忘了攜帶您的環保杯，現場不提供一次性容器，一起為地球盡一份心力。',
        'code_conduct_title': '✨ GDG 活動行為準則 (Code of Conduct)',
        'code_conduct_content': '所有參與者皆需遵守 GDG 活動行為準則，以確保所有人都能在一個安全友善的環境中學習與交流。<br><br>詳細內容請參閱：https://gdg.tw/code_of_conduct/',
        'privacy_title': '✔️ 袒集個人資料告知事項暨個人資料提供同意聲明',
        'privacy_content': '我們尊重並保護您的個人隱私<br><br>詳細內容請參閱：https://docs.google.com/document/d/1_rTlfAkLMl5ZfFwxZrNPhwzGQ5xU8g96bXyKZ3siW-4/edit?usp=sharing',
    },
};

document.addEventListener('DOMContentLoaded', () => {
    const speakerCards = document.querySelectorAll('.speaker-card');

    speakerCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const scheduleContents = document.querySelectorAll('.schedule-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const day = button.dataset.day;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            scheduleContents.forEach(content => {
                if (content.id === day) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    const langButtons = {
        'zh-Hant': document.getElementById('lang-tw'),
        'en': document.getElementById('lang-en')
    };

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-i18n-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    };

    langButtons['zh-Hant'].addEventListener('click', () => {
        setLanguage('zh-Hant');
        if (window.dynamicContentManager) {
            window.dynamicContentManager.onLanguageChange('zh-Hant');
        }
    });
    langButtons['en'].addEventListener('click', () => {
        setLanguage('en');
        if (window.dynamicContentManager) {
            window.dynamicContentManager.onLanguageChange('en');
        }
    });

    // Set initial language
    setLanguage('zh-Hant');

    // --- Banner Carousel Functionality ---
    const carousel = document.querySelector('.banner-carousel');
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const indicators = carousel.querySelectorAll('.carousel-indicator');

        let currentSlide = 0;
        let autoplayInterval;

        // Function to show specific slide
        const showSlide = (index) => {
            // Remove active class from all slides and indicators
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));

            // Add active class to current slide and indicator
            slides[index].classList.add('active');
            indicators[index].classList.add('active');

            currentSlide = index;
        };

        // Function to go to next slide
        const nextSlide = () => {
            const next = (currentSlide + 1) % slides.length;
            showSlide(next);
        };

        // Function to go to previous slide
        const prevSlide = () => {
            const prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        };

        // Start autoplay
        const startAutoplay = () => {
            autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        };

        // Stop autoplay
        const stopAutoplay = () => {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            }
        };


        // Add event listeners for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                stopAutoplay();
                showSlide(index);
                startAutoplay();
            });
        });

        // Pause autoplay when user hovers over carousel
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);

        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                stopAutoplay();
                if (diff > 0) {
                    // Swiped left - go to next slide
                    nextSlide();
                } else {
                    // Swiped right - go to previous slide
                    prevSlide();
                }
                startAutoplay();
            }
        };

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                stopAutoplay();
                prevSlide();
                startAutoplay();
            } else if (e.key === 'ArrowRight') {
                stopAutoplay();
                nextSlide();
                startAutoplay();
            }
        });

        // Start autoplay when page loads
        startAutoplay();
    }

    // --- Page Switching Functionality ---
    const initPageSwitching = () => {
        const navLinks = document.querySelectorAll('.nav-link');
        const pagesSections = document.querySelectorAll('.page-section');

        // Function to switch to a specific page
        const switchToPage = (targetPageId) => {
            // Find current active section
            const currentSection = document.querySelector('.page-section.active');

            if (currentSection && currentSection.id !== targetPageId) {
                // Fade out current section
                currentSection.style.opacity = '0';

                setTimeout(() => {
                    // Remove active class from all sections and nav links
                    pagesSections.forEach(section => section.classList.remove('active'));
                    navLinks.forEach(link => link.classList.remove('active'));

                    // Find and activate the target page section
                    const targetSection = document.getElementById(targetPageId);
                    if (targetSection) {
                        targetSection.classList.add('active');
                        // Force reflow then fade in
                        targetSection.style.opacity = '0';
                        requestAnimationFrame(() => {
                            targetSection.style.opacity = '1';
                        });
                    }

                    // Find and activate the corresponding nav link
                    const targetNavLink = document.querySelector(`[data-page="${targetPageId}"]`);
                    if (targetNavLink) {
                        targetNavLink.classList.add('active');
                    }

                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('nav-links');
                    if (mobileMenu) {
                        mobileMenu.classList.remove('open');
                    }

                    // Scroll to top
                    window.scrollTo(0, 0);
                }, 200); // Wait for fade out to complete
            } else {
                // If no current section or same section, just activate directly
                pagesSections.forEach(section => section.classList.remove('active'));
                navLinks.forEach(link => link.classList.remove('active'));

                const targetSection = document.getElementById(targetPageId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }

                const targetNavLink = document.querySelector(`[data-page="${targetPageId}"]`);
                if (targetNavLink) {
                    targetNavLink.classList.add('active');
                }
            }
        };

        // Add click event listeners to nav links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = link.getAttribute('data-page');
                if (targetPage) {
                    switchToPage(targetPage);
                }
            });
        });

        // Initialize with home page active
        switchToPage('home');
    };

    // Initialize page switching
    initPageSwitching();

    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('nav-links');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenu.classList.remove('open');
            }
        });
    }
});
