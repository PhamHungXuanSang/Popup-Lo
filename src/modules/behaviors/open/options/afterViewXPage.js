"use strict";

const afterViewXPage = (config, keyPopup) => {
    if (config.enable == true) {
        var pageViews = localStorage.getItem(`${keyPopup}`);

        if (pageViews == null) {
            pageViews = 0;
        }
        pageViews++;
        localStorage.setItem(`${keyPopup}`, pageViews);
        if (pageViews === config.NumPage) {
            const ekeyPopup = document.querySelector(`.${keyPopup}`);
            const elementViewXPage = ekeyPopup.querySelector('.afterViewXPage');
            elementViewXPage.classList.add('active');
        }
    }
}

export default afterViewXPage;
