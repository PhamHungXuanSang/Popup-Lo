'use strict';

const setPosition = (config) => {
    if (config.design.setPosition.enable == true) {
        const popupElement = document.querySelector(config.design.setPosition.className);
        // popupElement.classList.add(config.design.setPosition.x);
        // popupElement.classList.add(config.design.setPosition.y);
        // popupElement.style = `position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);`
        if(config.design.setPosition.x == "left" && config.design.setPosition.y == "top") {
            popupElement.style = `position: fixed; top: 0;left: 0;`;
        } else if(config.design.setPosition.x == "left" && config.design.setPosition.y == "middle") {
            popupElement.style = `position: fixed; top: calc(50% - ${config.design.setSize.height}px / 2);left: 0;`;
        } else if(config.design.setPosition.x == "left" && config.design.setPosition.y == "bottom") {
            popupElement.style = `position: fixed; bottom: 0;left: 0;`;
        } else if(config.design.setPosition.x == "center" && config.design.setPosition.y == "top") {
            popupElement.style = `position: fixed; top: 0;left: calc(50% - ${config.design.setSize.width}px / 2);`;
        } else if(config.design.setPosition.x == "center" && config.design.setPosition.y == "middle") {
            popupElement.style = `position: fixed; top: calc(50% - ${config.design.setSize.height}px / 2);left: calc(50% - ${config.design.setSize.width}px / 2);`;
        } else if(config.design.setPosition.x == "center" && config.design.setPosition.y == "bottom") {
            popupElement.style = `position: fixed; left: calc(50% - ${config.design.setSize.width}px / 2);bottom: 0;`;
        } else if(config.design.setPosition.x == "right" && config.design.setPosition.y == "top") {
            popupElement.style = `position: fixed; top: 0;right: 0`;
        } else if(config.design.setPosition.x == "right" && config.design.setPosition.y == "middle") {
            popupElement.style = `position: fixed; top: calc(50% - ${config.design.setSize.height}px / 2);right: 0;`;
        } else if(config.design.setPosition.x == "right" && config.design.setPosition.y == "bottom") {
            popupElement.style = `position: fixed; right: 0;bottom: 0;`;
        }
    }
}

export default setPosition;