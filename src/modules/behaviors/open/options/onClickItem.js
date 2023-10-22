"use strict";

const onClickItem = (config) => {
    if (config.enable == true) {
        document.querySelector(config.classNameButton).onclick = () => {
            const elementOnClickItem = document.querySelector(config.className);
            elementOnClickItem.classList.add("active");
            return true;
        }
    }
    return false;
}

export default onClickItem;