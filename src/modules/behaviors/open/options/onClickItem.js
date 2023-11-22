"use strict";

const onClickItem = (config, keyPopup) => {
  if (config.enable == true) {
    document.querySelector(`.btn${keyPopup}`).onclick = () => {
      const elementOnClickItem = document.querySelector(`.${keyPopup}`);
      const onClickShowPopup = elementOnClickItem.querySelector(".onClickItem");
      onClickShowPopup.classList.add("active");
    };
  }
};

export default onClickItem;
