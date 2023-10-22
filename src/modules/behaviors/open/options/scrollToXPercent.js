"use strict";

const scrollToXPercent = (config) => {
    if (config.enable === true) {
        console.log(config.enable);
        window.onscroll = () => {
            console.log(window.scrollY);
            activeScollPage();
        }

        function activeScollPage() {
            if (window.scrollY > config.percent) {
                const elementPopup = document.querySelector(config.className);
                elementPopup.classList.add('active');
                return true;
            }
        }
    }
    return false;
}

export default scrollToXPercent;
