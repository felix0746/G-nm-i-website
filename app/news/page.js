'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function MenuPage() {
    const [activeTab, setActiveTab] = useState('morning');

    return (
        <main className="page-content menu-page">
            <div className="menu-tabs">
                <button 
                    className={`tab-link ${activeTab === 'morning' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('morning')}
                >
                    食朝
                </button>
                <button 
                    className={`tab-link ${activeTab === 'day' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('day')}
                >
                    食晝
                </button>
            </div>

            {activeTab === 'morning' && (
                <div id="morning" className="tab-content active">
                    <div className="menu-category">
                        <h3>組合套餐</h3>
                        <div className="menu-grid">
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/A. 招牌韭黃鐵板湯包.webp" type="image/webp" />
                                    <img src="/images/A. 招牌韭黃鐵板湯包.png" alt="A. 招牌韭黃鐵板湯包套餐" />
                                </picture>
                                <p>A. 招牌韭黃鐵板湯包</p>
                            </div>
                            {/* ... more items ... */}
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/B. 🌶️辣燒肉蛋飯糰.webp" type="image/webp" />
                                    <img src="/images/B. 🌶️辣燒肉蛋飯糰.png" alt="B. 辣燒肉蛋飯糰套餐" />
                                </picture>
                                <p>B. 🌶️辣燒肉蛋飯糰</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/C. 花醬蛋肉饅頭.webp" type="image/webp" />
                                    <img src="/images/C. 花醬蛋肉饅頭.png" alt="C. 花醬蛋肉饅頭套餐" />
                                </picture>
                                <p>C. 花醬蛋肉饅頭</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/D. 台式蘿蔔糕.webp" type="image/webp" />
                                    <img src="/images/D. 台式蘿蔔糕.png" alt="D. 台式蘿蔔糕套餐" />
                                </picture>
                                <p>D. 台式蘿蔔糕</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/E. 阿婆家早午餐.webp" type="image/webp" />
                                    <img src="/images/E. 阿婆家早午餐.png" alt="E. 阿婆家早午餐套餐" />
                                </picture>
                                <p>E. 阿婆家早午餐</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/F. 原味鮮肉小籠湯包.webp" type="image/webp" />
                                    <img src="/images/F. 原味鮮肉小籠湯包.png" alt="F. 原味鮮肉小籠湯包套餐" />
                                </picture>
                                <p>F. 原味鮮肉小籠湯包</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'day' && (
                <div id="day" className="tab-content active">
                    <div className="menu-category">
                        <h3>組合套餐</h3>
                        <div className="menu-grid">
                             <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/招牌組合套餐.webp" type="image/webp" />
                                    <img src="/images/招牌組合套餐.jpeg" alt="招牌組合套餐" />
                                </picture>
                                <p>招牌組合套餐</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/三人組合特餐.webp" type="image/webp" />
                                    <img src="/images/三人組合特餐.jpeg" alt="三人組合特餐" />
                                </picture>
                                <p>三人組合特餐</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/雙人組合特餐.webp" type="image/webp" />
                                    <img src="/images/雙人組合特餐.jpeg" alt="雙人組合特餐" />
                                </picture>
                                <p>雙人組合特餐</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/家庭組合特餐.webp" type="image/webp" />
                                    <img src="/images/家庭組合特餐.jpeg" alt="家庭組合特餐" />
                                </picture>
                                <p>家庭組合特餐</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/熱炒組合特餐.webp" type="image/webp" />
                                    <img src="/images/熱炒組合特餐.jpeg" alt="熱炒組合特餐" />
                                </picture>
                                <p>熱炒組合特餐</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/甘妹組合特餐.webp" type="image/webp" />
                                    <img src="/images/甘妹組合特餐.jpeg" alt="甘妹組合特餐" />
                                </picture>
                                <p>甘妹組合特餐</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/蔬食組合套餐.webp" type="image/webp" />
                                    <img src="/images/蔬食組合套餐.jpeg" alt="蔬食組合套餐" />
                                </picture>
                                <p>蔬食組合套餐</p>
                            </div>
                        </div>
                    </div>
                    <div className="menu-category">
                        <h3>鐵板湯包</h3>
                        <div className="menu-grid">
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/招牌韭黃鐵板湯包(8顆).webp" type="image/webp" />
                                    <img src="/images/招牌韭黃鐵板湯包(8顆).jpeg" alt="招牌韭黃鐵板湯包(8顆)" />
                                </picture>
                                <p>招牌韭黃鐵板湯包(8顆)</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/原味鮮肉小籠湯包(8顆).webp" type="image/webp" />
                                    <img src="/images/原味鮮肉小籠湯包(8顆).jpeg" alt="原味鮮肉小籠湯包(8顆)" />
                                </picture>
                                <p>原味鮮肉小籠湯包(8顆)</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/梅干扣肉鐵板湯包(8顆).webp" type="image/webp" />
                                    <img src="/images/梅干扣肉鐵板湯包(8顆).jpeg" alt="梅干扣肉鐵板湯包(8顆)" />
                                </picture>
                                <p>梅干扣肉鐵板湯包(8顆)</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/田園花素小籠湯包(8顆).webp" type="image/webp" />
                                    <img src="/images/田園花素小籠湯包(8顆).jpeg" alt="田園花素小籠湯包(8顆)" />
                                </picture>
                                <p>田園花素小籠湯包(8顆)</p>
                            </div>
                            <div className="menu-item">
                                <picture>
                                    <source srcSet="/images/絲瓜蝦肉小籠湯包(8顆).webp" type="image/webp" />
                                    <img src="/images/絲瓜蝦肉小籠湯包(8顆).jpeg" alt="絲瓜蝦肉小籠湯包(8顆)" />
                                </picture>
                                <p>絲瓜蝦肉小籠湯包(8顆)</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
