"use strict";


const scrollToXPercent = (config, keyPopup) => {
    if (config.enable === true) {
        window.onscroll = () => {
            console.log(window.scrollY);
            activeScollPage();
        }
        
        function checkSession () {
            if (sessionStorage.getItem(keyPopup) != null)
                return true;
            return false;
        }

        function activeScollPage() {
            console.log("ac" + keyPopup);
            if (window.scrollY > config.percent && checkSession() == false) {
                const ekeyPopup = document.querySelector(`.${keyPopup}`);
                console.log(ekeyPopup);
                const elementPopup = ekeyPopup.querySelector(".scrollPopup");
                elementPopup.classList.add('active');
                sessionStorage.setItem(keyPopup, 1);
                return true;
            }
        }
    }
    return false;
}

export default scrollToXPercent;
