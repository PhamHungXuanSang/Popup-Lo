"use strict";

import behaviors from "../modules/behaviors/behaviors.js";
import condition from "../modules/conditions/condition.js";
import designPopup from "../modules/designs/design.js";
import animations from "../modules/animations/animation.js";
import RenderPopup from "./render.js";
// import htmlPopup from "./exam.js";

class Popup {
    constructor(userconfig, keyPopup, fileHTML, fileCss) {
        this.config = userconfig;
        this.keyPopup = keyPopup;
        this.fileHTML = fileHTML;
        this.fileCss = fileCss;
    }

    addStyleCSS() {
        document.addEventListener('DOMContentLoaded', () => {
            const head = document.querySelector('head');
            const link = document.createElement('link');

            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = ""; //core style css

            head.appendChild(link);
        });
    }

    findKeysWithEnableTrue(obj) {
        const trueKeys = [];

        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                const subKeys = this.findKeysWithEnableTrue(obj[key]);
                if (subKeys.length > 0) {
                    trueKeys.push(...subKeys.map(subKey => `${key}.${subKey}`));
                }
            } else if (key === 'enable' && obj[key] === true) {
                trueKeys.push(key);
            }
        }

        return trueKeys;
    }

    splitStringToArray(string) {
        return string.split('.');
    }

    filterEnabledElements(array) {
        return array.filter(item => item !== 'enable');
    }

    
    functionPopupEnabled = () => {
        const trueKeys = this.findKeysWithEnableTrue(this.config);
        var temp = ['positionPopup'];
        trueKeys.forEach((key) => {
            let newKey = this.filterEnabledElements(this.splitStringToArray(key));
            let len = newKey.length;
            if (len > 0)
                temp.push(newKey[len - 1]);
        })
        return temp;
    }



    show() {
        const render = new RenderPopup("my-popup", this.fileHTML, this.fileCss, this.keyPopup, this.functionPopupEnabled());
        render.innerPopup();

        const Conditions = new condition(this.config.condition);
        Conditions.getStatus();
        if (Conditions.getStatus() === true && this.config.enable === true) {
            new animations(this.config.animations, this.keyPopup);
            new behaviors(this.config.behaviors, this.keyPopup);
            new designPopup(this.config.design, this.keyPopup);
        } 
    }
};

export default Popup;