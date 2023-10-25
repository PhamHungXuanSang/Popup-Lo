"use strict";

import register from "./register.js";
import core from "../../../core/core.js";

class closePopup {
    constructor(options) {
        this.options = options; 
        this.init();
    }

    init () {
        const process = new core();
        //console.log(this.options);
        const methods = ['closeAfterXSeconds', 'closeClickButton'];
        process.readConfig(this.options, methods, register);
    }
}


export default closePopup;