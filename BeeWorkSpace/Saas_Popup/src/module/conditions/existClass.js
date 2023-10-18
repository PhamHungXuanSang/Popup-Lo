'use strict';

const existClass = (config) => {
    console.log(config);
    if (config.condition.existClass.enable === true) {
        const checkClass = document.body.classList.contains(config.condition.existClass.className);
        console.log(checkClass);
        return checkClass;
    }
}

export default existClass;