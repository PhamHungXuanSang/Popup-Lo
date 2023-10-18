'use strict';

const setPosition = (config) => {
    // if (config === undefined || config != {}) return;
    if (config.enable === true) {
        const popupElement = document.querySelector(config.className);
        // document.querySelector(config.selector).style.setProperty("width", `${config.width}px`, "important");
        // document.querySelector(config.selector).style.setProperty("height", `${config.height}px`, "important");
        // popupElement.classList.add(config.design.setPosition.x);
        // popupElement.classList.add(config.design.setPosition.y);
        // popupElement.style = `position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);`
        if(config.x == "left" && config.y == "top") {
            popupElement.style = `position: fixed; top: 0;left: 0;`;
        } else if(config.x == "left" && config.y == "middle") {
            popupElement.style = `position: fixed; top: calc(50% - ${config.height}px / 2);left: 0;`;
        } else if(config.x == "left" && config.y == "bottom") {
            popupElement.style = `position: fixed; bottom: 0;left: 0;`;
        } else if(config.x == "center" && config.y == "top") {
            popupElement.style = `position: fixed; top: 0;left: calc(50% - ${config.width}px / 2);`;
        } else if(config.x == "center" && config.y == "middle") {
            popupElement.style = `position: fixed; top: calc(50% - ${config.height}px / 2);left: calc(50% - ${config.width}px / 2);`;
        } else if(config.x == "center" && config.y == "bottom") {
            popupElement.style = `position: fixed; left: calc(50% - ${config.width}px / 2);bottom: 0;`;
        } else if(config.x == "right" && config.y == "top") {
            popupElement.style = `position: fixed; top: 0;right: 0`;
        } else if(config.x == "right" && config.y == "middle") {
            popupElement.style = `position: fixed; top: calc(50% - ${config.height}px / 2);right: 0;`;
        } else if(config.x == "right" && config.y == "bottom") {
            popupElement.style = `position: fixed; right: 0;bottom: 0;`;
        }
        popupElement.style.setProperty("width", `${config.width}px`, "important");
        popupElement.style.setProperty("height", `${config.height}px`, "important");
    }
}

export default setPosition;