"use strict";

import behaviors from "../modules/behaviors/behaviors.js";
import condition from "../modules/conditions/condition.js";
import designPopup from "../modules/designs/design.js";
import animations from "../modules/animations/animation.js";
import RenderPopup from "./render.js";
import htmlPopup from "./exam.js";

class Popup {
    constructor(userconfig, keyPopup) {
        this.config = userconfig;
        this.keyPopup = keyPopup;
    }

    addStyleCSS() {
        document.addEventListener('DOMContentLoaded', () => {
            const head = document.querySelector('head');
            const link = document.createElement('link');

            link.rel = 'stylesheet';
            link.href = "https://phamhungxuansang.github.io/Popup-Lo/src/core/core.css";

            head.appendChild(link);
        });
    }

    show(key) {
        console.log("AAAAAAAL: "+ key);
        console.log("BBBBBBL: "+ key);
        const render = new RenderPopup("my-popup", htmlPopup, this.keyPopup, ['closePopup', 'afterViewXPage', 'closeXSecondsPopup', 'showXSecondsPopup', 'afterViewXPage', 'onClickShowPopup', 'closeClickPopup', 'scrollPopup', 'overlayPopup', 'animationPopup', 'positionPopup', 'closeClickOutSide']);
        render.innerPopup(key);

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