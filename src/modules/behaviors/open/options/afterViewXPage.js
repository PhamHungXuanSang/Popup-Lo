"use strict";

const afterViewXPage = (config) => {
    console.log(config);
    if (config.enable == true) {
        console.log("hello");
        var pageViews = localStorage.getItem(`pageViews`);

        if (pageViews == null) {
            pageViews = -1;
        }
        pageViews++;
        localStorage.setItem(`pageViews`, pageViews);
        if (pageViews == config.NumPage) {
            //const ekeyPopup = document.querySelector(`.pageViews`);
            const elementViewXPage = document.querySelector('.afterViewXPage');
            elementViewXPage.classList.add('active');
            return true;
        }

    }
    return false;
}

export default afterViewXPage;
