'use strict';

const showAfter = (config) => {
    if (config.enable == true) {
        window.onload = () => {
            setTimeout(() => {
                document.querySelector(config.selector).style.display = 'block';
                console.log(config);
            }, config.seconds);
        }
    }
}

export default showAfter;

