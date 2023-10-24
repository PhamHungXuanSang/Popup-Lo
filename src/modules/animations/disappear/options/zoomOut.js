'use strict';

const zoomOut = (config) => {
    if (config.enable === true) {
        const easing = config.easing;
        const popupElement = document.querySelector(config.className);
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (!popupElement.classList.contains("active")) {
                        const popupZoomOut = [
                            { transform: 'scale(1)' },  // Tỷ lệ ban đầu
                            { transform: 'scale(0)' }  // Tỷ lệ trở lại ban đầu
                        ];
                        
                        const timing = {
                            duration: 400,
                            iterations: 1,
                            easing: easing,
                            fill: 'both',
                        };

                        popupElement.animate(popupZoomOut, timing);
                        // return true;
                    }
                }
            });
        });

        observer.observe(popupElement, {
            attributes: true,
        });
    }
}

export default zoomOut;