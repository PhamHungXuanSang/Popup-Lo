'use strict';

const position = (config) => {
    if (config.width != null && config.height != null) {
        const screenWidth = window.innerWidth;
        var configWidth = config.width;
        var configHeight = config.height;

        if(screenWidth <= 360) {
            configWidth *= 0.4;
            configHeight *= 0.4;
        } else if(screenWidth <= 480) {
            configWidth *= 0.5;
            configHeight *= 0.5;
        } else if(screenWidth <= 640) {
            configWidth *= 0.7;
            configHeight *= 0.7;
        } else if(screenWidth <= 768) {
            configWidth *= 0.8;
            configHeight *= 0.8;
        }

        console.log(configWidth);
        
        // Lấy ra element bọc popup
        let popupElement = document.querySelector(config.className);
        popupElement.style.setProperty("width", `${configWidth}px`, "important");
        popupElement.style.setProperty("height", `${configHeight}px`, "important");

        // Lấy ra x, y 
        let x = config.x.split(':')[0].toLowerCase();
        let y = config.y.split(':')[0].toLowerCase();
        // Lấy ra margin-x và margin-y
        let marginX = config.x.split(':')[1];
        let marginY = config.y.split(':')[1];

        if(x == "left" && y == "top") {
            popupElement.style.setProperty("top", `${marginY}px`, "important");
            popupElement.style.setProperty("left", `${marginX}px`, "important");
        } else if(x == "left" && y == "middle") {
            popupElement.style.setProperty("top", `calc(50% - ${configHeight}px / 2)`, "important");
            popupElement.style.setProperty("left", `${marginX}px`, "important");
        } else if(x == "left" && y == "bottom") {
            popupElement.style.setProperty("bottom", `${marginY}px`, "important");
            popupElement.style.setProperty("left", `${marginX}px`, "important");
        } else if(x == "center" && y == "top") {
            popupElement.style.setProperty("top", `${marginY}px`, "important");
            popupElement.style.setProperty("left", `calc(50% - ${configWidth}px / 2)`, "important");
        } else if(x == "center" && y == "middle") {
            popupElement.style.setProperty("top", `calc(50% - ${configHeight}px / 2)`, "important");
            popupElement.style.setProperty("left", `calc(50% - ${configWidth}px / 2)`, "important");
        } else if(x == "center" && y == "bottom") {
            popupElement.style.setProperty("left", `calc(50% - ${configWidth}px / 2)`, "important");
            popupElement.style.setProperty("bottom", `${marginY}px`, "important");
        } else if(x == "right" && y == "top") {
            popupElement.style.setProperty("top", `${marginY}px`, "important");
            popupElement.style.setProperty("right", `${marginX}px`, "important");
        } else if(x == "right" && y == "middle") {
            popupElement.style.setProperty("top", `calc(50% - ${configHeight}px / 2)`, "important");
            popupElement.style.setProperty("right", `${marginX}px`, "important");
        } else if(x == "right" && y == "bottom") {
            popupElement.style.setProperty("right", `${marginX}px`, "important");
            popupElement.style.setProperty("bottom", `${marginY}px`, "important");
        }
    }
}

export default position;