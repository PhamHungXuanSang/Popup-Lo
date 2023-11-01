import Popup from "../../src/core/Popup.js";
import FindClass from "./FindClass.js";

const config1 = {
    enable: true,
    functionName: "Popup-form",
    namePopup: "Test-saas-popup",
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
                percent: 80, // int
                className: '.scrollPopup',
            },
            visitWebAfterXSeconds: {
                enable: false,
                seconds: 3000, // int
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
                NumPage: 1, // int
            }
        },
        close: {
            closeAfterXSeconds: {
                enable: false,
                seconds: 3000, // int
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
        position: {
            width: 600, // int
            height: 450, // int
            x: '100', // string
            y: '50', // string
            className: '.my-popup',
        },
        overlay: {
            enable: true,
            className: '.overlayPopup',
        },
    },
    animations: {
        appear: {
            enableAnimation: true,
            moveFromTop: {
                enable: true,
                duration: 400, // int
                easing: "ease-in-out", // string
                movingLength: 10, // int????????????????????
                className: '.animationPopup',
            },
            horizontalMove: {
                enable: false,
                duration: 400, //int
                easing: "ease-in", // string
                movingFrom: 'right', // string
                movingLength: 10, // int????????????????????
                className: '.animationPopup',
            },
            zoomIn: {
                enable: false,
                duration: 300, // int
                easing: "linear", // string
                fromPercent: 80, // int????????????????????
                className: '.animationPopup',
            },
            fadeIn: {
                enable: false,
                duration: 200, // int
                easing: "ease-in", // string
                className: '.animationPopup',
            }
        },
        disappear: {
            enableAnimation: true,
            zoomOut: {
                enable: false,
                duration: 200, // int
                easing: "ease-out", // string
                className: '.animationPopup',
            },
            fadeOut: {
                enable: true,
                duration: 500, // int
                easing: "ease-out", // string
                className: '.animationPopup',
            },
        },
    }
};

let newPopup1 = new Popup(config1, "popupTest01");
newPopup1.show();
// let newPopup2 = new Popup(config2, "popupTest02");
// newPopup2.show();