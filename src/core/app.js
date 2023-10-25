'use strict';

import Popup from "../../src/core/Popup.js";
import FindClass from "./FindClass.js";

const config1 = {
    enable: true,
    functionName: "Popup-form",
    namePopup: "popupTest01",
    condition: {
        existClass: {
            enable: true,
            className: 'saas-popup'
        }
    },
    behaviors: {
        open: {
            scrollToXPercent: {
                enable: false,
                percent: 200,
                className: '.scrollPopup'
            },
            visitWebAfterXSeconds: {
                enable: false,
                seconds: 3000,
                className: '.showXSecondsPopup'
            },
            onClickItem: {
                enable: true,
                classNameButton: '.activePopup',
                className: '.onClickShowPopup'
            },
            afterViewXPage: {
                enable: false,
                className: '.afterViewXPage',
                NumPage: 3
            }
        },
        close: {
            closeAfterXSeconds: {
                enable: false,
                seconds: 5000,
                className: '.closeXSecondsPopup'
            },
            closeClickButton: {
                enable: true,
                classNameButton: '.btnClosePopup',
                className: '.closeClickPopup'
            }
        }
    },
    design: {
        // overlay: {
        //     enable: true,
        //     className: '.overlayPopup',
        // }
    }
};

const config2 = {
    enable: true,
    functionName: "Popup-form",
    namePopup: "popupTest02",
    condition: {
        existClass: {
            enable: true,
            className: 'saas-popup'
        }
    },
    behaviors: {
        open: {
            scrollToXPercent: {
                enable: false,
                percent: 200,
                className: '.scrollPopup'
            },
            visitWebAfterXSeconds: {
                enable: false,
                seconds: 3000,
                className: '.showXSecondsPopup'
            },
            onClickItem: {
                enable: false,
                classNameButton: '.activePopup',
                className: '.onClickShowPopup'
            },
            afterViewXPage: {
                enable: true,
                className: '.afterViewXPage',
                NumPage: 10
            }
        },
        close: {
            closeAfterXSeconds: {
                enable: false,
                seconds: 5000,
                className: '.closeXSecondsPopup'
            },
            closeClickButton: {
                enable: true,
                classNameButton: '.btnClosePopup',
                className: '.closeClickPopup'
            }
        }
    },
    design: {
        // overlay: {
        //     enable: true,
        //     className: '.overlayPopup',
        // }
    }
};

// let newPopup1 = new Popup(config1, "popupTest01");
// newPopup1.show();
// let newPopup2 = new Popup(config2, "popupTest02");
// newPopup2.show();

FindClass('my-popup').forEach((pop) => {
    let newPopup = new Popup(config1, pop);
    newPopup.show();
    console.log(pop);
})
