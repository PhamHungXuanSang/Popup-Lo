'use strict';

const position = (config, keyPopup) => {
    if (config.width != null && config.height != null) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        var popupWidth = config.width;
        var popupHeight = config.height;

        if(screenWidth <= 360) {
            popupWidth *= 0.4;
            popupHeight *= 0.4;
        } else if(screenWidth <= 480) {
            popupWidth *= 0.5;
            popupHeight *= 0.5;
        } else if(screenWidth <= 640) {
            popupWidth *= 0.7;
            popupHeight *= 0.7;
        } else if(screenWidth <= 768) {
            popupWidth *= 0.8;
            popupHeight *= 0.8;
        }
        
        // Lấy ra element bọc popup
        const eKeyPopup = document.querySelector(`.${keyPopup}`);
        let popupElement = eKeyPopup.querySelector('.positionPopup');
        console.log(popupElement);
        popupElement.style.setProperty("width", `${popupWidth}px`, "important");
        popupElement.style.setProperty("height", `${popupHeight}px`, "important");

        // Lấy ra x, y 
        let x = config.x.split(':')[0].toLowerCase();
        let y = config.y.split(':')[0].toLowerCase();
        // Lấy ra margin-x và margin-y
        let marginX = screenWidth*(config.x.split(':')[1]/100);
        console.log('Giá tri margin theo chiều ngang: '+marginX);
        let marginY = screenHeight*(config.y.split(':')[1]/100);
        console.log('Giá tri margin theo chiều dọc: '+marginY);

        if(x == "center" && y == "middle") {
            popupElement.style.setProperty("left", `calc(50% - ${popupWidth}px / 2)`, "important");
            popupElement.style.setProperty("top", `calc(50% - ${popupHeight}px / 2)`, "important");
        } else if(x == "center" && y != "middle"){
            popupElement.style.setProperty("left", `calc(50% - ${popupWidth}px / 2)`, "important");
            popupElement.style.setProperty(`${y}`, `${marginY}px`, "important");
        } else if(x!= "center" && y == "middle"){
            popupElement.style.setProperty(`${x}`, `${marginX}px`, "important");
            popupElement.style.setProperty("top", `calc(50% - ${popupHeight}px / 2)`, "important");
        } else {
            popupElement.style.setProperty(`${x}`, `${marginX}px`, "important");
            popupElement.style.setProperty(`${y}`, `${marginY}px`, "important");
        }
    }
}

export default position;