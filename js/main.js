// --- Data Definitions ---

// 💻 線索3：程式碼中的寶藏！解碼這個神秘字串 "HBWDKm3B7R" (提示：這不是Base64...)
const mysteryCode = "LDX876KCX7".split('').reverse().join('');
/*
   解謎提示：這個字串需要反向才是真正的邀請碼！
   聰明的你一定能看出來這是什麼編碼方式 😉
   解開後可以獲得第一日免費票 3（官網解謎活動）的邀請碼
*/

const translations = {
    'zh-Hant': {
        'nav_home': '首頁',
        'nav_schedule': '議程時間表',
        'nav_speakers': '講者介紹',
        'nav_tech_creation_market': '技術創作市集',
        'nav_sponsors': '特別感謝',
        'nav_community': '參與社群',
        'nav_staff': '志工介紹',
        'nav_about': '關於我們',
        'nav_tickets': '票種介紹',
        'event_title': 'DevFest 高雄場 X 南臺灣技術社群大聚 2025',
        'event_date_location': '11/22（六）- 23（日）<br class="break-on-mobile">in KO-IN 智高點',
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
        'sponsors_title': '特別感謝',
        'community_title': '參與社群',
        'staff_title': '志工介紹',
        'about_title': '關於我們',
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
        'register_cta': '報名參加',
        'view_map': '📍 查看地圖',
        'countdown_days': '天',
        'countdown_hours': '時',
        'countdown_minutes': '分',
        'countdown_seconds': '秒',
        'devfest_what_title': '🧐 DevFest 高雄場 是什麼？',
        'devfest_what_content': 'DevFest 是由 GDG (Google Developer Groups) 社群主辦的年度技術盛會，也是全球最大的開發者社群科技大會，因為是全球年會，在字尾增加城市名稱區別不同場次。<br><br>DevFest 高雄場是 GDG Kaohsiung 社群舉辦的軟體年會。我們致力將外地的技術大神帶到高雄，讓高雄的開發者不用舟車勞頓就能與頂尖講者交流；我們更希望能打造一個專屬「高雄」的技術年會，邀請高雄在地講者上台分享，有更多曝光的機會！',
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
        'polaroid_fest_title': '📸 拍立得 Fest（限量免費）',
        'polaroid_fest_content': '活動期間提供拍立得拍照服務，留下珍貴的活動回憶。',
        'pizza_time_title': '🍕 Pizza Time（限量免費）',
        'pizza_time_content': '下午茶時間享用美味 Pizza 和現場製作韓式雞蛋燒，為大腦充電繼續精彩議程。',
        'after_buffet_title': '🍽️ After Buffet（自費）',
        'after_buffet_content': '議程結束，Buffet 開始！讓我們一起到「高雄商旅 Urban Café 都會美饌」享用美味的 After Buffet，邊吃邊聊邊交流。<br><br><a href="https://maps.app.goo.gl/y9jiDaV2RFedoLkk7" target="_blank" rel="noopener noreferrer">查看地圖</a>',
        'stw_section_title': '🧑‍🤝‍🧑 南臺灣技術社群大聚',
        'stw_section_content': '11/23（星期日） 11:00~17:00',
        'networking_title': '⭐ 眾多技術人的聊天交流或 Lightning Talk',
        'networking_content': '在這場活動旨在聚集眾多的技術社群組織者、技術工作者們參與 (包括但不限於： Mobile、前端、後端、AI、敏捷、系統、DevOps、設計、PM、Marketing Tech 等等)，在這個活動中可以有機會與不同領域的參與者們聊天交流、切磋技術、交流辦活動的想法，必定會有滿滿的收穫。<br><br>如果你有一個小議題或專案想要和所有人分享，這場活動中有一個時段與開放式舞台 (含投影設備) 提供登記閃電講，時間約在 3 - 5 分鐘，可以利用這個機會曝光你的議題或專案分享。',
        'tech_market_title': '⭐ 首次引入南臺灣的技術創作市集',
        'tech_market_content': '發想自日本的「技術書典」，這是一個專為技術社群打造的創作展示平台。透過實體攤位，創作者可以直接與會眾互動，展示並販售自己的技術創作作品，讓知識與創意在社群中流動。<br><br><a href="https://forms.gle/ZpXHk8VbA7q9bsWQ9" target="_blank" rel="noopener noreferrer">報名擺攤</a>',
        'meeting_room_title': '⭐ 主題討論會議室',
        'meeting_room_content': '提供了兩個會議室，讓參與者可以自行登記，呼朋引伴在會議室中聊天或分享較長的議題。在與他人進行眾多議題的交流中，很有可能會找到一個聚焦的議題和聽眾，此時非常推薦你立刻登記會議室坐下來和大家進行一個時段的議題深度交流。',
        'food_drinks_title': '⭐ 食物、點心、飲料',
        'food_drinks_content': '知識的交流可能會需要更多的美好零食來刺激，本次活動提供零食點心等下午茶供參與者自由取用。',
        'event_tips_title': '✨ 活動小撇步',
        'event_tips_content': '一些小提示和建議，幫助你更好地享受這次活動。',
        'transport_title': '🚇 離捷運站最近的場地',
        'transport_content': '今年我們一樣在交通更便利的「KO-IN 智高點」，距離捷運橘線信義國小站 3 號出口僅需 1 分鐘步程，出站即達！<br><br>Google Map：<a href="https://maps.app.goo.gl/NSmtz1yTWxeH5LQi7" target="_blank" rel="noopener noreferrer">查看地圖</a>',
        'eco_friendly_title': '🥤 請記得自備容器',
        'eco_friendly_content': '跟往年一樣，我們定時補充飲品，讓您隨時補充能量！別忘了攜帶您的環保杯，現場不提供一次性容器，一起為地球盡一份心力。',
        'code_conduct_title': '✨ GDG 活動行為準則 (Code of Conduct)',
        'code_conduct_content': '所有參與者皆需遵守 GDG 活動行為準則，以確保所有人都能在一個安全友善的環境中學習與交流。<br><br>詳細內容請參閱：<a href="https://gdg.tw/code_of_conduct/" target="_blank" rel="noopener noreferrer">GDG 行為準則</a>',
        'privacy_title': '✔️ 蒐集個人資料告知事項暨個人資料提供同意聲明',
        'privacy_content': '我們尊重並保護您的個人隱私<br><br>詳細內容請參閱：<a href="https://docs.google.com/document/d/1_rTlfAkLMl5ZfFwxZrNPhwzGQ5xU8g96bXyKZ3siW-4" target="_blank" rel="noopener noreferrer">隱私權政策</a>',
        'page_test': '頁面測試中，敬請期待',
    },
    'en': {
        'nav_home': 'Home',
        'nav_schedule': 'Schedule',
        'nav_speakers': 'Speakers',
        'nav_tech_creation_market': 'Tech Creation Market',
        'nav_sponsors': 'Special Thanks',
        'nav_community': 'Community',
        'nav_staff': 'Volunteers',
        'nav_about': 'About',
        'nav_tickets': 'Tickets',
        'event_title': 'DevFest Kaohsiung X S. TW Communities Gathering 2025',
        'event_date_location': 'Nov 22 (Sat) - 23 (Sun)<br class="break-on-mobile">at KO-IN Smart Point',
        'day1_schedule': '22 - DevFest 2025 Kaohsiung',
        'day1_time': '🕣 08:30 ~ 18:00',
        'day2_schedule': '23 - S. TW Communities Gathering 2025',
        'day2_time': '🕚 11:00 ~ 17:00',
        'cta_button': 'Register Now',
        'schedule_title': 'Schedule',
        'schedule_intro': 'This year, GDG Kaohsiung and Developer Buffet are co-hosting the software community annual conference in Kaohsiung, officially named "DevFest Kaohsiung X S. TW Communities Gathering 2025".<br><br>Let us help you quickly capture the highlights of this event',
        'schedule_day1': 'Nov 22 (Saturday)',
        'schedule_day2': 'Nov 23 (Sunday)',
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
        'd1_t12_track': 'KH Hotel Urban Café',
        'd2_t1_title': 'Registration',
        'd2_t2_title': 'Opening',
        'd2_t2_track': 'Track 1',
        'd2_t3_s1_title': 'Networking Activities',
        'd2_t4_s2_title': '2nd AI Generation Contest 1',
        'd2_t5_s2_title': '2nd AI Generation Contest 2',
        'd2_t6_title': 'Closing',
        'd2_t6_track': 'Track 1',
        'speakers_title': 'Speakers',
        'tech_creation_market_title': 'Tech Creation Market',
        'tech_creation_market_p1': "This year's DevFest Kaohsiung X S. TW Communities Gathering 2025 will feature a Tech Creation Market, a creative showcase platform designed specifically for the tech community. Through physical booths, creators can directly interact with attendees, showcasing and selling their technical creations, allowing knowledge and creativity to flow and exchange within the community.",
        'tech_creation_market_p2': 'The primary medium is through book creation, with each book being approximately 15-30 pages (reference only, no actual restrictions). We welcome all creative content related to information technology, covering but not limited to:',
        'tech_creation_market_li1': 'Frontend Development / Backend Development / DevOps',
        'tech_creation_market_li2': 'UI/UX Design / System Design',
        'tech_creation_market_li3': 'Hardware Development / Firmware Development',
        'tech_creation_market_li4': 'Software Engineering / Development Processes and Methodologies',
        'tech_creation_market_li5': 'Technical Management / Career Development and related topics',
        'tech_creation_market_p3': 'Considering booth space limitations, we will prioritize non-commercially published individual creative works, giving more independent creators the opportunity to share their technical insights and experiences with the community.',
        'tech_creation_market_p4': 'Apply for booth:',
        'sponsors_title': 'Special Thanks',
        'community_title': 'Community',
        'staff_title': 'Volunteers',
        'about_title': 'About',
        'tickets_title': 'Tickets',
        'ticket_cta': 'Register Now',
        'tickets_paid_title': 'Paid Tickets',
        't_2day_name': 'Two-day Attendee Ticket',
        't_2day_price': 'TWD $680',
        't_2day_desc': "Children make choices, but I want to attend both DevFest Kaohsiung & S. TW Communities Gathering.",
        't_sponsor_name': 'Two-day Personal Sponsor Ticket',
        't_sponsor_price': 'TWD $4,400',
        't_sponsor_desc': 'Limited to four people, includes exclusive custom Badger 2040 e-paper business card display and many other gifts.',
        't_day1_name': 'Day 1 Attendee Ticket',
        't_day1_price': 'TWD $440',
        't_day1_desc': 'Access only to Day 1 DevFest 2025 Kaohsiung.',
        't_day2_name': 'Day 2 Attendee Ticket',
        't_day2_price': 'TWD $240',
        't_day2_desc': 'Access only to Day 2 S. TW Communities Gathering.',
        'tickets_addon_title': 'Add-on Purchases',
        't_dinner_name': 'Day 1 Dinner Ticket',
        't_dinner_price': 'TWD $740',
        't_dinner_desc': 'Join the Saturday evening Nov 22 dinner at KH Hotel Urban Café.',
        't_shirt_name': 'Event Commemorative T-shirt',
        't_shirt_price': 'TWD $340',
        't_shirt_desc': 'Breathable material.',
        'tickets_free_title': 'Free Tickets',
        't_free_price': 'TWD $0',
        'ticket_apply_cta': 'Apply for Discount Code',
        't_free_badge_name': 'Day 1 Free Ticket',
        't_free_badge_desc': 'Must use invitation code to purchase. I have a GDG Kaohsiung community badge card.',
        't_free_speaker_name': 'Day 1 Free Ticket',
        't_free_speaker_desc': 'Must use invitation code to purchase. I have been a speaker at GDG Kaohsiung events.',
        't_free_volunteer_name': 'Day 1 Free Ticket',
        't_free_volunteer_desc': 'Must use invitation code to purchase. I have been a GDG Kaohsiung volunteer.',
        't_free_oscv_name': 'Day 1 Free Ticket',
        't_free_oscv_desc': 'Must use invitation code to purchase. I have OSCVPass open source contributor fast pass.',
        'register_cta': 'Register Now',
        'view_map': '📍 View Map',
        'countdown_days': 'Days',
        'countdown_hours': 'Hrs',
        'countdown_minutes': 'Mins',
        'countdown_seconds': 'Secs',
        'devfest_what_title': '🧐 What is DevFest Kaohsiung?',
        'devfest_what_content': 'DevFest is an annual technology event hosted by GDG (Google Developer Groups) communities, and is the world\'s largest developer community tech conference. Since it\'s a global annual event, city names are added to distinguish different venues.<br><br>DevFest Kaohsiung is a software annual conference organized by the GDG Kaohsiung community. We are committed to bringing tech experts from other cities to Kaohsiung, allowing Kaohsiung developers to interact with top speakers without long travels; we also hope to create a unique "Kaohsiung" tech annual conference, inviting local Kaohsiung speakers to share on stage for more exposure opportunities!',
        'devfest_what_detail': 'DevFest Kaohsiung is a software annual conference organized by the GDG Kaohsiung community. We are committed to bringing tech experts from other cities to Kaohsiung, allowing Kaohsiung developers to interact with top speakers without long travels; we also hope to create a unique "Kaohsiung" tech annual conference, inviting local Kaohsiung speakers to share on stage for more exposure opportunities!',
        'stw_what_title': '🧐 What is S. TW Communities Gathering?',
        'stw_what_content': 'This is a networking event for tech community organizers and tech event participants. Most communities in the south are working alone, striving to organize meetups to maintain a recharging environment for tech people. We hope to find communities and participants through this gathering, make communities discoverable, and give communities opportunities to exchange experiences in organizing or management, finding more partners in the process.<br><br>This gathering is co-hosted by numerous communities as co-organizers, with many interactive and fun contents arranged with the core goal of helping everyone focus more on "networking".',
        'stw_what_detail': 'This gathering is co-hosted by numerous communities as co-organizers, with many interactive and fun contents arranged with the core goal of helping everyone focus more on "networking".',
        'about_event_title': '📝 About the Event',
        'devfest_section_title': '🎤 DevFest 2025 Kaohsiung',
        'devfest_section_content': 'Conference Sessions: Nov 22 (Saturday) 08:30~18:00<br>Generation Contest: Nov 23 (Sunday) 11:00~17:00',
        'day1_theme_title': '🚀 Day 1 Session Theme: Implementation (Implements)',
        'day1_theme_content': 'From an idea to a line of code, from one deployment to far-reaching impact. At DevFest Kaohsiung 2025, we focus on "Implementation (Implements)"! We\'re not just exploring theories, but picking up keyboards, typing code, and turning ideas into reality.<br><br>Echoing the global DevFest theme "Building Safe, Secure and Scalable Solutions with AI and Cloud", you will see practical experience sharing. Whether you want to learn successful architectures, know what pitfalls predecessors stepped on, or understand how to use technology to make the world better, there\'s content here that can inspire you.',
        'day2_theme_title': '🏆 Day 2 Workshop Theme: 2nd AI Generation Contest',
        'day2_theme_content': 'The well-received AI Generation Contest is back! In the second day activities, we have two generation contests corresponding to different subjects. Speakers will first conduct workshop teaching, then create generative content based on the material, with the following process:<br><br>1. Pre-event preparation: Please bring your fully charged laptop.<br>2. On-site implementation: We will provide $5 USD worth of GCP credits for burden-free generative creation.<br>3. Creative challenge: Randomly announce creation themes, use workshop-provided tools to generate corresponding creations.<br>4. Winner rewards: The "Best Generative Creator" from each session will receive an event souvenir.',
        'polaroid_fest_title': '📸 Polaroid Fest (Limited Free)',
        'polaroid_fest_content': 'Polaroid photography service provided during the event to preserve precious event memories.',
        'pizza_time_title': '🍕 Pizza Time (Limited Free)',
        'pizza_time_content': 'Enjoy delicious pizza and freshly made Korean egg bread during afternoon tea time, recharging your brain for continued exciting sessions.',
        'after_buffet_title': '🍽️ After Buffet (Self-funded)',
        'after_buffet_content': 'Sessions end, Buffet begins! Let\'s enjoy delicious After Buffet together at "KH Hotel Urban Café", eating, chatting, and networking.<br><br><a href="https://maps.app.goo.gl/y9jiDaV2RFedoLkk7" target="_blank" rel="noopener noreferrer">View Map</a>',
        'stw_section_title': '🧑‍🤝‍🧑 S. TW Communities Gathering',
        'stw_section_content': 'Nov 23 (Sunday) 11:00~17:00',
        'networking_title': '⭐ Numerous tech people chatting, networking, or Lightning Talks',
        'networking_content': 'This event aims to gather numerous tech community organizers and tech workers (including but not limited to: Mobile, Frontend, Backend, AI, Agile, Systems, DevOps, Design, PM, Marketing Tech, etc.). In this event, you can have opportunities to chat and network with participants from different fields, discuss technology, exchange event organizing ideas, and definitely have great gains.<br><br>If you have a small topic or project you want to share with everyone, this event has a time slot and open stage (with projection equipment) for lightning talk registration, approximately 3-5 minutes, which you can use to expose your topic or project sharing.',
        'tech_market_title': '⭐ First-time introduction of Tech Creation Market to Southern Taiwan',
        'tech_market_content': 'Inspired by Japan\'s "Gijutsu-shoten", this is a creative showcase platform designed specifically for the tech community. Through physical booths, creators can directly interact with attendees, showcasing and selling their technical creations, allowing knowledge and creativity to flow within the community.<br><br><a href="https://forms.gle/ZpXHk8VbA7q9bsWQ9" target="_blank" rel="noopener noreferrer">Apply for Booth</a>',
        'meeting_room_title': '⭐ Themed Discussion Meeting Rooms',
        'meeting_room_content': 'Two meeting rooms are provided for participants to self-register, gather friends to chat or share longer topics in the meeting rooms. In exchanges with others on numerous topics, you might find a focused topic and audience. We highly recommend you immediately register a meeting room to sit down with everyone for in-depth topic exchanges during a time slot.',
        'food_drinks_title': '⭐ Food, Snacks, Drinks',
        'food_drinks_content': 'Knowledge exchange might need more wonderful snacks as stimulation. This event provides afternoon tea snacks and treats for participants to freely enjoy.',
        'event_tips_title': '✨ Event Tips',
        'event_tips_content': 'Some tips and suggestions to help you better enjoy this event.',
        'transport_title': '🚇 Venue Closest to MRT Station',
        'transport_content': 'This year we\'re again at the more conveniently located "KO-IN Smart Point", just 1 minute walk from Exit 3 of Xinyi Elementary School Station on the Orange Line, arrive immediately upon exit!<br><br>Google Map: <a href="https://maps.app.goo.gl/NSmtz1yTWxeH5LQi7" target="_blank" rel="noopener noreferrer">View Map</a>',
        'eco_friendly_title': '🥤 Please Remember to Bring Your Own Container',
        'eco_friendly_content': 'Like previous years, we regularly refill beverages for you to recharge anytime! Don\'t forget to bring your eco-friendly cup, as disposable containers are not provided on-site. Let\'s do our part for the planet together.',
        'code_conduct_title': '✨ GDG Event Code of Conduct',
        'code_conduct_content': 'All participants must follow the GDG Event Code of Conduct to ensure everyone can learn and network in a safe and friendly environment.<br><br>For details, please refer to: <a href="https://gdg.tw/code_of_conduct/" target="_blank" rel="noopener noreferrer">GDG Code of Conduct</a>',
        'privacy_title': '✔️ Personal Data Collection Notice and Consent Statement',
        'privacy_content': 'We respect and protect your personal privacy<br><br>For details, please refer to: <a href="https://docs.google.com/document/d/1_rTlfAkLMl5ZfFwxZrNPhwzGQ5xU8g96bXyKZ3siW-4" target="_blank" rel="noopener noreferrer">Privacy Policy</a>',
        'page_test': 'The page is under testing, please stay tuned',
    },
    'ja': {
        'nav_home': 'ホーム',
        'nav_schedule': 'スケジュール',
        'nav_speakers': 'スピーカー',
        'nav_tech_creation_market': 'テック創作マーケット',
        'nav_sponsors': '特別感謝',
        'nav_community': 'コミュニティ',
        'nav_staff': 'ボランティア',
        'nav_about': 'について',
        'nav_tickets': 'チケット',
        'event_title': 'DevFest Kaohsiung X S. TW Communities Gathering 2025',
        'event_date_location': '11月22日（土）- 23日（日）<br class="break-on-mobile">KO-IN スマートポイント',
        'day1_schedule': '22日 - DevFest 2025 高雄',
        'day1_time': '🕣 08:30 ~ 18:00',
        'day2_schedule': '23日 - 南台湾技術コミュニティ大集合 2025',
        'day2_time': '🕚 11:00 ~ 17:00',
        'cta_button': '参加申込',
        'schedule_title': 'スケジュール',
        'schedule_intro': '今年、GDG KaohsiungとDeveloper Buffetが共同で高雄でソフトウェアコミュニティ年次大会を開催します。英語名称は「DevFest Kaohsiung X S. TW Communities Gathering 2025」、中国語名称は「DevFest 高雄場 X 南臺灣技術社群大聚 2025」です。<br><br>このイベントのハイライトを素早くお届けします',
        'schedule_day1': '11月22日（土曜日）',
        'schedule_day2': '11月23日（日曜日）',
        'track1': '会場1',
        'track2': '会場2',
        'd1_t1_title': '受付開始',
        'd1_t2_title': '開会式',
        'd1_t2_track': '会場1',
        'd1_t3_title': 'キーノート',
        'd1_t3_track': '会場1',
        'd1_t4_s1_title': 'セッション1-1',
        'd1_t4_s2_title': 'セッション1-2',
        'd1_t5_s1_title': 'セッション2-1',
        'd1_t5_s2_title': 'セッション2-2',
        'd1_t5a_title': '昼食休憩',
        'd1_t6_s1_title': 'セッション3-1',
        'd1_t6_s2_title': 'セッション3-2',
        'd1_t7_s1_title': 'セッション4-1',
        'd1_t7_s2_title': 'セッション4-2',
        'd1_t8_title': 'ピザタイム＆交流時間',
        'd1_t9_s1_title': 'セッション5-1',
        'd1_t9_s2_title': 'セッション5-2',
        'd1_t10_s1_title': 'セッション6-1',
        'd1_t10_s2_title': 'セッション6-2',
        'd1_t11_title': '閉会式',
        'd1_t11_track': '会場1',
        'd1_t12_title': 'アフタービュッフェ',
        'd1_t12_track': '高雄商旅 Urban Café 都会美饌',
        'd2_t1_title': '受付開始',
        'd2_t2_title': '開会式',
        'd2_t2_track': '会場1',
        'd2_t3_s1_title': '交流活動',
        'd2_t4_s2_title': '第2回AI生成コンテスト1',
        'd2_t5_s2_title': '第2回AI生成コンテスト2',
        'd2_t6_title': '閉会式',
        'd2_t6_track': '会場1',
        'speakers_title': 'スピーカー紹介',
        'tech_creation_market_title': 'テック創作マーケット',
        'tech_creation_market_p1': '今年のDevFest高雄 X 南台湾技術コミュニティ大集合2025では、技術コミュニティ専用の創作展示プラットフォームであるテック創作マーケットを開催します。物理的なブースを通じて、創作者は参加者と直接交流し、自身の技術創作作品を展示・販売することで、知識と創造性がコミュニティ内で流動し交流できます。',
        'tech_creation_market_p2': '主要媒体は書籍制作で、1冊のページ数は約15-30ページ程度（参考のみ、実際の制限はありません）。情報技術に関連するすべての創作内容を歓迎し、以下の分野を含みますが、これらに限定されません：',
        'tech_creation_market_li1': 'フロントエンド開発 / バックエンド開発 / DevOps',
        'tech_creation_market_li2': 'UI/UXデザイン / システムデザイン',
        'tech_creation_market_li3': 'ハードウェア開発 / ファームウェア開発',
        'tech_creation_market_li4': 'ソフトウェアエンジニアリング / 開発プロセスと方法論',
        'tech_creation_market_li5': '技術管理 / キャリア開発等の関連トピック',
        'tech_creation_market_p3': 'ブーススペースの制限を考慮し、商業出版されていない個人創作作品を優先的に採用し、より多くの独立創作者がコミュニティと技術的洞察や経験を共有する機会を提供します。',
        'tech_creation_market_p4': 'ブース出店申込：',
        'sponsors_title': '特別感謝',
        'community_title': '参加コミュニティ',
        'staff_title': 'ボランティア紹介',
        'about_title': '私たちについて',
        'tickets_title': 'チケット紹介',
        'ticket_cta': '今すぐ申込',
        'tickets_paid_title': '有料チケット',
        't_2day_name': '2日間参加者チケット',
        't_2day_price': 'TWD $680',
        't_2day_desc': '子供じゃないから選ばない、DevFest高雄＆南台湾技術コミュニティ大集合の両方に参加したい。',
        't_sponsor_name': '2日間個人スポンサーチケット',
        't_sponsor_price': 'TWD $4,400',
        't_sponsor_desc': '限定4名、専用カスタム Badger 2040 電子ペーパー名刺ディスプレイ1個をプレゼント、その他多数の特典付き。',
        't_day1_name': '第1日参加者チケット',
        't_day1_price': 'TWD $440',
        't_day1_desc': '第1日のDevFest 2025 高雄のみ参加可能。',
        't_day2_name': '第2日参加者チケット',
        't_day2_price': 'TWD $240',
        't_day2_desc': '第2日の南台湾技術コミュニティ大集合のみ参加可能。',
        'tickets_addon_title': '追加購入',
        't_dinner_name': '第1日ディナーチケット',
        't_dinner_price': 'TWD $740',
        't_dinner_desc': '11月22日土曜日夜の高雄商旅 Urban Café 都会美饌に参加。',
        't_shirt_name': '参加者記念Tシャツ',
        't_shirt_price': 'TWD $340',
        't_shirt_desc': '通気性素材。',
        'tickets_free_title': '無料チケット',
        't_free_price': 'TWD $0',
        'ticket_apply_cta': '割引コード申請フォーム',
        't_free_badge_name': '第1日無料チケット',
        't_free_badge_desc': '招待コード使用必須。GDG高雄コミュニティ名札カードを持っています。',
        't_free_speaker_name': '第1日無料チケット',
        't_free_speaker_desc': '招待コード使用必須。GDG高雄イベントでスピーカーを務めたことがあります。',
        't_free_volunteer_name': '第1日無料チケット',
        't_free_volunteer_desc': '招待コード使用必須。GDG高雄のボランティアを務めたことがあります。',
        't_free_oscv_name': '第1日無料チケット',
        't_free_oscv_desc': '招待コード使用必須。OSCVPass オープンソース貢献者ファストパスを持っています。',
        'register_cta': '参加申込',
        'view_map': '📍 地図を見る',
        'countdown_days': '日',
        'countdown_hours': '時間',
        'countdown_minutes': '分',
        'countdown_seconds': '秒',
        'devfest_what_title': '🧐 DevFest高雄とは？',
        'devfest_what_content': 'DevFestはGDG（Google Developer Groups）コミュニティが主催する年次技術イベントで、世界最大の開発者コミュニティ技術大会でもあります。世界年次大会であるため、異なる開催地を区別するために都市名を追加しています。<br><br>DevFest高雄はGDG Kaohsiungコミュニティが開催するソフトウェア年次大会です。私たちは他都市の技術エキスパートを高雄に招き、高雄の開発者が長距離移動することなくトップスピーカーと交流できるようにすることを目指しています。また、「高雄」独自の技術年次大会を創造し、高雄地元のスピーカーにステージで共有する機会を提供し、より多くの露出機会を得られることを期待しています！',
        'devfest_what_detail': 'DevFest高雄はGDG Kaohsiungコミュニティが開催するソフトウェア年次大会です。私たちは他都市の技術エキスパートを高雄に招き、高雄の開発者が長距離移動することなくトップスピーカーと交流できるようにすることを目指しています。また、「高雄」独自の技術年次大会を創造し、高雄地元のスピーカーにステージで共有する機会を提供し、より多くの露出機会を得られることを期待しています！',
        'stw_what_title': '🧐 南台湾技術コミュニティ大集合とは？',
        'stw_what_content': 'これは技術コミュニティ主催者、技術イベント参加者のための交流イベントです。南部のほとんどのコミュニティは単独で活動しており、ミートアップを企画・運営して技術者の充電環境を維持するために努力しています。私たちはこの集会を通してコミュニティや参加者を見つけ、コミュニティが発見され、同時にコミュニティ間で企画や運営の経験を交流し、その中でより多くのパートナーを見つける機会を提供したいと考えています。<br><br>この集会は多数のコミュニティが主催者として協力して開催し、交流と楽しさを中心に多くのコンテンツを用意し、皆さんが「交流」により集中できることを目標としています。',
        'stw_what_detail': 'この集会は多数のコミュニティが主催者として協力して開催し、交流と楽しさを中心に多くのコンテンツを用意し、皆さんが「交流」により集中できることを目標としています。',
        'about_event_title': '📝 イベントについて',
        'devfest_section_title': '🎤 DevFest 2025 高雄',
        'devfest_section_content': 'セッション講座：11月22日（土曜日）08:30~18:00<br>生成コンテスト：11月23日（日曜日）11:00~17:00',
        'day1_theme_title': '🚀 第1日セッションテーマ：実装（Implements）',
        'day1_theme_content': '1つのアイデアから1行のコードまで、1回のデプロイから深遠な影響力まで。2025年のDevFest Kaohsiungでは、「実装（Implements）」に焦点を当てています！理論を探求するだけでなく、キーボードを手に取り、コードを打ち、アイデアを現実に変えましょう。<br><br>DevFestグローバルテーマ「Building Safe, Secure and Scalable Solutions with AI and Cloud」に呼応し、実戦経験の共有をご覧いただけます。成功したアーキテクチャを学びたい、先人が踏んだ落とし穴を知りたい、技術を使って世界をより良くする方法を理解したい、どのような場合でも、ここにはあなたを刺激できる内容があります。',
        'day2_theme_title': '🏆 第2日ワークショップテーマ：第2回AI生成コンテスト',
        'day2_theme_content': '好評だったAI生成コンテストが帰ってきました！第2日の活動では、異なるテーマに対応する2つの生成コンテストを用意しています。まずスピーカーがワークショップで指導し、その後内容に基づいて生成創作を行います。プロセスは以下の通りです：<br><br>1. 事前準備：充電済みのノートパソコンをご持参ください。<br>2. 現場実装：5米ドル相当のGCPクレジットを提供し、負担なく生成創作を行えます。<br>3. 創造チャレンジ：創作テーマをランダムに発表し、ワークショップ提供のツールを使用して対応する創作を生成してください。<br>4. 優勝報酬：各セッションの「最優秀生成創作者」はイベント記念品を1個獲得できます。',
        'polaroid_fest_title': '📸 ポラロイドフェスト（数量限定無料）',
        'polaroid_fest_content': 'イベント期間中にポラロイド撮影サービスを提供し、貴重なイベントの思い出を残します。',
        'pizza_time_title': '🍕 ピザタイム（数量限定無料）',
        'pizza_time_content': 'アフタヌーンティー時間に美味しいピザと現場で作る韓国風卵焼きを楽しみ、脳を充電して素晴らしいセッションを続けましょう。',
        'after_buffet_title': '🍽️ アフタービュッフェ（自費）',
        'after_buffet_content': 'セッション終了、ビュッフェ開始！一緒に「高雄商旅 Urban Café 都会美饌」で美味しいアフタービュッフェを楽しみ、食べながら話しながら交流しましょう。<br><br><a href="https://maps.app.goo.gl/y9jiDaV2RFedoLkk7" target="_blank" rel="noopener noreferrer">地図を見る</a>',
        'stw_section_title': '🧑‍🤝‍🧑 南台湾技術コミュニティ大集合',
        'stw_section_content': '11月23日（日曜日）11:00~17:00',
        'networking_title': '⭐ 多数の技術者による交流・ライトニングトーク',
        'networking_content': 'このイベントは多数の技術コミュニティ主催者、技術従事者の参加を目指しています（以下を含みますが、これらに限定されません：モバイル、フロントエンド、バックエンド、AI、アジャイル、システム、DevOps、デザイン、PM、マーケティングテックなど）。このイベントでは、異なる分野の参加者との交流、技術議論、イベント企画のアイデア交換の機会があり、必ず豊富な収穫を得られるでしょう。<br><br>皆さんと共有したい小さなトピックやプロジェクトがあれば、このイベントでは時間枠とオープンステージ（投影設備付き）でライトニングトーク登録を提供し、時間は約3-5分です。この機会を利用してあなたのトピックやプロジェクトシェアを露出できます。',
        'tech_market_title': '⭐ 南台湾初導入のテック創作マーケット',
        'tech_market_content': '日本の「技術書典」からインスパイアされた、技術コミュニティ専用の創作展示プラットフォームです。物理的なブースを通じて、創作者は参加者と直接交流し、自身の技術創作作品を展示・販売し、知識と創造性をコミュニティ内で流動させます。<br><br><a href="https://forms.gle/ZpXHk8VbA7q9bsWQ9" target="_blank" rel="noopener noreferrer">ブース出店申込</a>',
        'meeting_room_title': '⭐ テーマディスカッション会議室',
        'meeting_room_content': '2つの会議室を提供し、参加者が自由に登録して友人を誘い、会議室でより長いトピックについて話し合ったり共有したりできます。他の人と多数のトピックについて交流する中で、焦点を絞ったトピックと聴衆を見つける可能性があります。その時は、すぐに会議室を登録して皆さんと座り、一定時間深いトピック交流を行うことを強くお勧めします。',
        'food_drinks_title': '⭐ 食べ物・お菓子・飲み物',
        'food_drinks_content': '知識の交流にはより多くの素晴らしいスナックが刺激として必要かもしれません。今回のイベントでは、参加者が自由に楽しめるスナックやお菓子などのアフタヌーンティーを提供します。',
        'event_tips_title': '✨ イベントのコツ',
        'event_tips_content': 'このイベントをより楽しむためのヒントと提案。',
        'transport_title': '🚇 MRT駅に最も近い会場',
        'transport_content': '今年も交通がより便利な「KO-IN スマートポイント」で開催します。MRTオレンジライン信義小学校駅3番出口から徒歩わずか1分、駅を出ればすぐ到着！<br><br>Google Map：<a href="https://maps.app.goo.gl/NSmtz1yTWxeH5LQi7" target="_blank" rel="noopener noreferrer">地図を見る</a>',
        'eco_friendly_title': '🥤 容器持参をお忘れなく',
        'eco_friendly_content': '例年同様、定期的に飲み物を補充し、いつでもエネルギー補給できます！エコカップの持参をお忘れなく。会場では使い捨て容器を提供しませんので、一緒に地球のために力を尽くしましょう。',
        'code_conduct_title': '✨ GDGイベント行動規範（Code of Conduct）',
        'code_conduct_content': 'すべての参加者はGDGイベント行動規範を遵守し、すべての人が安全で友好的な環境で学習・交流できることを保証する必要があります。<br><br>詳細内容は以下をご参照ください：<a href="https://gdg.tw/code_of_conduct/" target="_blank" rel="noopener noreferrer">GDG行動規範</a>',
        'privacy_title': '✔️ 個人データ収集通知事項および個人データ提供同意声明',
        'privacy_content': '私たちはあなたの個人プライバシーを尊重し保護します<br><br>詳細内容は以下をご参照ください：<a href="https://docs.google.com/document/d/1_rTlfAkLMl5ZfFwxZrNPhwzGQ5xU8g96bXyKZ3siW-4" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>',
        'page_test': 'このページは現在テスト中です。しばらくお待ちください。',
    },
};

