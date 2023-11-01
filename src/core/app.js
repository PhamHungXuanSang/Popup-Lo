'use strict';

import Popup from "./Popup.js";

export function readConfig(listConfig) {
    listConfig.forEach((element, key) => {
        if (element.enable == true) {
            const el = document.createElement('div');
            el.classList.add('my-popup', element.functionName, element.functionName+key);
            document.body.appendChild(el);

            let newPopup = new Popup(element, element.functionName);
            newPopup.addStyleCSS();
            newPopup.show(element.functionName+key);
        }
    });
};