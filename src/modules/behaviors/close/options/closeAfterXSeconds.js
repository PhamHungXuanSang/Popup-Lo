"use strict";

const closeAfterXSeconds = (config) => {
    console.log(config);
    // if (config.trigger.showAfter.enable == false)
    //     config.trigger.showAfter.seconds = 0;
    // const seconds = config.trigger.showAfter.seconds + config.trigger.closeAfter.seconds;
    const seconds = config.seconds;
    // console.log(seconds);
    if (config.enable === true) {
        setTimeout(() => {
            const elementClosePopup =  document.querySelector(config.className);
            elementClosePopup.classList.add('closePopup');
        }, seconds);
    }
}

export default closeAfterXSeconds;