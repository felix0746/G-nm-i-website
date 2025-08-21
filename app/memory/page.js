import Image from 'next/image';

export const metadata = {
  title: '弄堂記憶 - 甘妹弄堂',
  description: '探索甘妹弄堂的品牌故事與弄堂記憶。從外婆陳甘妹女士的客家傳承，到融合台式與上海風味的獨家鐵板工法，每一道菜都承載著家庭的溫暖與美好。',
};

export default function MemoryPage() {
  return (
    <main className="page-content memory-page">
      <section className="memory-block origin-block">
        <div className="text-content">
          <h2>甘妹緣起</h2>
          <p>【甘妹弄堂】的名字，源自老闆第二代的外婆 陳甘妹女士。在竹東的客家文化底蘊中，她是一位質樸、傳統的莊腳人，也是香蓮創辦人，潘扶旺的岳母、劉素玲的母親。這個名字不僅是品牌的象徵，更是對傳統家庭價值和美食傳承的致敬。</p>
        </div>
        <div className="image-content">
          <picture>
            <source srcSet="/images/甘妹老照片_180801_0003.webp" type="image/webp" />
            <img src="/images/甘妹老照片_180801_0003.jpg" alt="創辦人陳甘妹女士的舊照片" />
          </picture>
        </div>
      </section>

      <section className="memory-block quote-block">
        <p className="quote-text">陳甘妹女士以其家常美食為家人帶來溫馨，而甘妹弄堂的靈感是延續她的故事，將傳統的客家味道帶進現代，讓每一道菜都承載著家庭的溫暖與美好，也是甘妹弄堂文化的根基。</p>
      </section>

      <section className="memory-block family-photo-block">
        <picture>
          <source srcSet="/images/甘妹老照片_180801_0011.webp" type="image/webp" />
          <img src="/images/甘妹老照片_180801_0011.jpg" alt="甘妹弄堂的家庭溫馨合照" />
        </picture>
      </section>
      
      <section className="memory-block teppan-section">
        <div className="intro-content">
          <p>甘妹弄堂的菜餚是客家、台式和上海等多樣料理文化的完美融合。走入甘妹弄堂，您將品嚐到客家人偏愛的鹹、肥、香的特色。</p>
          <div className="food-gallery">
            <picture>
              <source srcSet="/images/ubereats X 甘妹弄堂_220711_7.webp" type="image/webp" />
              <img src="/images/ubereats X 甘妹弄堂_220711_7.jpg" alt="甘妹弄堂的美味餐點組合" />
            </picture>
            <picture>
              <source srcSet="/images/梅干豬里肌.webp" type="image/webp" />
              <img src="/images/梅干豬里肌.jpg" alt="甘妹弄堂的招牌菜梅干豬里肌" />
            </picture>
          </div>
        </div>
        <div className="teppan-content">
          <div className="text-content">
            <h2>鐵板工法</h2>
            <p>獨家鐵板工法，讓台灣傳統美食融入上海味，為每一位來用餐的客人，留下難以忘懷的美食記憶。</p>
          </div>
          <div className="image-content">
            <picture>
              <source srcSet="/images/DSC_8694 1.webp" type="image/webp" />
              <img src="/images/DSC_8694 1.png" alt="師傅正在使用鐵板專注地製作料理" />
            </picture>
          </div>
        </div>
      </section>
    </main>
  );
}
