// Dynamic Content Management System
// 動態內容管理系統

class DynamicContentManager {
    constructor() {
        this.currentLanguage = 'zh-Hant';
        this.data = {
            speakers: [],
            markets: [],
            sponsors: [],
            community: [],
            staff: [],
            about: []
        };
    }

    // 設定當前語言
    setLanguage(lang) {
        if (lang === 'en') {
            this.currentLanguage = 'en';
        } else if (lang === 'ja') {
            this.currentLanguage = 'ja';
        } else {
            this.currentLanguage = 'zh';
        }
    }

    // 取得多語言文字
    getText(textObj) {
        return textObj[this.currentLanguage] || textObj['zh'] || textObj['en'] || textObj['ja'] || '';
    }

    // 載入所有資料
    async loadAllData() {
        try {
            const [speakers, markets, sponsors, community, staff, about] = await Promise.all([
                this.loadJSON('data/speakers.json'),
                this.loadJSON('data/markets.json'),
                this.loadJSON('data/sponsors.json'),
                this.loadJSON('data/community.json'),
                this.loadJSON('data/staff.json'),
                this.loadJSON('data/about.json')
            ]);

            this.data.speakers = speakers.speakers || [];
            this.data.markets = markets.booths || [];
            this.data.sponsors = sponsors.sponsors || [];
            this.data.community = community.community || [];
            this.data.staff = staff.staff || [];
            this.data.about = about.about || [];

            this.renderAllContent();
            this.enhanceScheduleWithSpeakers();
        } catch (error) {
            console.error('載入資料時發生錯誤:', error);
        }
    }

    // 載入 JSON 檔案
    async loadJSON(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load ${url}: ${response.status}`);
        }
        return await response.json();
    }

    // 渲染所有內容
    renderAllContent() {
        this.renderSpeakers();
        this.renderMarkets();
        this.renderSponsors();
        this.renderCommunity();
        this.renderStaff();
        this.renderAbout();
    }

    // 渲染講者
    renderSpeakers() {
        const container = document.querySelector('#speakers .speakers-grid');
        if (!container) return;

        container.innerHTML = '';

        this.data.speakers.forEach(speaker => {
            const speakerCard = this.createSpeakerCard(speaker);
            container.appendChild(speakerCard);
        });

        // 重新綁定點擊事件
        this.bindSpeakerEvents();
    }

    // 建立講者卡片
    createSpeakerCard(speaker) {
        const card = document.createElement('div');
        card.className = 'speaker-card';
        card.setAttribute('data-speaker-id', speaker.id);

        const tagsHTML = speaker.tags.map(tag => `<span>#${tag}</span>`).join('');
        const socialLinks = this.createSocialLinks(speaker.social);

        card.innerHTML = `
            <img alt="Photo of ${this.getText(speaker.name)}" class="speaker-photo" src="${speaker.photo}">
            <div class="speaker-info">
                <h3 class="speaker-name">${this.getText(speaker.name)}</h3>
                <p class="speaker-org">${this.getText(speaker.org)}</p>
                <p class="speaker-title">${this.getText(speaker.title)}</p>
                <p class="speaker-topic-category">${this.getText(speaker.topic_category)}</p>
                <div class="speaker-tags summary-tags">
                    ${tagsHTML}
                </div>
                ${socialLinks}
            </div>
            <div class="speaker-details">
                <div class="speaker-details-content">
                    <p class="speaker-bio-full">${this.getText(speaker.bio)}</p>
                    <div class="session-info-block">
                        <h4>議程資訊</h4>
                        <p><strong>名稱：</strong><span>${this.getText(speaker.session.name)}</span></p>
                        <p><strong>簡介：</strong><span>${this.getText(speaker.session.abstract)}</span></p>
                    </div>
                </div>
            </div>
        `;

        return card;
    }

    // 渲染技術創作市集
    renderMarkets() {
        const container = document.querySelector('#tech-creation-market .market-grid');
        if (!container) return;

        container.innerHTML = '';

        this.data.markets.forEach(booth => {
            const boothCard = this.createMarketCard(booth);
            container.appendChild(boothCard);
        });
    }

