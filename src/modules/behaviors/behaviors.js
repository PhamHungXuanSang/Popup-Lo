"use strict";

import closePopup from "./close/close.js";
import open from "./open/open.js";

class behaviours {

    constructor (behaConfig) {
        this.optionOpen = behaConfig.open;
        this.optionClose = behaConfig.close;

        this.init();
    }

    // get() { // check animations xong/chưa

    // }
    
    init () {
        const activePopup = new open(this.optionOpen);
        console.log(activePopup);
        new closePopup(this.optionClose);
    }
};

export  default behaviours;