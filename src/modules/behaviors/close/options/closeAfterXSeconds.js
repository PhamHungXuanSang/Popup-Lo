"use strict";

const closeAfterXSeconds = (config) => {
    if(config.enable == false) {
        const observer = new MutationObserver(mutations => {
            let run = true;
            let timeoutId;
            mutations.forEach(mutation => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (document.querySelector(config.className).classList.contains("active") && run === true) {
                        timeoutId = setTimeout(() => {
                            const elementClosePopup =  document.querySelector(config.className);
                            elementClosePopup.classList.remove("active");
                            run == false;
                        }, config.seconds);
                    } else {
                        clearTimeout(timeoutId);
                    }
                }
            })
        })
    
        observer.observe(document.querySelector(config.className), {
            attributes: true,
        });
    }
}

export default closeAfterXSeconds;