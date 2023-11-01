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

        popup.classList.add(this.idPopup);
        for (let feature of this.classList) {
            console.log(feature);
            popup.classList.add(feature);
        }
        popup.innerHTML = this.html;
        popup.style.setProperty("position", `fixed`, "important");
        
        // const elementIDPopup = document.querySelector(`.${this.idPopup}`);
        const elementIDPopup = document.querySelector(`.${key}`);
        elementIDPopup.appendChild(popup);
    }
};

export default RenderPopup; 