"use strict";

const closeClickButton = (config) => {
    console.log(config);
    if (config.enable === true) {
        const elementBTNClosePopup = document.querySelector(config.classNameButton);
        elementBTNClosePopup.onclick = () => {
            const elementPopup =  document.querySelector(config.className);
            elementPopup.classList.add('closePopup');
        }
    }
}

export default closeClickButton;