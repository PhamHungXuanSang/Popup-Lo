"use strict";

import register from "./register.js";
import core from "../../../core/core.js";

class appear {

    constructor(options) {
        this.options = options; 
        this.init();
    }

    isEnableAnimations () {
        return this.options.enableAnimation;
    }

    init () {
        console.log(this.options);
        if(this.isEnableAnimations()) {
            this.isOpenPopup();
        }
    }

    isOpenPopup () {
        const process = new core();
        const methods = ['moveFromTop', 'horizontalMove', 'zoomIn', 'fadeIn'];
        
        //console.log(process.readConfig(this.options, methods, register));
        return process.readConfig(this.options, methods, register);
    }
};


export default appear;