    // 建立技術市集卡片
    createMarketCard(booth) {
        const card = document.createElement('div');
        card.className = 'market-booth-card';

        const socialLinks = this.createSocialLinks(booth.social);

        card.innerHTML = `
            <img alt="${this.getText(booth.name)} Logo" class="market-booth-image" src="${booth.logo}">
            <div class="market-booth-info">
                <h3 class="market-booth-title">${this.getText(booth.name)}</h3>
                <div class="market-booth-description">${this.getText(booth.description)}</div>
                ${socialLinks}
            </div>
        `;

        return card;
    }

    // 渲染贊助夥伴
    renderSponsors() {
        const container = document.querySelector('#sponsors .sponsors-grid');
        if (!container) return;

        container.innerHTML = '';

        this.data.sponsors.forEach(sponsor => {
            const sponsorCard = this.createSponsorCard(sponsor);
            container.appendChild(sponsorCard);
        });
    }

    // 建立贊助商卡片
    createSponsorCard(sponsor) {
        const card = document.createElement('div');
        card.className = 'sponsor-card';

        const socialLinks = this.createSocialLinks(sponsor.social);

        // 判斷贊助類型 (公司 or 個人)
        const sponsorType = sponsor.type || 'company'; // 預設為公司
        let typeText;
        if (sponsorType === 'company') {
            if (this.currentLanguage === 'zh') {
                typeText = '公司贊助';
            } else if (this.currentLanguage === 'ja') {
                typeText = '企業スポンサー';
            } else {
                typeText = 'Corporate Sponsor';
            }
        } else {
            if (this.currentLanguage === 'zh') {
                typeText = '個人贊助';
            } else if (this.currentLanguage === 'ja') {
                typeText = '個人スポンサー';
            } else {
                typeText = 'Individual Sponsor';
            }
        }

        card.innerHTML = `
            <img alt="${this.getText(sponsor.name)} Logo"
                 class="sponsor-image"
                 src="${sponsor.logo}"
                 onclick="window.open('${sponsor.website}', '_blank')"
                 style="cursor: pointer;">
            <div class="sponsor-info">
                <div class="sponsor-type ${sponsorType}">${typeText}</div>
                <h3 class="sponsor-title">${this.getText(sponsor.name)}</h3>
                <div class="sponsor-category">${this.getText(sponsor.category)}</div>
                <div class="sponsor-description">${this.getText(sponsor.description)}</div>
                ${socialLinks}
            </div>
        `;

        return card;
    }

    // 渲染參與社群
    renderCommunity() {
        const container = document.querySelector('#community .community-grid');
        if (!container) return;

        container.innerHTML = '';

        this.data.community.forEach(community => {
            const communityCard = this.createCommunityCard(community);
            container.appendChild(communityCard);
        });
    }

    // 建立社群卡片
    createCommunityCard(community) {
        const card = document.createElement('div');
        card.className = 'community-card';

        const socialLinks = this.createSocialLinks(community.social);

        card.innerHTML = `
            <img alt="${this.getText(community.name)} Logo"
                 class="community-image"
                 src="${community.logo}"
                 onclick="window.open('${community.website}', '_blank')"
                 style="cursor: pointer;">
            <div class="community-info">
                <h3 class="community-title">${this.getText(community.name)}</h3>
                <div class="community-category">${this.getText(community.category)}</div>
                <div class="community-description">${this.getText(community.description)}</div>
                ${socialLinks}
            </div>
        `;

        return card;
    }

    // 渲染關於我們
    renderAbout() {
        const container = document.querySelector('#about .about-grid');
        if (!container) return;

        container.innerHTML = '';

        this.data.about.forEach(booth => {
            const boothCard = this.createAboutCard(booth);
            container.appendChild(boothCard);
        });
    }

    // 建立關於我們卡片
    createAboutCard(booth) {
        const card = document.createElement('div');
        card.className = 'about-card';

        const socialLinks = this.createSocialLinks(booth.social);

        card.innerHTML = `
            <img alt="${this.getText(booth.name)} Logo" class="about-image" src="${booth.logo}">
            <div class="about-info-new">
                <h3 class="about-title">${this.getText(booth.name)}</h3>
                <div class="about-description-new">${this.getText(booth.description)}</div>
                ${socialLinks}
            </div>
        `;

        return card;
    }

