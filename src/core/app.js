'use strict';

import Popup from "./Popup.js";

export function readConfig(listConfig) {
    listConfig.forEach((element) => {
        if (element.enable === true) {
            const el = document.createElement('div');
            el.classList.add('my-popup', element.functionName);
            document.body.appendChild(el);

            let newPopup = new Popup(element, element.functionName);
            newPopup.addStyleCSS();
            newPopup.show();
        }
    });
};