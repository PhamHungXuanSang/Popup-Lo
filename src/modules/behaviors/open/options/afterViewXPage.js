"use strict";

const afterViewXPage = (config, keyPopup) => {
    if (config.enable == true) {
        console.log("hello");
        var pageViews = localStorage.getItem(`${keyPopup}`);

        if (pageViews == null) {
            pageViews = -1;
        }
        pageViews++;
        localStorage.setItem(`${keyPopup}`, pageViews);
        if (pageViews == config.NumPage) {
            const ekeyPopup = document.querySelector(`.${keyPopup}`);
            const elementViewXPage = ekeyPopup.querySelector('.afterViewXPage');
            elementViewXPage.classList.add('active');
            return true;
        }

    }
    return false;
}

export default afterViewXPage;
