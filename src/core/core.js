"use strict";

class core {

    constructor(userconfig) {
        this.config = userconfig;
    } 

    readConfig (config, methods, register) {
        //console.log(config);
        var flag = false;
        var checked = false;
        methods.forEach((method) => {
            if (config[method] !== undefined) {
                const active = register[method](config[method]);
                //console.log("Test: " + active);
                if (active == true) {
                    checked = true;
                }
            }
        });
        return checked;
    }
};

export default core;