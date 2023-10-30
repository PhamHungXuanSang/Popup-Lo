"use strict";

const scrollToXPercent = (config, keyPopup) => {
    if (!config.enable) return false;

    window.addEventListener("scroll", activeScollPage);

    function activeScollPage() {
        const currentScrollPosition = window.scrollY;
        const totalHeightOfPage = document.body.scrollHeight;

        let checkedScroll = sessionStorage.getItem(keyPopup);

        if (window.scrollY >= (currentScrollPosition / totalHeightOfPage) * 100 && checkedScroll === null) {
            const ekeyPopup = document.querySelector(`.${keyPopup}`);
            const elementPopup = ekeyPopup.querySelector(".scrollPopup");
            elementPopup.classList.add("active");
            sessionStorage.setItem(keyPopup, 1);
        }
    }
};

export default scrollToXPercent;
