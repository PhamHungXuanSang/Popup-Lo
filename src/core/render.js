'use strict';

class RenderPopup {
    constructor (className, html, idPopup, classList) {
        this.className = className;
        this.html = html;
        this.idPopup = idPopup;
        this.classList = classList
    }

    innerPopup (key) {
        const popup =  document.createElement("div");
        popup.style.setProperty("display", `none`);
        popup.style.setProperty('background-color', '#fff', "important");

        for (let feature of this.classList) {
            popup.classList.add(feature);
        }

        popup.innerHTML = this.html;
        popup.style.setProperty("position", `fixed`, "important");

        const elementIDPopup = document.querySelector(`.${this.idPopup}`);
        elementIDPopup.appendChild(popup);
    }
};

export default RenderPopup;