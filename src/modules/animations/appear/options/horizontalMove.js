'use strict';

const horizontalMove = (config, keyPopup) => {
    if (config.enable === true) {
        const easing = config.easing;
        const screenWidth = window.innerWidth;
        const movingLength = config.movingFrom.toLowerCase() == 'left' ? -(screenWidth*(config.movingLength/100)) : (screenWidth*(config.movingLength/100));
        console.log(movingLength);
        const ekeyPopup = document.querySelector(`.${keyPopup}`);
        const popupElement = ekeyPopup.querySelector('.animationPopup');
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (popupElement.classList.contains("active")) {
                        const popupSliding = [
                            { transform: `translateX(${movingLength}px)`, opacity: 0 },
                            { transform: "translateX(0px)", opacity: 1 },
                        ];
                        
                        const timing = {
                            duration: config.duration,
                            iterations: 1,
                            easing: easing,
                        };

                        popupElement.animate(popupSliding, timing);
                        //popupElement.style.setProperty("display", `block`, "important");
                    }
                }
            });
        });
    
        observer.observe(popupElement, {
            attributes: true,
        });
    }
}

export default horizontalMove;