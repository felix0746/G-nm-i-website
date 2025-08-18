document.addEventListener('DOMContentLoaded', () => {

    // 載入共用的頁首和頁尾
    const loadHTML = (elementId, filePath, callback) => {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`無法載入 ${filePath}`);
                }
                return response.text();
            })
            .then(data => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = data;
                }
                if (callback) {
                    callback();
                }
            })
            .catch(error => console.error('載入 HTML 失敗:', error));
    };

    // 載入頁首後，再初始化漢堡選單功能
    loadHTML('main-header', '_header.html', () => {
        const hamburger = document.querySelector('.hamburger-menu');
        const nav = document.querySelector('.main-nav');

        if (hamburger && nav) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('is-active');
                nav.classList.toggle('is-active');
            });
        }
    });

    // 載入頁尾 (如果頁尾元素存在)
    if (document.getElementById('main-footer')) {
        loadHTML('main-footer', '_footer.html');
    }

    // 菜單頁面分頁功能
    const menuPage = document.querySelector('.menu-page');
    if (menuPage) {
        const tabLinks = menuPage.querySelectorAll('.tab-link');
        const tabContents = menuPage.querySelectorAll('.tab-content');

        tabLinks.forEach(link => {
            link.addEventListener('click', () => {
                const tabId = link.getAttribute('data-tab');

                // 移除所有按鈕的 active class
                tabLinks.forEach(item => item.classList.remove('active'));
                // 為當前點擊的按鈕加上 active class
                link.classList.add('active');

                // 隱藏所有內容區塊
                tabContents.forEach(content => content.classList.remove('active'));
                // 顯示對應的內容區塊
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
});