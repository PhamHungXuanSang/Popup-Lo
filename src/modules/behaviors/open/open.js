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
// <<<<<<< HEAD
// =======
        console.log(process.readConfig(this.options, methods, register));
// >>>>>>> fix-core-221023
        return process.readConfig(this.options, methods, register);
    }
};


export default open;