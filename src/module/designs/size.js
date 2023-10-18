'use strict';

function setSize (config) {
    if (config.design.setSize.width != null && config.design.setSize.height != null) {
        console.log(document.querySelector(config.selector));
        //document.querySelector(config.selector).style.setProperty(`width: ${config.design.setSize.width}px; height: ${config.design.setSize.height}px;`);
        document.querySelector(config.selector).style.setProperty("width", `${config.design.setSize.width}px`, "important");
        document.querySelector(config.selector).style.setProperty("height", `${config.design.setSize.height}px`, "important");
    }
}

export default setSize;