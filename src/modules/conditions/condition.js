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
        const methods = ['existClass', 'existCookie'];
        process.readConfig(this.options, methods, register);
    }

    getStatus () {
        const process = new core();
        const methods = ['existClass', 'existCookie'];
        return process.readConfig(this.options, methods, register);
    }
};

export default condition;