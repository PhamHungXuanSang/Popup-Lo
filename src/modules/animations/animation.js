"use strict";

import appear from "./appear/appear.js";
import disappear from "./disappear/disappear.js";

class animations {

    constructor (behaConfig) {
        this.optionAppear = behaConfig.appear;
        this.optionDisAppear = behaConfig.disappear;

        this.init();
    }

    // get() { // Lấy ra giá trị xong/chưa
    //     console.log("Zoooooooooooooooooooooo");
    //     console.log(this.optionDisAppear.zoomOut);
    // }
    
    init () {
        new appear(this.optionAppear);
        new disappear(this.optionDisAppear);
    }
};

export default animations;