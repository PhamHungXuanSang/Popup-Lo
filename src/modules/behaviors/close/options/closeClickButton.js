"use strict";

const closeClickButton = (config) => {
    if (config.enable === true) {
        const elementBTNClosePopup = document.querySelector(config.classNameButton);
        elementBTNClosePopup.onclick = () => {
            const elementPopup =  document.querySelector(config.className);
            elementPopup.classList.remove('active');
        }
        return true;
    }
    return false;
}

export default closeClickButton;