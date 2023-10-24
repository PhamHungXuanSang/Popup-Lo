'use strict';

const slideFromTop = (config) => {
    if (config.enable === true) {
        const easing = config.easing;
        const popupElement = document.querySelector(config.className);
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (popupElement.classList.contains("active")) {
                        const popupSliding = [
                            { transform: `translateY(-${config.slidingLength}px)`, opacity: 0 },
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

export default slideFromTop;