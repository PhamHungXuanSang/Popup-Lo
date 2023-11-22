"use strict";

const scrollToXPercent = (config, keyPopup) => {
    if (!config.enable) return false;

    window.addEventListener("scroll", activeScollPage);

    function activeScollPage() {
        const currentScrollPosition = window.scrollY;
        const totalHeightOfPage = document.body.scrollHeight - window.innerHeight;

        let checkedScroll = sessionStorage.getItem(keyPopup);

        if (currentScrollPosition >= (config.percent / 100) * totalHeightOfPage && checkedScroll === null) {
            const ekeyPopup = document.querySelector(`.${keyPopup}`);
            const elementPopup = ekeyPopup.querySelector(".scrollToXPercent");
            elementPopup.classList.add("active");
            sessionStorage.setItem(keyPopup, 1);
        }
    }
};

export default scrollToXPercent;
