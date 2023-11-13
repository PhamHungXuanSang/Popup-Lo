'use strict';

import Popup from "./Popup.js";

export function readConfig(listConfig) {
    listConfig.forEach((element) => {
        if (element.enable == true) {
            const el = document.createElement('div');
            el.classList.add('my-popup', element.functionName);
            document.body.appendChild(el);

            let newPopup = new Popup(element, element.functionName);
            newPopup.addStyleCSS();
            newPopup.show();
        }
    });
};

const config1 = {
    enable: true,
    functionName: "popupTest1",
    namePopup: "Test-saas-popup",
    condition: {
        existClass: {
            enable: true,
        },
        existCookie: {
            enable: false,
        }
    },
    behaviors: {
        open: {
            scrollToXPercent: {
                enable: true,
                percent: 50,
            },
            visitWebAfterXSeconds: {
                enable: false,
                seconds: 3000,
            },
            onClickItem: {
                enable: false,
            },
            afterViewXPage: {
                enable: false,
                NumPage: 3,
            }
        },
        close: {
            closeAfterXSeconds: {
                enable: false,
                seconds: 3000,
            },
            closeClickButton: {
                enable: true,
            },
            closeClickOutside: {
                enable: true,
            },
        }
    },
    design: {
        positionPopup: {
            width: 500,
            height: 400,
            x: 50,
            y: 50,
        },
        overlayPopup: {
            enable: true,
        },
    },
    animations: {
        appear: {
            enableAnimation: true,
            moveFromTop: {
                enable: false,
                duration: 400,
                easing: "ease-in",
                movingLength: 100,
            },
            horizontalMove: {
                enable: false,
                duration: 400,
                easing: "ease-in",
                movingFrom: 'right',
                movingLength: 10,
            },
            zoomIn: {
                enable: true,
                duration: 300,
                easing: "linear",
                fromPercent: 80,
            },
            fadeIn: {
                enable: false,
                duration: 300,
                easing: "ease-in",
            }
        },
        disappear: {
            enableAnimation: true,
            zoomOut: {
                enable: false,
                duration: 200,
                easing: "ease-out",
            },
            fadeOut: {
                enable: true,
                duration: 500,
                easing: "ease-out",
            },
            moveToTop: {
                enable: false,
                duration: 300,
                easing: "ease-out",
                movingLength: 50,
            },
            horizontalMove: {
                enable: false,
                duration: 400,
                easing: "ease-out",
                movingTo: 'right',
                movingLength: 20,
            },
        },
    }
};

const config2 = {
    enable: true,
    functionName: "popupTest2",
    namePopup: "Test-saas-popup",
    condition: {
        existClass: {
            enable: true,
        },
        existCookie: {
            enable: false,
        }
    },
    behaviors: {
        open: {
            scrollToXPercent: {
                enable: false,
                percent: 50,
            },
            visitWebAfterXSeconds: {
                enable: false,
                seconds: 3000,
            },
            onClickItem: {
                enable: true,
            },
            afterViewXPage: {
                enable: false,
                NumPage: 3,
            }
        },
        close: {
            closeAfterXSeconds: {
                enable: false,
                seconds: 3000,
            },
            closeClickButton: {
                enable: true,
            },
            closeClickOutside: {
                enable: true,
            },
        }
    },
    design: {
        positionPopup: {
            width: 300,
            height: 400,
            x: 100,
            y: 50,
        },
        overlayPopup: {
            enable: true,
        },
    },
    animations: {
        appear: {
            enableAnimation: true,
            moveFromTop: {
                enable: false,
                duration: 400,
                easing: "ease-in",
                movingLength: 100,
            },
            horizontalMove: {
                enable: false,
                duration: 400,
                easing: "ease-in",
                movingFrom: 'right',
                movingLength: 10,
            },
            zoomIn: {
                enable: true,
                duration: 300,
                easing: "linear",
                fromPercent: 80,
            },
            fadeIn: {
                enable: false,
                duration: 300,
                easing: "ease-in",
            }
        },
        disappear: {
            enableAnimation: true,
            zoomOut: {
                enable: false,
                duration: 200,
                easing: "ease-out",
            },
            fadeOut: {
                enable: true,
                duration: 500,
                easing: "ease-out",
            },
            moveToTop: {
                enable: false,
                duration: 300,
                easing: "ease-out",
                movingLength: 50,
            },
            horizontalMove: {
                enable: false,
                duration: 400,
                easing: "ease-out",
                movingTo: 'right',
                movingLength: 20,
            },
        },
    }
};

readConfig([config1, config2]);