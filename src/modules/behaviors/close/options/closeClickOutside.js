"use strict";

const closeClickOutside = (config, keyPopup) => {
    if(config.enable == true) {
        function findCloseClickOutsideParent(event) {
            event.stopPropagation();
            if(event.target != document.body) {
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
            } else {
                return true;
            }
        }

        let element = document.querySelector(`.${keyPopup}`);
        element = element.children[0];
        document.addEventListener("click", (e) => {
            console.log(!element.classList.contains("active")); 
            if (!element.classList.contains("active")) { 
                return;
            } else {
                console.log(e.target != document.querySelector(".btn" + keyPopup));
                if(e.target != document.querySelector(".btn" + keyPopup)) { 
                    if(findCloseClickOutsideParent(e) == true) {
                        console.log(e.target);
                        return;
                    } else if(findCloseClickOutsideParent(e) == null) {
                        element.classList.remove("active");
                        return;
                    }
                    return;
                }
            }
        });
    }
};

export default closeClickOutside;