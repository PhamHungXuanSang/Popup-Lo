"use strict";

import register from "./register.js";
import core from "../../core/core.js";

class designPopup {
    constructor(options, keyPopup) {
        this.options = options; 
        this.keyPopup = keyPopup;
        this.init();
    }

    init () {
        const process = new core();
        const methods = ['overlayPopup', 'positionPopup'];

        process.readConfig(this.options, methods, register, this.keyPopup);
    }
}


export default designPopup;