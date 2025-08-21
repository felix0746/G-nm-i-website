import Image from 'next/image';

export const metadata = {
    title: '海外代理',
    description: '成為甘妹弄堂的海外代理夥伴，共同將正宗弄堂鐵板湯包的美味推廣至全球。了解我們的代理條件、營運優勢，並加入我們的行列。',
    keywords: ['甘妹弄堂', '海外代理', '加盟', '創業', '餐飲代理', '鐵板湯包加盟'],

    openGraph: {
        title: '海外代理 | 加入甘妹弄堂的行列',
        description: '認同我們的使命及理念？點擊了解代理條件與營運優勢，共同將正宗美味推廣至全球。',
        url: 'https://g-nm-i-website.vercel.app/agent',
        siteName: '甘妹弄堂',
        images: [
            {
                url: 'https://g-nm-i-website.vercel.app/images/Untitled (Website).png',
                width: 1200,
                height: 630,
                alt: '甘妹弄堂主廚專注製作餐點的形象照',
            },
        ],
        locale: 'zh_TW',
        type: 'website',
    },
};

export default function AgentPage() {
    return (
        <main className="page-content agent-page-new">
            <section className="agent-intro">
                <div className="agent-card info-card">
                    <h2>海外代理</h2>
                    <ul>
                        <li><strong>項目:</strong> 鐵板湯包、鐵板飯糰</li>
                        <li><strong>營業型態:</strong> 外帶/內用型態皆可</li>
                        <li><strong>店舖坪數需求:</strong> 8-20坪</li>
                        <li><strong>人力需求:</strong> 至少4人(含正職人員及PT)</li>
                        <li><strong>平均毛利率:</strong> 60%</li>
                        <li><strong>教育訓練:</strong> 至少4周</li>
                        <li><strong>合約期限:</strong> 三年換約一次</li>
                    </ul>
                </div>
                <div className="agent-card chef-image-card">
                    <picture>
                        <source srcSet="/images/Untitled (Website).webp" type="image/webp" />
                        <img src="/images/Untitled (Website).png" alt="甘妹弄堂主廚專注製作餐點的形象照" />
                    </picture>
                </div>
            </section>

            <section className="agent-card conditions-card">
                <h2>代理條件</h2>
                <ul>
                    <li>認同甘妹弄堂使命及理念,能為顧客的每份餐點品質把關。</li>
                    <li>年滿23歲以上,男女不拘,男性須役畢。</li>
                    <li>熱衷餐飲產業並有心學習一技之長及對創業極具信心與毅力。</li>
                    <li>需專職經營、信用良好、身體健康的有心創業人士。</li>
                    <li>合作夥伴需接受總部專業訓練,並考核通過。</li>
                    <li>店舖自有或租賃權益至少3年以上。</li>
                </ul>
            </section>

            <section className="advantages-section">
                <h2>營運優勢</h2>
                <div className="advantages-grid">
                    <div className="advantage-item">
                        <picture>
                            <source srcSet="/images/meeting.webp" type="image/webp" />
                            <img src="/images/meeting.png" alt="專業研發團隊圖示" />
                        </picture>
                        <p>研發團隊</p>
                    </div>
                    <div className="advantage-item">
                        <picture>
                            <source srcSet="/images/customer-service.webp" type="image/webp" />
                            <img src="/images/customer-service.png" alt="總部後勤支援服務圖示" />
                        </picture>
                        <p>總部服務</p>
                    </div>
                    <div className="advantage-item">
                        <picture>
                            <source srcSet="/images/bullhorn.webp" type="image/webp" />
                            <img src="/images/bullhorn.png" alt="多元行銷活動圖示" />
                        </picture>
                        <p>行銷活動</p>
                    </div>
                    <div className="advantage-item">
                        <picture>
                            <source srcSet="/images/analysis.webp" type="image/webp" />
                            <img src="/images/analysis.png" alt="完整教育訓練圖示" />
                        </picture>
                        <p>完整教育訓練</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
