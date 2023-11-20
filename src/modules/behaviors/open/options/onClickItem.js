"use strict";

const onClickItem = (config, keyPopup) => {
    console.log("aaaaaa");
    if (config.enable == true) {
        if (document.querySelector(`.btn${keyPopup}`) == null) return;
        document.querySelector(`.btn${keyPopup}`).onclick = () => {
            const elementOnClickItem = document.querySelector(`.${keyPopup}`);
            const onClickShowPopup =  elementOnClickItem.querySelector('.onClickItem');
            onClickShowPopup.classList.add("active");
        }
    }
}

export default onClickItem;