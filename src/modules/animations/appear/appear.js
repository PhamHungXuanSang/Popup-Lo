"use strict";

import register from "./register.js";
import core from "../../../core/core.js";

class appear {

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
        const methods = ['slideFromTop', 'horizontalMove', 'zoomIn'];
        
        console.log(process.readConfig(this.options, methods, register));
        return process.readConfig(this.options, methods, register);
    }
};


export default appear;