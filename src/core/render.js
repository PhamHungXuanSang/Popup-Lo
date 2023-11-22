'use strict';

class RenderPopup {
    constructor(className, html, styleCss, idPopup, classList) {
        this.className = className;
        this.html = html;
        this.styleCss = styleCss;
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

        // let link = document.createElement('link');
        // link.rel = 'stylesheet';
        // link.type = 'text/css';
        // link.href = 'http://localhost:5500/src/core/core.css'
        // document.head.appendChild(link);

        let styleTag = document.createElement("style");
        document.head.appendChild(styleTag);
        let cssStyles = this.styleCss;

        styleTag.appendChild(document.createTextNode(cssStyles));

        const elementIDPopup = document.querySelector(`.${this.idPopup}`);
        elementIDPopup.appendChild(popup);
    }
};

export default RenderPopup;