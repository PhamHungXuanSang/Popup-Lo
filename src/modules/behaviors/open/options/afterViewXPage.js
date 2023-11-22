"use strict";


const afterViewXPage = (config, keyPopup) => {
    if (config.enable === true) {
        let pageViews = localStorage.getItem(`${keyPopup}`) || 0;
        pageViews++;

        localStorage.setItem(`${keyPopup}`, pageViews);

        if (ekeyPopup) {
            const elementViewXPage = ekeyPopup.querySelector('.afterViewXPage');

            if (elementViewXPage && !elementViewXPage.classList.contains('active')) {
                elementViewXPage.classList.add('active');
            }
        } 
    }
}

export default afterViewXPage;
