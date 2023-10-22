"use strict";

import closePopup from "./close/close.js";
import open from "./open/open.js";

class behaviours {

    constructor (behaConfig) {
        this.optionOpen = behaConfig.open;
        this.optionClose = behaConfig.close;

        this.init();
    }
    
    init () {
        const  activePopup = new open(this.optionOpen);
        console.log(activePopup);
        if (activePopup.isOpenPopup() == true)
            new closePopup(this.optionClose);
    }
};

export  default behaviours;