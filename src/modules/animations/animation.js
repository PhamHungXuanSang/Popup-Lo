"use strict";

import appear from "./appear/appear.js";
import disappear from "./disappear/disappear.js";

class animations {

    constructor (behaConfig, keyPopup) {
        this.optionAppear = behaConfig.appear;
        this.optionDisAppear = behaConfig.disappear;
        this.keyPopup = keyPopup;
        this.init();
    }

    // get() { // Lấy ra giá trị xong/chưa
    //     console.log("Zoooooooooooooooooooooo");
    //     console.log(this.optionDisAppear.zoomOut);
    // }
    
    init () {
        new appear(this.optionAppear, this.keyPopup);
        new disappear(this.optionDisAppear, this.keyPopup);
    }
};

export default animations;