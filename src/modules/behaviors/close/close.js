"use strict";

import register from "./register.js";
import core from "../../../core/core.js";

class closePopup {
    constructor(options, keyPopup) {
        this.options = options;
        this.keyPopup = keyPopup; 
        this.init();
    }

    init () {
        const process = new core();
        const methods = ['closeAfterXSeconds', 'closeClickButton', 'closeClickOutSide'];
        process.readConfig(this.options, methods, register, this.keyPopup);
    }
}


export default closePopup;