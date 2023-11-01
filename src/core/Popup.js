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
        // this.init();
    }

    // init() {
    //     const Conditions = new condition(this.config.condition);
    //     Conditions.getStatus();
    //     if (Conditions.getStatus() === true && this.config.enable === true) {
    //         new behaviors(this.config.behaviors, this.keyPopup);
    //         new designPopup(this.config.design);
    //     } 
    // }

    show() {
        const render = new RenderPopup("my-popup", htmlPopup, this.keyPopup, ['closePopup', 'afterViewXPage', 'closeXSecondsPopup', 'showXSecondsPopup', 'afterViewXPage', 'onClickShowPopup', 'closeClickPopup', 'scrollPopup', 'overlayPopup', 'animationPopup', 'positionPopup', 'closeClickOutSide']);
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