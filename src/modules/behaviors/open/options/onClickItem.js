"use strict";

const onClickItem = (config) => {
    if (config.enable == true) {
        let elements = document.querySelectorAll(config.classNameButton);
        if(elements.length == 1) {
            elements[0].onclick = () => {
                const elementOnClickItem = document.querySelector(config.className);
                elementOnClickItem.classList.add("active");
            }
        } else {
            for(let i=0; i<elements.length; i++) {
                elements[i].onclick = () => {
                    const elementOnClickItem = document.querySelector(config.className);
                    elementOnClickItem.classList.add("active");
                }
            }
        }
    }
}

export default onClickItem;