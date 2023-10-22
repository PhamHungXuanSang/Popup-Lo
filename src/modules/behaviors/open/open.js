"use strict";

import register from "./register.js";
import core from "../../../core/core.js";

class open {

    constructor(options) {
        this.options = options; 
        this.init();
    }

    init () {
        console.log(this.options);
        this.isOpenPopup();
    }

    isOpenPopup () {
        const process = new core();
        const methods = ['scrollToXPercent', 'visitWebAfterXSeconds', 'onClickItem', 'afterViewXPage'];
        console.log(process.readConfig(this.options, methods, register));
        return process.readConfig(this.options, methods, register);
    }
};


export default open;