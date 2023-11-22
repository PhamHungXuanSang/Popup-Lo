const closeAfterXSeconds = (config, keyPopup) => {
    if (config.enable === true) {
        const elementClosePopup = document.querySelector(`.${keyPopup} .closeAfterXSeconds`);
        let timeoutId;

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (elementClosePopup.classList.contains("active")) {
                        timeoutId = setTimeout(() => {
                            elementClosePopup.classList.remove("active");
                                
                        }, config.seconds);  
                    } else {
                        clearTimeout(timeoutId);
                    }
                }
            });
        });

        observer.observe(elementClosePopup, {
            attributes: true,
        });
    }
};

export default closeAfterXSeconds;