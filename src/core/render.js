'use strict';

class RenderPopup {
    constructor(className, html, idPopup, classList) {
        this.className = className;
        this.html = html;
        this.idPopup = idPopup;
        this.classList = classList
    }

    innerPopup() {
        const popup = document.createElement("div");
        popup.innerHTML = this.html;
        popup.style.setProperty("display", `none`);
        popup.style.setProperty('background-color', '#fff', "important");

        for (let feature of this.classList) {
            popup.classList.add(feature);
        }

        popup.style.setProperty("position", `fixed`, "important");

        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '../../src/core/core.css'
        document.head.appendChild(link);

        const elementIDPopup = document.querySelector(`.${this.idPopup}`);
        elementIDPopup.appendChild(popup);
    }
};

export default RenderPopup;