    // 建立社群連結
    createSocialLinks(social) {
        if (!social) return '';

        const links = Object.entries(social).map(([platform, url]) => {
            const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link">${platformName}</a>`;
        }).join(' ');

        return `<div class="social-links">${links}</div>`;
    }

    // 綁定講者卡片點擊事件
    bindSpeakerEvents() {
        const speakerCards = document.querySelectorAll('.speaker-card');
        speakerCards.forEach(card => {
            card.addEventListener('click', () => {
                // Simply toggle the clicked card, don't affect others
                card.classList.toggle('expanded');
            });
        });
    }

    // 新增講者
    async addSpeaker(speakerData) {
        this.data.speakers.push(speakerData);
        await this.saveData('speakers', { speakers: this.data.speakers });
        this.renderSpeakers();
    }

    // 新增技術市集攤位
    async addMarketBooth(boothData) {
        this.data.markets.push(boothData);
        await this.saveData('markets', {booths: this.data.markets});
        this.renderMarkets();
    }

    // 新增贊助商
    async addSponsor(sponsorData) {
        this.data.sponsors.push(sponsorData);
        await this.saveData('sponsors', { sponsors: this.data.sponsors });
        this.renderSponsors();
    }

    // 新增參與社群
    async addCommunity(communityData) {
        this.data.community.push(communityData);
        await this.saveData('community', {community: this.data.community});
        this.renderCommunity();
    }

    // 渲染志工介紹
    renderStaff() {
        const container = document.querySelector('#staff .staff-grid');
        if (!container) return;

        container.innerHTML = '';

        this.data.staff.forEach(staff => {
            const staffCard = this.createStaffCard(staff);
            container.appendChild(staffCard);
        });
    }

    // 建立志工卡片
    createStaffCard(staff) {
        const card = document.createElement('div');
        card.className = 'staff-card';

        const socialLinks = this.createSocialLinks(staff.social);

        card.innerHTML = `
            <img alt="${this.getText(staff.name)} Photo"
                 class="staff-image"
                 src="${staff.photo}"
                 style="cursor: pointer;">
            <div class="staff-info">
                <h3 class="staff-title">${this.getText(staff.name)}</h3>
                <div class="staff-category">${this.getText(staff.category)}</div>
                <div class="staff-description">${this.getText(staff.description)}</div>
                ${socialLinks}
            </div>
        `;

        return card;
    }

    // 新增志工
    async addStaff(staffData) {
        this.data.staff.push(staffData);
        await this.saveData('staff', {staff: this.data.staff});
        this.renderStaff();
    }

    // 新增關於我們
    async addAbout(aboutData) {
        this.data.about.push(aboutData);
        await this.saveData('about', {about: this.data.about});
        this.renderAbout();
    }

    // 儲存資料（注意：這在靜態網站中不會真的儲存到檔案）
    async saveData(type, data) {
        console.log(`Saving ${type} data:`, data);
        // 在真實環境中，這裡需要呼叫後端 API 來儲存資料
        // 或者使用其他儲存方式如 localStorage（但重新整理後會消失）
    }

    // 語言切換時重新渲染
    onLanguageChange(lang) {
        this.setLanguage(lang);
        this.renderAllContent();
        this.enhanceScheduleWithSpeakers();
    }

    // 增強議程頁面，加入講者資訊
    enhanceScheduleWithSpeakers() {
        // 找到所有議程項目
        const sessions = document.querySelectorAll('.session:not(.break)');

        sessions.forEach(sessionEl => {
            // 取得議程標題元素
            const titleEl = sessionEl.querySelector('.session-title');
            if (!titleEl) return;

            // 從 data-i18n-key 取得 session_id
            const sessionId = titleEl.getAttribute('data-i18n-key');
            if (!sessionId) return;

            // 找到對應的講者
            const speaker = this.data.speakers.find(s => s.schedule && s.schedule.session_id === sessionId);
            if (!speaker) return;

            // 檢查是否已經加入講者資訊
            if (sessionEl.querySelector('.speaker-info-inline')) return;

            // 創建講者資訊元素
            const speakerInfoEl = this.createInlineSpeakerInfo(speaker);

            // 創建可展開的詳細內容
            const expandableContentEl = this.createExpandableContent(speaker);

            // 將講者資訊插入到 session-info 中
            const sessionInfoEl = sessionEl.querySelector('.session-info');
            if (sessionInfoEl) {
                sessionInfoEl.appendChild(speakerInfoEl);
                sessionInfoEl.appendChild(expandableContentEl);
            }

            // 添加摺疊/展開功能
            this.addToggleExpandFunctionality(sessionEl, speaker.id);
        });
    }

