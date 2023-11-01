"use strict";

import register from "./register.js";
import core from "../../../core/core.js";

class disappear {
    constructor(options, keyPopup) {
        this.options = options;
        this.keyPopup = keyPopup;
        this.init();
    }

    isDisnableAnimations() {
        return this.options.enableAnimation;
    }

    init () {
        if(this.isDisnableAnimations()) {
            this.isClosePopup();
        }
    }

    isClosePopup () {
        const process = new core();
        //console.log(this.options);
        const methods = ['zoomOut', 'fadeOut'];
        process.readConfig(this.options, methods, register, this.keyPopup);
    }
}


export default disappear;