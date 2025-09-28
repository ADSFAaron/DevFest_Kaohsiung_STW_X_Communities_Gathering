// Dynamic Content Management System
// 動態內容管理系統

class DynamicContentManager {
    constructor() {
        this.currentLanguage = 'zh-Hant';
        this.data = {
            speakers: [],
            markets: [],
            sponsors: [],
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
            const [speakers, markets, sponsors, about] = await Promise.all([
                this.loadJSON('data/speakers.json'),
                this.loadJSON('data/markets.json'),
                this.loadJSON('data/sponsors.json'),
                this.loadJSON('data/about.json')
            ]);

            this.data.speakers = speakers.speakers || [];
            this.data.markets = markets.booths || [];
            this.data.sponsors = sponsors.sponsors || [];
            this.data.about = about.about || [];

            this.renderAllContent();
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

    // 渲染關於我們
    renderAbout() {
        const container = document.querySelector('#about-communities .about-grid');
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