'use strict';

class RenderPopup {
    constructor (className, html, idPopup, classList) {
        this.className = className;
        this.html = html;
        this.idPopup = idPopup;
        this.classList = classList
    }

    innerPopup () {
        const popup =  document.createElement("div");

        popup.classList.add(this.id_Popup);
        for (let feature of this.classList) {
            console.log(feature);
            popup.classList.add(feature);
        }
        popup.innerHTML = this.html;
        popup.style.setProperty("position", `fixed`, "important");

        console.log("SSSSSSSSSS: ");
        const elementIDPopup = document.querySelector(`.${this.idPopup}`);
        elementIDPopup.appendChild(popup);
    }
};

export default RenderPopup; 