document.addEventListener('DOMContentLoaded', () => {
    const speakerCards = document.querySelectorAll('.speaker-card');

    speakerCards.forEach(card => {
        card.addEventListener('click', () => {
            // Simply toggle the clicked card, don't affect others
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

    // Language Dropdown Management
    const languageDropdown = {
        trigger: document.getElementById('language-dropdown-trigger'),
        menu: document.getElementById('language-dropdown-menu'),
        currentLanguage: document.getElementById('current-language'),
        options: document.querySelectorAll('.language-option'),
        isOpen: false
    };

    const languageLabels = {
        'zh-Hant': '🇹🇼 繁體中文',
        'en': '🇬🇧 English',
        'ja': '🇯🇵 日本語'
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

        // Update current language display
        languageDropdown.currentLanguage.textContent = languageLabels[lang];

        // Update active state
        languageDropdown.options.forEach(option => {
            option.classList.remove('active');
            if (option.dataset.lang === lang) {
                option.classList.add('active');
            }
        });

        // Close dropdown
        closeLanguageDropdown();
    };

    const openLanguageDropdown = () => {
        languageDropdown.isOpen = true;
        languageDropdown.menu.classList.add('open');
        languageDropdown.trigger.setAttribute('aria-expanded', 'true');
    };

    const closeLanguageDropdown = () => {
        languageDropdown.isOpen = false;
        languageDropdown.menu.classList.remove('open');
        languageDropdown.trigger.setAttribute('aria-expanded', 'false');
    };

    // Dropdown trigger click handler
    languageDropdown.trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (languageDropdown.isOpen) {
            closeLanguageDropdown();
        } else {
            openLanguageDropdown();
        }
    });

    // Language option click handlers
    languageDropdown.options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.dataset.lang;
            setLanguage(lang);
            if (window.dynamicContentManager) {
                window.dynamicContentManager.onLanguageChange(lang);
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (languageDropdown.isOpen && !languageDropdown.trigger.contains(e.target) && !languageDropdown.menu.contains(e.target)) {
            closeLanguageDropdown();
        }
    });

    // Close dropdown on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && languageDropdown.isOpen) {
            closeLanguageDropdown();
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
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenu.classList.remove('open');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }

    // --- Countdown Timer ---
    function initCountdownTimer() {
        const targetDate = new Date('2025-11-22T09:00:00+08:00').getTime();

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                daysEl.textContent = '00';
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // --- Slides Carousel ---
    function initSlidesCarousel() {
        const slides = document.querySelectorAll('.slides-carousel .slide');
        const indicators = document.querySelectorAll('.slide-indicators .indicator');

        if (slides.length === 0 || indicators.length === 0) return;

        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Auto-advance slides every 5 seconds
        setInterval(nextSlide, 5000);

        // Click indicators to change slides
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
    }

    // Initialize new hero features
    initCountdownTimer();
    initSlidesCarousel();

    // --- Desk Items Interaction ---
    function initDeskItemsInteraction() {
        // Keyboard - glow and key press effect
        const keyboard = document.querySelector('.desk-item.keyboard');
        if (keyboard) {
            keyboard.addEventListener('click', () => {
                keyboard.classList.add('clicked');
                setTimeout(() => {
                    keyboard.classList.remove('clicked');
                }, 500);
            });
        }

        // Mouse - fly away effect
        const mouse = document.querySelector('.desk-item.mouse');
        if (mouse) {
            mouse.addEventListener('click', () => {
                mouse.classList.add('flying');
                setTimeout(() => {
                    // Reset position after animation
                    mouse.style.visibility = 'hidden';
                    setTimeout(() => {
                        mouse.classList.remove('flying');
                        mouse.style.visibility = 'visible';
                    }, 2000);
                }, 1000);
            });
        }

        // Duck - bounce effect
        const duck = document.querySelector('.desk-item.duck');
        if (duck) {
            duck.addEventListener('click', () => {
                duck.classList.add('clicked');
                setTimeout(() => {
                    duck.classList.remove('clicked');
                }, 600);
            });
        }

        // Bubble Tea - shake and bubble float
        const bubbleTea = document.querySelector('.desk-item.bubble-tea');
        if (bubbleTea) {
            bubbleTea.addEventListener('click', () => {
                bubbleTea.classList.add('clicked');
                setTimeout(() => {
                    bubbleTea.classList.remove('clicked');
                }, 800);
            });
        }

        // Polaroid - enlarge to view photo and change colors
        const polaroid = document.querySelector('.desk-item.polaroid');
        if (polaroid) {
            let isEnlarged = false;
            const colors = ['yellow', 'pink', 'green', 'blue'];
            let currentColorIndex = 0;

            polaroid.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!isEnlarged) {
                    // Enlarge polaroid
                    polaroid.classList.add('enlarged');
                    isEnlarged = true;

                    // Change color
                    // Remove all color classes
                    colors.forEach(color => {
                        polaroid.classList.remove(`color-${color}`);
                    });
                    // Add new color class
                    polaroid.classList.add(`color-${colors[currentColorIndex]}`);
                    currentColorIndex = (currentColorIndex + 1) % colors.length;

                    // Click anywhere to close
                    const closeHandler = (e) => {
                        if (!polaroid.contains(e.target) || e.target === polaroid) {
                            polaroid.classList.remove('enlarged');
                            isEnlarged = false;
                            document.removeEventListener('click', closeHandler);
                        }
                    };

                    setTimeout(() => {
                        document.addEventListener('click', closeHandler);
                    }, 100);
                }
            });
        }

        // Sticky Note - flutter effect and color change
        const stickyNote = document.querySelector('.desk-item.sticky-note');
        if (stickyNote) {
            // Color rotation: yellow -> green -> blue -> pink -> yellow
            const colors = ['yellow', 'green', 'blue', 'pink'];
            let currentColorIndex = 0;

            stickyNote.addEventListener('click', () => {
                stickyNote.classList.add('clicked');

                // Change color
                colors.forEach(color => {
                    stickyNote.classList.remove(`color-${color}`);
                });

                // Move to next color
                currentColorIndex = (currentColorIndex + 1) % colors.length;
                stickyNote.classList.add(`color-${colors[currentColorIndex]}`);

                setTimeout(() => {
                    stickyNote.classList.remove('clicked');
                }, 400);
            });
        }

        // Pizza - spin effect
        const pizza = document.querySelector('.desk-item.pizza');
        if (pizza) {
            pizza.addEventListener('click', () => {
                pizza.classList.add('clicked');
                setTimeout(() => {
                    pizza.classList.remove('clicked');
                }, 800);
            });
        }

        // Countdown Clock - flip number effect
        const countdownClock = document.querySelector('.desk-item.countdown-clock');
        if (countdownClock) {
            countdownClock.addEventListener('click', () => {
                countdownClock.classList.add('clicked');
                setTimeout(() => {
                    countdownClock.classList.remove('clicked');
                }, 600);
            });
        }
    }

    // Initialize desk items interaction
    initDeskItemsInteraction();

    // --- Monitor Power Button ---
    function initMonitorPowerButton() {
        const powerButton = document.getElementById('monitor-power-button');
        const monitorScreen = document.querySelector('.monitor-screen');

        if (!powerButton || !monitorScreen) return;

        let isScreenOn = true;

        powerButton.addEventListener('click', (e) => {
            e.stopPropagation();

            if (isScreenOn) {
                // Turn off screen
                monitorScreen.classList.add('powering-off');

                setTimeout(() => {
                    monitorScreen.classList.remove('powering-off');
                    monitorScreen.classList.add('screen-off');
                    isScreenOn = false;
                }, 500);
            } else {
                // Turn on screen
                monitorScreen.classList.remove('screen-off');
                monitorScreen.classList.add('powering-on');

                setTimeout(() => {
                    monitorScreen.classList.remove('powering-on');
                    isScreenOn = true;
                }, 500);
            }
        });
    }

    // Initialize monitor power button
    initMonitorPowerButton();
});
