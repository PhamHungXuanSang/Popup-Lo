'use strict';

const visitWebAfterXSeconds = (config) => {
    if (config.enable == true) {
        window.onload = () => {
            setTimeout(() => {
                const elementShowXSeconds = document.querySelector(config.className);
                elementShowXSeconds.classList.add("active");
            }, config.seconds);
        }
        return true;
    }
    return false;
}

export default visitWebAfterXSeconds;

