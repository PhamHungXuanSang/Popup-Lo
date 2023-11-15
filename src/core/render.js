'use strict';

class RenderPopup {
    constructor(className, html, fileCss, idPopup, classList) {
        this.className = className;
        this.html = html;
        this.fileCss = fileCss;
        this.idPopup = idPopup;
        this.classList = classList
    }

    innerPopup() {

        // let link = document.createElement('link');
        // link.rel = 'stylesheet';
        // link.type = 'text/css';
        // link.href = this.fileCss;
        // document.head.appendChild(link);

        const popup = document.createElement("div");
        popup.style.setProperty("display", `none`);
        popup.style.setProperty('background-color', '#fff', "important");

        for (let feature of this.classList) {
            popup.classList.add(feature);
        }

        // popup.innerHTML = this.html;
        console.log(this.html);
        fetch(this.html)
            .then(response => response.text())
            .then(context => {
                popup.innerHTML = context;
            })
            .catch(error => console.error('Error:', error));

        popup.style.setProperty("position", `fixed`, "important");

        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = this.fileCss;
        document.head.appendChild(link);

        const elementIDPopup = document.querySelector(`.${this.idPopup}`);
        elementIDPopup.appendChild(popup);
    }
};

export default RenderPopup;