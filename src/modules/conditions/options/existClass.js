'use strict';

const existClass = (config) => {
    if (config.enable === true) {
        const checkClass = document.body.classList.contains('saas-popup');
        return checkClass;
    }
    return false;
}

export default existClass;