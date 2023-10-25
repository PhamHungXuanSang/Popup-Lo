'use strict';

const moveFromTop = (config) => {
    if (config.enable === true) {
        const easing = config.easing;
        const screenHeight = window.innerHeight;
        const movingLength = screenHeight*(config.movingLength/100);
        const popupElement = document.querySelector(config.className);
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (popupElement.classList.contains("active")) {
                        const popupSliding = [
                            { transform: `translateY(-${movingLength}px)`, opacity: 0 },
                            { transform: "translateY(0px)", opacity: 1 },
                        ];
                        
                        const timing = {
                            duration: config.duration,
                            iterations: 1,
                            easing: easing,
                        };

                        popupElement.animate(popupSliding, timing);
                    }
                }
            });
        });
    
        observer.observe(popupElement, {
            attributes: true,
        });
    }
}

export default moveFromTop;