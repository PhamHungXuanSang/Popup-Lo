"use strict";

import behaviors from "../modules/behaviors/behaviors.js";
import condition from "../modules/conditions/condition.js";
import designPopup from "../modules/designs/design.js";
import animations from "../modules/animations/animation.js";

class Popup {
    constructor(userconfig) {
        this.config = userconfig;
        this.init();
    }

    init() {
        const Conditions = new condition(this.config.condition);
        Conditions.getStatus();
        if (Conditions.getStatus() === true) {
            const animation = new animations(this.config.animations);
            const behavior = new behaviors(this.config.behaviors);
            //behavior.get(animation.get());
            const design = new designPopup(this.config.design);
        }
    }
};

export default Popup;