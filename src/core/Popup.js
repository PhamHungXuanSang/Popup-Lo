"use strict";

import behaviors from "../modules/behaviors/behaviors.js";
import condition from "../modules/conditions/condition.js";
import designPopup from "../modules/designs/design.js";

class Popup {
    constructor(userconfig) {
        this.config = userconfig;
        this.init();
    }

    init() {
        const Conditions = new condition(this.config.condition);
        Conditions.getStatus();
        if (Conditions.getStatus() === true) {
            new behaviors(this.config.behaviors);
            new designPopup(this.config.design);
        }
    }
};

export default Popup;