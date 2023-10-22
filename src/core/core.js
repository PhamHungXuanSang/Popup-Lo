"use strict";

class core {

    constructor(userconfig) {
        this.config = userconfig;
    } 

    readConfig (config, methods, register) {
        console.log(config);
        var flag = false;
        methods.forEach((method) => {
            console.log(config[method]);
            if (config[method] !== undefined) {
                register[method](config[method]);
                flag = true;
            }
        });
        return flag;
    }
};

export default core;