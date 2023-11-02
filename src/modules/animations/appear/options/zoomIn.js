'use strict';

const zoomIn = (config, keyPopup) => {
    if (config.enable === true) {
        const easing = config.easing;
        const ekeyPopup = document.querySelector(`.${keyPopup}`);
        const popupElement = ekeyPopup.querySelector('.zoomIn');
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (popupElement.classList.contains("active")) {
                        const popupZoomIn = [
                            { transform: `scale(${config.fromPercent/100})`, opacity: 0 },
                            { transform: "scale(1)", opacity: 1 },
                        ];
                        
                        const timing = {
                            duration: config.duration,
                            iterations: 1,
                            easing: easing,
                        };

                        popupElement.animate(popupZoomIn, timing);
                    }
                }
            });
        });

        observer.observe(popupElement, {
            attributes: true,
        });
    }
}

export default zoomIn;