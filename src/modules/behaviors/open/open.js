"use strict";

import register from "./register.js";
import core from "../../../core/core.js";

class open {
    constructor(options, keyPopup) {
        this.options = options;
        this.keyPopup = keyPopup; 
        this.init();
    }

    init () {
        this.isOpenPopup();
    }

    isOpenPopup () {
        const process = new core();
        const methods = ['scrollToXPercent', 'visitWebAfterXSeconds', 'onClickItem', 'afterViewXPage'];

        return process.readConfig(this.options, methods, register, this.keyPopup);
    }
};


export default open;