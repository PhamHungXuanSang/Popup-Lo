'use strict';

import register from "./register.js";
import core from "../../core/core.js";

class condition {
    constructor(options) {
        this.options = options; 
        this.init();
    }

    init () {
        const process = new core();
        console.log(this.options);
        const methods = ['existClass', 'existCookie'];
        process.readConfig(this.options, methods, register);
    }

    getStatus () {
        const process = new core();
        const methods = ['existClass', 'existCookie'];
        console.log(process.readConfig(this.options, methods, register));
        return process.readConfig(this.options, methods, register);
    }
};

export default condition;