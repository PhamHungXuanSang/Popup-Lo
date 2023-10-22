'use strict';

function overlay (config) {
    if (config.enable === true) {
        let open = false;
        console.log("Overlay config *");
        console.log()
        setInterval(() => {
            if(document.querySelector(config.className).style.display == "block" && open == false) {
                console.log("Overlay config");
                let overlay = document.createElement('div');
                overlay.classList.add('overlay');
                document.querySelector('body').appendChild(overlay);
                open = true;
            } else if(document.querySelector(config.className).style.display != "block") {
                // console.log(document.querySelector(config.selector).style.display);
                let overlay = document.querySelector('.overlay');
                overlay ? document.querySelector('body').removeChild(overlay) : "";
                open = false;
            }
        }, 100);
    }
}

export default overlay;