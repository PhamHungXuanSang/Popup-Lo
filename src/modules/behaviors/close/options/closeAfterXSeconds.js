"use strict";

const closeAfterXSeconds = (config) => {
    console.log(config);
    const seconds = config.seconds;
    if (config.enable === true) {
        setTimeout(() => {
            const elementClosePopup =  document.querySelector(config.className);
            elementClosePopup.classList.add('closePopup');
        }, seconds);
        return true;
    }
    return false;
}

export default closeAfterXSeconds;