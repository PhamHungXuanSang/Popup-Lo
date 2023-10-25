"use strict";

const onClickItem = (config, keyPopup) => {
    if (config.enable == true) {
        console.log("Remove: " + keyPopup);
        document.querySelector(`.btn${keyPopup}`).onclick = () => {
            console.log("Đã kích hoạt");
            const elementOnClickItem = document.querySelector(`.${keyPopup}`);
            const onClickShowPopup =  elementOnClickItem.querySelector('.onClickShowPopup');
            onClickShowPopup.classList.add("active");
            return true;
        }
    }
    return false;
}

export default onClickItem;