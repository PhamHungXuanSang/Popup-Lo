'use strict';

const visitWebAfterXSeconds = (config, keyPopup) => {
    if (config.enable == true) {
        const ekeyPopup = document.querySelector(`.${keyPopup}`);
        const elementShowXSeconds = ekeyPopup.querySelector('.visitWebAfterXSeconds');
        setTimeout(() => {
            elementShowXSeconds.classList.add("active");
        }, config.seconds);
    }
}

export default visitWebAfterXSeconds;

