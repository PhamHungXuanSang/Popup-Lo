'use strict';

const visitWebAfterXSeconds = (config, keyPopup) => {
    if (config.enable == true) {
        window.onload = () => {
            setTimeout(() => {
                const ekeyPopup = document.querySelector(`.${keyPopup}`);
                const elementShowXSeconds = ekeyPopup.querySelector(config.className);
                elementShowXSeconds.classList.add("active");
            }, config.seconds);
        }
    }
}

export default visitWebAfterXSeconds;

