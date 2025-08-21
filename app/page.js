import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Founder Section */}
      <section id="founder-section" className="fullscreen-block">
        <Image
          src="/images/bg-founder.webp"
          alt="甘妹弄堂創辦人故事背景圖"
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="fullscreen-bg"
        />
        <div className="content-wrapper">
          <h2>甘妹弄堂</h2>
          <p>名字取自老闆外婆「陳甘妹」<br />甘妹弄堂正在延續她的故事</p>
        </div>
      </section>

      {/* Product Section */}
      <section id="product-section" className="fullscreen-block">
        <Image
          src="/images/bg-product.webp"
          alt="甘妹弄堂招牌鐵板湯包產品圖"
          fill
          style={{ objectFit: 'cover' }}
          className="fullscreen-bg"
        />
        <div className="content-wrapper">
          <h2>甘妹</h2>
          <p>用家常美食為人們帶來溫馨<br />將傳統客家味帶進現代</p>
        </div>
      </section>

      {/* Ambiance Section */}
      <section id="ambiance-section" className="fullscreen-block">
        <Image
          src="/images/bg-alley.webp"
          alt="甘妹弄堂的巷弄用餐環境圖"
          fill
          style={{ objectFit: 'cover' }}
          className="fullscreen-bg"
        />
        <div className="content-wrapper">
          <h2>弄堂</h2>
          <p>是上海話中的「巷弄」<br />甘妹弄堂融合了客家、台式、上海<br />是多元料理文化的一間餐館</p>
        </div>
      </section>
    </>
  );
}
