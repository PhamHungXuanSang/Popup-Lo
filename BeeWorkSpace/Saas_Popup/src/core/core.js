"use strict";

import imports from './imports.js';

class Popup {
    constructor(userconfig) {
        this.config = userconfig;
        this.init();
    }

    init = () => {
        const methods = ['trigger', 'design'];
        const cons = Object.getOwnPropertyNames(this.config.condition ? this.config.condition : '');
        let status = this.isTrigger(cons);
        console.log(status);
        this.readConfig(this.config, methods, status);
    }

    isTrigger (cons) {
        for (const con of cons) {
            if (this.config.condition[con] !== undefined)
                if (imports[con](this.config) === true) return true;
            else return false;
        }
    }

    readConfig (config, methods, status) {
        console.log(config);
        methods.forEach((method) => {
            if (status == true) {
                if (config[method] !== undefined) {
                    const keys = Object.getOwnPropertyNames(config[method] ? config[method] : '');
                    // console.log(key);
                    for (const key of keys) {
                        imports[key](config[method][key]);
                        console.log(key);
                    };
                }
            }
        });
        return false;
    }

    // readChildrenConfig (config, methods, subMethod, key) {
    //     if (methods.includes(key) == true) {
    //         const keys = Object.getOwnPropertyNames(subMethod[key] ? subMethod[key] : '');
    //         for (const key of keys) {
    //             imports[key](this.config[method][key]);
    //             console.log(this.config[method]);
    //         };
    //     }
    // }
    
};

export default Popup;