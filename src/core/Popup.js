"use strict";

import behaviors from "../modules/behaviors/behaviors.js";
import designPopup from "../modules/designs/design.js";

class Popup {
    constructor(userconfig) {
        this.config = userconfig;
        this.init();
    }

    init() {
        new behaviors(this.config.behaviors);
        new designPopup(this.config.design);
    }
};

export default Popup;