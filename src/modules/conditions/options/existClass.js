'use strict';

const existClass = (config) => {
    console.log(config);
    if (config.enable === true) {
        const checkClass = document.body.classList.contains(config.className);
        console.log(checkClass);
        return checkClass;
    }
    return false;
}

export default existClass;