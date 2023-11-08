"use strict";

const scrollToXPercent = (config, keyPopup) => {
    if (!config.enable) return false;

    window.addEventListener("scroll", activeScollPage);

    function activeScollPage() {
        const currentScrollPosition = window.scrollY;
        console.log("Giá trị đã cuộn: "+currentScrollPosition);
        const totalHeightOfPage = document.body.scrollHeight - window.innerHeight;
        console.log("Chiều cao page: "+totalHeightOfPage);

        let checkedScroll = sessionStorage.getItem(keyPopup);
        console.log((config.percent / 100) * totalHeightOfPage);

        if (currentScrollPosition >= (config.percent / 100) * totalHeightOfPage && checkedScroll === null) {
            const ekeyPopup = document.querySelector(`.${keyPopup}`);
            const elementPopup = ekeyPopup.querySelector(".scrollToXPercent");
            elementPopup.classList.add("active");
            sessionStorage.setItem(keyPopup, 1);
        }
    }
};

export default scrollToXPercent;
