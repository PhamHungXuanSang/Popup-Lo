"use strict";

const closeAfterXSeconds = (config, keyPopup) => {
    if(config.enable == true) {
        const ekeyPopup = document.querySelector(`.${keyPopup}`);
        const elementClosePopup= ekeyPopup.querySelector('.closeXSecondsPopup');
        const observer = new MutationObserver(mutations => {
            let run = true;
            let timeoutId;
            mutations.forEach(mutation => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (document.querySelector(config.className).classList.contains("active") && run === true) {
                        timeoutId = setTimeout(() => {
                            elementClosePopup.classList.remove("active");
                            elementClosePopup.style.setProperty("display", "none");
                            run == false;
                        }, config.seconds);
                    } else {
                        clearTimeout(timeoutId);
                    }
                }
            })
        })
    
        observer.observe(elementClosePopup, {
            attributes: true,
        });
    }
}

export default closeAfterXSeconds;