"use strict";

const closeClickButton = (config, keyPopup) => {
    if (config.enable === true) {
        const eKeyPopup = document.querySelector(`.${keyPopup}`);
        console.log(eKeyPopup.querySelector('.closeClickButton'));
        const elementBTNClosePopup = eKeyPopup.querySelector('.btnClosePopup');
        elementBTNClosePopup.onclick = () => {
            console.log(eKeyPopup.querySelector('.closeClickButton'));
            const elementPopup = eKeyPopup.querySelector('.closeClickPopup');
            console.log(elementPopup);
            elementPopup.classList.remove('active');
        }
    }
}

export default closeClickButton;