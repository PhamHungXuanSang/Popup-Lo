'use strict';

const position = (config) => {
    if (config.width != null && config.height != null) {
        // Lấy ra element bọc popup
        let popupElement = document.querySelector(config.className);
        popupElement.style.setProperty("width", `${config.width}px`, "important");
        popupElement.style.setProperty("height", `${config.height}px`, "important");

        // Lấy ra x, y 
        let x = config.x.split(':')[0].toLowerCase();
        let y = config.y.split(':')[0].toLowerCase();
        // Lấy ra margin-x và margin-y
        let marginX = config.x.split(':')[1];
        let marginY = config.y.split(':')[1];

        if(x == "left" && y == "top") {
            console.log("Zoooô");
            console.log(popupElement);
            popupElement.style.setProperty("top", `${marginY}px`, "important");
            popupElement.style.setProperty("left", `${marginX}px`, "important");
        } else if(x == "left" && y == "middle") {
            popupElement.style.setProperty("top", `calc(50% - ${config.height}px / 2)`, "important");
            popupElement.style.setProperty("left", `${marginX}px`, "important");
        } else if(x == "left" && y == "bottom") {
            popupElement.style.setProperty("bottom", `${marginY}px`, "important");
            popupElement.style.setProperty("left", `${marginX}px`, "important");
        } else if(x == "center" && y == "top") {
            popupElement.style.setProperty("top", `${marginY}px`, "important");
            popupElement.style.setProperty("left", `calc(50% - ${config.width}px / 2)`, "important");
        } else if(x == "center" && y == "middle") {
            popupElement.style.setProperty("top", `calc(50% - ${config.height}px / 2)`, "important");
            popupElement.style.setProperty("left", `calc(50% - ${config.width}px / 2)`, "important");
        } else if(x == "center" && y == "bottom") {
            popupElement.style.setProperty("left", `calc(50% - ${config.width}px / 2)`, "important");
            popupElement.style.setProperty("bottom", `${marginY}px`, "important");
        } else if(x == "right" && y == "top") {
            popupElement.style.setProperty("top", `${marginY}px`, "important");
            popupElement.style.setProperty("right", `${marginX}px`, "important");
        } else if(x == "right" && y == "middle") {
            popupElement.style.setProperty("top", `calc(50% - ${config.height}px / 2)`, "important");
            popupElement.style.setProperty("right", `${marginX}px`, "important");
        } else if(x == "right" && y == "bottom") {
            popupElement.style.setProperty("right", `${marginX}px`, "important");
            popupElement.style.setProperty("bottom", `${marginY}px`, "important");
        }
    }
}

export default position;