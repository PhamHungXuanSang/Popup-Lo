"use strict";

import closePopup from "./close/close.js";
import open from "./open/open.js";

class behaviours {

    constructor (behaConfig, keyPopup) {
        this.optionOpen = behaConfig.open;
        this.optionClose = behaConfig.close;
        this.keyPopup = keyPopup;

        this.init();
    }
    
    init () {
        new open(this.optionOpen, this.keyPopup);
        new closePopup(this.optionClose, this.keyPopup);
    }
};

export  default behaviours;