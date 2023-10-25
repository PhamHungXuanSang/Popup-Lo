"use strict";

const closeAfterXSeconds = (config) => {
    console.log(config);
    if (config.enable === true) {
        const seconds = config.seconds;
        setTimeout(() => {
            const elementClosePopup =  document.querySelector(config.className);
            elementClosePopup.classList.add('closePopup');
        }, seconds);
        return true;
    }
    return false;
}

export default closeAfterXSeconds;