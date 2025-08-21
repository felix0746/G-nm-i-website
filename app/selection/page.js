export const metadata = {
    title: '尋味聯繫 - 甘妹弄堂',
    description: '尋找甘妹弄堂？我們位於台北市萬華區昆明街130號，提供詳細的門市資訊、營業時間與聯絡方式。歡迎您親自前來品嚐我們的美食。',
};

export default function SelectionPage() {
    return (
        <main className="page-content contact-page">
            <div className="contact-card">
                <h2 className="card-title">門市資訊</h2>
                <div className="card-content">
                    <p><strong>營業時間：</strong></p>
                    <p>週一 ~ 週四 07:00 ~ 14:30 ; 17:00 ~ 21:00<br />(最後點餐時間：14:00 ; 20:30)</p>
                    <p>週五 ~ 週日 及 國定假日前一日 07:00 ~ 21:00<br />(最後點餐時間：20:30)</p>
                    <p><strong>營業地址：</strong> 台北市萬華區昆明街130號</p>
                    <p><strong>連絡電話：</strong> 02-2331-765</p>
                </div>
            </div>

            <div className="contact-card map-card">
                <iframe 
                    src="https://www.google.com/maps?q=台北市萬華區昆明街130號&output=embed" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div className="contact-card">
                <h2 className="card-title">聯繫我們</h2>
                <div className="card-content">
                    <p>有任何疑問及合作邀約都歡迎以EMAIL詢問<br />或於上班時間AM9：00~18：00來電洽詢</p>
                    <p><strong>電話：</strong> (02) 2559-0860</p>
                    <p><strong>E-MAIL：</strong> service@wowmiss.com</p>
                </div>
            </div>
        </main>
    );
}
