'use strict';

const zoomOut = (config, keyPopup) => {
    if (config.enable === true) {
        const easing = config.easing;
        const ekeyPopup = document.querySelector(`.${keyPopup}`);
        const popupElement = ekeyPopup.querySelector('.animationPopup');
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (!popupElement.classList.contains("active")) {
                        popupElement.style.setProperty("display", "block", "important");
                        function Animation() {
                            //console.log("1");
                            return new Promise((resolve) => {
                                const popupZoomOut = [
                                    { transform: 'scale(1)' },
                                    { transform: 'scale(0)' }
                                ];

                                const timing = {
                                    duration: config.duration,
                                    iterations: 1,
                                    easing: easing,
                                };

                                const animation = popupElement.animate(popupZoomOut, timing);
                                animation.onfinish = () => {
                                    //console.log("Đã xong");
                                    resolve(true);
                                };
                            });
                        }

                        async function wait() {
                            let flat = await Animation();
                            if (flat == true) {
                                //console.log("2");
                                popupElement.style.setProperty("display", "none");
                            }
                        }
                        wait();
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