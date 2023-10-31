"use strict";

const closeClickButton = (config, keyPopup) => {
    if (config.enable === true) {
        const eKeyPopup = document.querySelector(`.${keyPopup}`);
        const elementBTNClosePopup = eKeyPopup.querySelector('.btnClosePopup');
        elementBTNClosePopup.onclick = () => {
            const elementPopup = eKeyPopup.querySelector('.closeClickPopup');
            elementPopup.classList.remove('active');
        }
    }
}

export default closeClickButton;