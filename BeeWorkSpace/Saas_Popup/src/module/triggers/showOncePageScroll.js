'use strict';

const showOncePageScroll = (config) => {
    console.log(config);
    console.log(window.scrollY);
    if (config.enable === true) {
        window.onscroll = () => {
            console.log(window.scrollY);
            activeScollPage();
        }

        function activeScollPage() {
            if (window.scrollY > config.height) {
                document.querySelector(config.selector).style.display = 'block';
            }
        }
    }
}

export default showOncePageScroll;