    // 創建內嵌講者資訊
    createInlineSpeakerInfo(speaker) {
        const speakerInfo = document.createElement('div');
        speakerInfo.className = 'speaker-info-inline';

        speakerInfo.innerHTML = `
            <div class="speaker-avatar">
                <img src="${speaker.photo}" alt="${this.getText(speaker.name)}" class="speaker-photo-small">
            </div>
            <div class="speaker-details-inline">
                <div class="speaker-name-small">${this.getText(speaker.name)}</div>
                <div class="speaker-org-small">${this.getText(speaker.org)}</div>
            </div>
        `;

        return speakerInfo;
    }

    // 創建可展開的議程詳細內容
    createExpandableContent(speaker) {
        const expandableContent = document.createElement('div');
        expandableContent.className = 'session-expandable';

        // 根據當前語言動態設定標籤文字
        const sessionAbstractLabel = this.currentLanguage === 'en' ? 'Session Overview:' :
            this.currentLanguage === 'ja' ? 'セッション概要：' : '議程簡介：';
        const speakerBioLabel = this.currentLanguage === 'en' ? 'Speaker Bio:' :
            this.currentLanguage === 'ja' ? 'スピーカー紹介：' : '講者簡介：';

        expandableContent.innerHTML = `
            <div class="session-details-expanded">
                <div class="session-abstract">
                    <strong>${sessionAbstractLabel}</strong>
                    <p>${this.getText(speaker.session.abstract)}</p>
                </div>
                <div class="speaker-bio-short">
                    <strong>${speakerBioLabel}</strong>
                    <p>${this.getText(speaker.bio).substring(0, 150)}...</p>
                </div>
            </div>
        `;

        return expandableContent;
    }

    // 添加摺疊/展開功能
    addToggleExpandFunctionality(sessionEl, speakerId) {
        sessionEl.style.cursor = 'pointer';

        sessionEl.addEventListener('click', (e) => {
            // 檢查是否為手機版 (寬度小於768px)
            if (window.innerWidth <= 768) {
                e.stopPropagation();
                this.toggleSessionExpansion(sessionEl);
            } else {
                // 桌面版直接跳轉到講者頁面
                this.navigateToSpeaker(speakerId);
            }
        });
    }

    // 切換議程展開/收合狀態
    toggleSessionExpansion(sessionEl) {
        const isExpanded = sessionEl.classList.contains('expanded');

        if (isExpanded) {
            // 收合
            sessionEl.classList.remove('expanded');
        } else {
            // 先收合其他已展開的議程
            const expandedSessions = document.querySelectorAll('.session.expanded');
            expandedSessions.forEach(session => {
                if (session !== sessionEl) {
                    session.classList.remove('expanded');
                }
            });

            // 展開當前議程
            sessionEl.classList.add('expanded');

            // 滾動到可視區域
            setTimeout(() => {
                sessionEl.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 300);
        }
    }

    // 導航到講者詳細頁面
    navigateToSpeaker(speakerId) {
        // 切換到講者頁面
        const speakersTab = document.querySelector('[data-page="speakers"]');
        if (speakersTab) {
            speakersTab.click();
        }

        // 等待頁面切換完成後，滾動到對應講者
        setTimeout(() => {
            const speakerCard = document.querySelector(`[data-speaker-id="${speakerId}"]`);
            if (speakerCard) {
                speakerCard.scrollIntoView({behavior: 'smooth', block: 'center'});
                speakerCard.classList.add('highlighted');

                // 2秒後移除高亮效果
                setTimeout(() => {
                    speakerCard.classList.remove('highlighted');
                }, 2000);
            }
        }, 300);
    }
}

// 建立全域實例
window.dynamicContentManager = new DynamicContentManager();

// 在頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', () => {
    window.dynamicContentManager.loadAllData();
});

// 匯出給其他模組使用
export default DynamicContentManager;