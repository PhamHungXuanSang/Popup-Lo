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
        console.log(this.options);
        const methods = ['overlay', 'position'];
        process.readConfig(this.options, methods, register, this.keyPopup);
    }
}


export default designPopup;