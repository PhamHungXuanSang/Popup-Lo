"use strict";

class core {

    constructor(userconfig) {
        this.config = userconfig;
    } 

    readConfig (config, methods, register) {
        console.log(config);
        var flag = false;
// <<<<<<< HEAD
//         methods.forEach((method) => {
//             console.log(config[method]);
//             if (config[method] !== undefined) {
//                 register[method](config[method]);
//                 flag = true;
//             }
//         });
//         return flag;
// =======
        var checked = false;
        methods.forEach((method) => {
            if (config[method] !== undefined) {
                const active = register[method](config[method]);
                console.log("Test: " + active);
                if (active == true) {
                    checked = true;
                }
            }
        });
        return checked;
// >>>>>>> fix-core-221023
    }
};

export default core;