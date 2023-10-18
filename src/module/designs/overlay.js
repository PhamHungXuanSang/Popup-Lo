'use strict';

function setOverlay (config) {
    if (config.design.setOverlay.enable === true) {
        let open = false;
        setInterval(() => {
            if(document.querySelector(config.selector).style.display == "block" && open == false) {
                let overlay = document.createElement('div');
                overlay.classList.add('overlay');
                document.querySelector('body').appendChild(overlay);
                open = true;
            } else if(document.querySelector(config.selector).style.display != "block") {
                let overlay = document.querySelector('.overlay');
                overlay ? document.querySelector('body').removeChild(overlay) : "";
            }
        }, 100);
    }
}

export default setOverlay;