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
<<<<<<< HEAD
        const  activePopup = new open(this.optionOpen);
        console.log(activePopup);
        if (activePopup.isOpenPopup() == true)
            new closePopup(this.optionClose);
=======
        const activePopup = new open(this.optionOpen);
        console.log(activePopup);
        new closePopup(this.optionClose);
>>>>>>> fix-core-221023
    }
};

export  default behaviours;