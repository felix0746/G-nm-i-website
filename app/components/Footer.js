import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <section className="partners-section">
                <h2>相關企業</h2>
                <div className="logo-grid">
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="logo-item">
                        <picture>
                            <source srcSet="/images/MISS.webp" type="image/webp" />
                            <img src="/images/MISS.png" alt="The MISS" />
                        </picture>
                    </Link>
                    <Link href="http://www.sltpanyaki.com.tw/front/bin/home.phtml" target="_blank" rel="noopener noreferrer" className="logo-item">
                        <picture>
                            <source srcSet="/images/SLT.webp" type="image/webp" />
                            <img src="/images/SLT.png" alt="香蓮" />
                        </picture>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="logo-item">
                        <picture>
                            <source srcSet="/images/CCT.webp" type="image/webp" />
                            <img src="/images/CCT.png" alt="周照子" />
                        </picture>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="logo-item">
                        <picture>
                            <source srcSet="/images/GM.webp" type="image/webp" />
                            <img src="/images/GM.png" alt="甘妹弄堂" />
                        </picture>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="logo-item">
                        <picture>
                            <source srcSet="/images/FW.webp" type="image/webp" />
                            <img src="/images/FW.png" alt="扶旺號" />
                        </picture>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="logo-item">
                        <picture>
                            <source srcSet="/images/SW.webp" type="image/webp" />
                            <img src="/images/SW.png" alt="小旺號 show want" />
                        </picture>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="logo-item">
                        <picture>
                            <source srcSet="/images/WY.webp" type="image/webp" />
                            <img src="/images/WY.png" alt="威宇 牛排" />
                        </picture>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="logo-item">
                        <picture>
                            <source srcSet="/images/CY.webp" type="image/webp" />
                            <img src="/images/CY.png" alt="喫尤 Chi you" />
                        </picture>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="logo-item">
                        <picture>
                            <source srcSet="/images/MAZU.webp" type="image/webp" />
                            <img src="/images/MAZU.png" alt="麻凉" />
                        </picture>
                    </Link>
                </div>
            </section>

            <footer className="main-footer">
                <div className="footer-content">
                    <p>&copy; 2024 甘妹弄堂. All Rights Reserved.</p>
                    <p>
                        <Link href="#">隱私權政策</Link> | 
                        <Link href="#">服務條款</Link>
                    </p>
                </div>
            </footer>
        </>
    );
}
