"use strict";

const onClickItem = (config) => {
    if (config.enable == true) {
        document.querySelector(config.classNameButton).onclick = () => {
            const elementOnClickItem = document.querySelector(config.className);
            elementOnClickItem.classList.add("active");
        }
    }
}

export default onClickItem;