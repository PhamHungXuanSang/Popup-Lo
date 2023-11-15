"use strict";

const closeClickButton = (config, keyPopup) => {
    // if (config.enable === true) {
    //     const eKeyPopup = document.querySelector(`.${keyPopup}`);
    //     const observer = new MutationObserver((mutationsList) => {
    //         for (let mutation of mutationsList) {
    //             if (mutation.type === 'childList' && eKeyPopup.querySelector('.btnClosePopup')) {
    //                 const elementBTNClosePopup = eKeyPopup.querySelector('.btnClosePopup');
    //                 elementBTNClosePopup.onclick = () => {
    //                     const elementPopup = eKeyPopup.querySelector('.closeClickButton');
    //                     elementPopup.classList.remove('active');
    //                 };
    //                 observer.disconnect(); 
    //             }
    //         }
    //     });

    //     observer.observe(eKeyPopup, { childList: true, subtree: true });
    // }

    if (config.enable === true) {
        const eKeyPopup = document.querySelector(`.${keyPopup}`);
        const elementBTNClosePopup = eKeyPopup.querySelector('.btnClosePopup');
        elementBTNClosePopup.onclick = () => {
            const elementPopup = eKeyPopup.querySelector('.closeClickButton');
            elementPopup.classList.remove('active');
        }
    }
}

export default closeClickButton;