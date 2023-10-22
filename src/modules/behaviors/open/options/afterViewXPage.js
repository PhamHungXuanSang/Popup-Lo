"use strict";

const afterViewXPage = (config) => {
    console.log("hello");
    if (config.enable == true) {
        console.log("hello");
        var pageViews = window.localStorage.getItem('pageViews');

        if (pageViews === null) {
            pageViews = 0;
        }
        pageViews++;
        window.localStorage.setItem('pageViews', pageViews);
        if (pageViews == config.NumPage) {
            const elementViewXPage = document.querySelector(config.className);
            elementViewXPage.classList.add('active');
            return true;
        }

    }
    return false;
}

export default afterViewXPage;
