"use strict";

const closeClickOutside = (config, keyPopup) => {
    if(config.enable == true) {
        function findCloseClickOutsideParent(event) {
            event.stopPropagation();
            // Tìm phần tử cha của element
            let parent = event.target.parentElement;
            while (parent !== document.body) {
                // Nếu phần tử cha có chứa class closeClickOutside thì ngừng lại
                if (parent.classList.contains("closeClickOutside") || parent.classList.contains("activePopup")) {
                    return parent;
                }
                parent = parent.parentElement;
            }

            // Nếu nổi bọt ra đến body thì ngừng lại
            return null;
        }

        let element = document.querySelector(".closeClickOutside");
        document.addEventListener("click", (e) => {
            if (!element.classList.contains("active")) {
                return;
            } else {
                if(e.target != document.querySelector(".btnpopupTest1")) {
                    if(findCloseClickOutsideParent(e) == true) {
                        return;
                    } else if(findCloseClickOutsideParent(e) == null) {
                        element.classList.remove("active");
                    }
                }
            }
        });
    }
};

export default closeClickOutside;