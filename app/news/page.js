import MenuTabs from './MenuTabs';

export const metadata = {
    title: '美食菜單 - 甘妹弄堂',
    description: '查看甘妹弄堂的最新美食菜單，包含「食朝」早餐系列與「食晝」午晚餐系列。從招牌鐵板湯包到各式組合套餐，滿足您的味蕾。',
    keywords: ['甘妹弄堂', '菜單', '鐵板湯包', '小籠湯包', '組合套餐', '早餐', '午餐', '晚餐'],
    
    openGraph: {
        title: '甘妹弄堂美食菜單 | 食朝與食晝',
        description: '從招牌鐵板湯包到各式組合套餐，點擊查看我們的完整菜單。',
        url: 'https://g-nm-i-website.vercel.app/news', // 您的 Vercel 網址
        siteName: '甘妹弄堂',
        images: [
            {
                url: 'https://g-nm-i-website.vercel.app/images/招牌組合套餐.jpeg', // 分享時顯示的預覽圖
                width: 1200,
                height: 630,
                alt: '甘妹弄堂招牌組合套餐',
            },
        ],
        locale: 'zh_TW',
        type: 'website',
    },
};

export default function MenuPage() {
    return (
        <main className="page-content menu-page">
            <MenuTabs />
        </main>
    );
}
