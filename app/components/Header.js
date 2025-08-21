'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isNavActive, setIsNavActive] = useState(false);

    return (
        <section id="header-section">
            <div className="header-banner-image-container">
                <picture>
                    <source srcSet="/images/甘妹上面 banner.webp" type="image/webp" />
                    <img className="header-banner-image" src="/images/甘妹上面 banner.png" alt="甘妹弄堂 Banner" />
                </picture>
            </div>
            <header>
                <div className="logo-container">
                    {/* Logo 現在是背景圖的一部分 */}
                </div>
                <button 
                    className={`hamburger-menu ${isNavActive ? 'is-active' : ''}`} 
                    aria-label="開啟選單"
                    onClick={() => setIsNavActive(!isNavActive)}
                >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <nav className={`main-nav ${isNavActive ? 'is-active' : ''}`}>
                    <ul>
                        <li><Link href="/">首頁</Link></li>
                        <li><Link href="/memory">弄堂記憶</Link></li>
                        <li><Link href="/news">甘妹菜單</Link></li>
                        <li><Link href="/selection">尋味聯繫</Link></li>
                        <li><Link href="/agent">海外代理</Link></li>
                    </ul>
                </nav>
            </header>
        </section>
    );
}
