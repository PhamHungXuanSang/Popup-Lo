window.popup = [
    {
        enable: true,
        functionName: "popupTest1",
        html: `<div class="popup">
                <div class="img-wrapper"><img src="https://png.pngtree.com/thumb_back/fw800/background/20221116/pngtree-isolated-white-background-with-a-vertical-red-gift-bow-photo-image_677817.jpg" alt="Anh"></div>
                <div class="content">
                    <p class="popup-heading">Save up to</p>
                    <h1 class="popup-offer">30% OFF</h1>
                    <p class="popup-desc">In your next holiday offer</p>
                
                    <form action="POST" class="popup-form">
                        <input class="email" type="email" placeholder="Please enter your email">
                        <input class="submit" type="button" value="Get it now">
                    </form>
                
                    <button class="refuse btnClosePopup">No, thanks</button>
                </div>
            </div>`,
        namePopup: "Test-saas-popup-1",
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
    },
    {
        enable: true,
        functionName: "popupTest2",
        html: `<div class="popup">
                <div style="display: flex;align-items: center; justify-content: center;">
                    <img style="width: 48px; height: 48px; margin: 0 16px;" src="https://ich.edu.vn/App_Files/Upload/2019/icon-thanh-cong.png" alt="icon">
                    <p>Đã thanh toán thành công</p>
                    <button class="refuse btnClosePopup">No, thanks</button>
                </div>
            </div>`,
        namePopup: "Test-saas-popup-2",
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
                width: 500,
                height: 400,
                x: 0,
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
    },
    {
        enable: true,
        functionName: "popupTest3",
        html: `<div class="popup">
                <div style="display: flex;align-items: center; justify-content: center;">
                    <img style="width: 48px; height: 48px; margin: 0 16px;" src="https://ich.edu.vn/App_Files/Upload/2019/icon-thanh-cong.png" alt="icon">
                    <p>Đã thanh toán thành công</p>
                    <button class="refuse btnClosePopup">No, thanks</button>
                </div>
            </div>`,
        namePopup: "Test-saas-popup-3",
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
                    enable: true,
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
                    enable: true,
                    seconds: 3000,
                },
                closeClickButton: {
                    enable: false,
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
                x: 0,
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
    },
    {
        enable: true,
        functionName: "popupTest4",
        html: `<div class="popup">
                <div style="display: flex;align-items: center; justify-content: center;">
                    <img style="width: 48px; height: 48px; margin: 0 16px;" src="https://ich.edu.vn/App_Files/Upload/2019/icon-thanh-cong.png" alt="icon">
                    <p>Đã thanh toán thành công</p>
                    <button class="refuse btnClosePopup">No, thanks</button>
                </div>
            </div>`,
        namePopup: "Test-saas-popup-4",
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
                    enable: true,
                    seconds: 3000,
                },
                closeClickButton: {
                    enable: false,
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
                x: 0,
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
    },
    {
        enable: true,
        functionName: "popupTest5",
        html: `<div class="popup">
                <div style="display: flex;align-items: center; justify-content: center;">
                    <img style="width: 48px; height: 48px; margin: 0 16px;" src="https://ich.edu.vn/App_Files/Upload/2019/icon-thanh-cong.png" alt="icon">
                    <p>Đã thanh toán thành công</p>
                    <button class="refuse btnClosePopup">No, thanks</button>
                </div>
            </div>`,
        namePopup: "Test-saas-popup-5",
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
                    enable: true,
                    seconds: 5000,
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
                    enable: true,
                    seconds: 3000,
                },
                closeClickButton: {
                    enable: false,
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
                x: 0,
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
    }
];

(()=>{"use strict";var t={331:()=>{},87:(t,e,o)=>{o.d(e,{Z:()=>c});var n=o(919),s=o(384),i=o(555),r=o(123),a=o(214);const c=class{constructor(t,e,o){this.config=t,this.keyPopup=e,this.html=o}findKeysWithEnableTrue(t){const e=[];for(const o in t)if("object"==typeof t[o]){const n=this.findKeysWithEnableTrue(t[o]);n.length>0&&e.push(...n.map((t=>`${o}.${t}`)))}else"enable"===o&&!0===t[o]&&e.push(o);return e}splitStringToArray(t){return t.split(".")}filterEnabledElements(t){return t.filter((t=>"enable"!==t))}functionPopupEnabled=()=>{const t=this.findKeysWithEnableTrue(this.config);var e=["positionPopup"];return t.forEach((t=>{let o=this.filterEnabledElements(this.splitStringToArray(t)),n=o.length;n>0&&e.push(o[n-1])})),e};show(){new a.Z("my-popup",this.html,this.keyPopup,this.functionPopupEnabled()).innerPopup();const t=new s.Z(this.config.condition);t.getStatus(),!1!==t.getStatus()&&!0===t.getStatus()&&!0===this.config.enable&&(new r.Z(this.config.animations,this.keyPopup),new n.Z(this.config.behaviors,this.keyPopup),new i.Z(this.config.design,this.keyPopup))}}},544:(t,e,o)=>{var n=o(87);window.popup.forEach((t=>{if(!0===(e=t).enable&&document.body.classList.contains(e.namePopup)&&1==t.enable){const e=document.createElement("div");e.classList.add("my-popup",t.functionName),document.body.appendChild(e),new n.Z(t,t.functionName,t.html).show()}var e}))},505:(t,e,o)=>{o.d(e,{Z:()=>n});const n=class{constructor(t){this.config=t,this.Conditions=[]}readConfig(t,e,o,n){return e.forEach((e=>{void 0!==t[e]&&1==o[e](t[e],n)&&this.Conditions.pop()})),0==this.Conditions.length}activeConditions(t,e){e.forEach((e=>{1==t[e].enable&&this.Conditions.push(e)}))}}},227:()=>{},214:(t,e,o)=>{o.d(e,{Z:()=>n});const n=class{constructor(t,e,o,n){this.className=t,this.html=e,this.idPopup=o,this.classList=n}innerPopup(){const t=document.createElement("div");t.innerHTML=this.html,t.style.setProperty("display","none"),t.style.setProperty("background-color","#fff","important");for(let e of this.classList)t.classList.add(e);t.style.setProperty("position","fixed","important");let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="http://localhost:5500/src/core/core.css",document.head.appendChild(e),document.querySelector(`.${this.idPopup}`).appendChild(t)}}},123:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(294),s=o(388);const i=class{constructor(t,e){this.optionAppear=t.appear,this.optionDisAppear=t.disappear,this.keyPopup=e,this.init()}init(){new n.Z(this.optionAppear,this.keyPopup),new s.Z(this.optionDisAppear,this.keyPopup)}}},294:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(519),s=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}isEnableAnimations(){return this.options.enableAnimation}init(){this.isEnableAnimations()&&this.isOpenPopup()}isOpenPopup(){return(new s.Z).readConfig(this.options,["moveFromTop","horizontalMove","zoomIn","fadeIn"],n.Z,this.keyPopup)}}},708:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(1==t.enable){const o=t.easing,n=document.querySelector(`.${e}`).querySelector(".fadeIn");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&n.classList.contains("active")){const e=[{opacity:0},{opacity:1}],s={duration:t.duration,iterations:1,easing:o};n.animate(e,s)}}))})).observe(n,{attributes:!0})}}},45:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=window.innerWidth,s="left"==t.movingFrom.toLowerCase()?-n*(t.movingLength/100):n*(t.movingLength/100),i=document.querySelector(`.${e}`).querySelector(".horizontalMove");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&i.classList.contains("active")){const e=[{transform:`translateX(${s}px)`,opacity:0},{transform:"translateX(0px)",opacity:1}],n={duration:t.duration,iterations:1,easing:o};i.animate(e,n)}}))})).observe(i,{attributes:!0})}}},960:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=window.innerHeight*(t.movingLength/100),s=document.querySelector(`.${e}`).querySelector(".moveFromTop");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&s.classList.contains("active")){const e=[{transform:`translateY(-${n}px)`,opacity:0},{transform:"translateY(0px)",opacity:1}],i={duration:t.duration,iterations:1,easing:o};s.animate(e,i)}}))})).observe(s,{attributes:!0})}}},501:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=document.querySelector(`.${e}`).querySelector(".zoomIn");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&n.classList.contains("active")){const e=[{transform:`scale(${t.fromPercent/100})`,opacity:0},{transform:"scale(1)",opacity:1}],s={duration:t.duration,iterations:1,easing:o};n.animate(e,s)}}))})).observe(n,{attributes:!0})}}},519:(t,e,o)=>{o.d(e,{Z:()=>a});var n=o(960),s=o(45),i=o(501),r=o(708);const a={moveFromTop:n.Z,horizontalMove:s.Z,zoomIn:i.Z,fadeIn:r.Z}},388:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(413),s=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}isDisnableAnimations(){return this.options.enableAnimation}init(){this.isDisnableAnimations()&&this.isClosePopup()}isClosePopup(){(new s.Z).readConfig(this.options,["zoomOut","fadeOut","moveToTop","horizontalMove"],n.Z,this.keyPopup)}}},193:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=document.querySelector(`.${e}`).querySelector(".fadeOut");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!n.classList.contains("active")){async function s(){1==await new Promise((e=>{const s={duration:t.duration,iterations:1,easing:o};n.animate([{opacity:1},{opacity:0}],s).onfinish=()=>{e(!0)}}))&&n.style.setProperty("display","none")}n.style.setProperty("display","block","important"),s()}}))})).observe(n,{attributes:!0})}}},967:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=window.innerWidth,s="left"==t.movingTo.toLowerCase()?-n*(t.movingLength/100):n*(t.movingLength/100),i=document.querySelector(`.${e}`).querySelector(".horizontalMove");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!i.classList.contains("active")){async function n(){1==await new Promise((e=>{const n=[{transform:"translateX(0px)",opacity:1},{transform:`translateX(${s}px)`,opacity:0}],r={duration:t.duration,iterations:1,easing:o};i.animate(n,r).onfinish=()=>{e(!0)}}))&&i.style.setProperty("display","none")}i.style.setProperty("display","block","important"),n()}}))})).observe(i,{attributes:!0})}}},996:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=window.innerHeight*(t.movingLength/100),s=document.querySelector(`.${e}`).querySelector(".moveToTop");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!s.classList.contains("active")){async function i(){1==await new Promise((e=>{const i=[{transform:"translateY(0px)",opacity:1},{transform:`translateY(-${n}px)`,opacity:0}],r={duration:t.duration,iterations:1,easing:o};s.animate(i,r).onfinish=()=>{e(!0)}}))&&s.style.setProperty("display","none")}s.style.setProperty("display","block","important"),i()}}))})).observe(s,{attributes:!0})}}},307:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=document.querySelector(`.${e}`).querySelector(".zoomOut");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!n.classList.contains("active")){async function s(){1==await new Promise((e=>{const s={duration:t.duration,iterations:1,easing:o};n.animate([{transform:"scale(1)"},{transform:"scale(0)"}],s).onfinish=()=>{e(!0)}}))&&n.style.setProperty("display","none")}n.style.setProperty("display","block","important"),s()}}))})).observe(n,{attributes:!0})}}},413:(t,e,o)=>{o.d(e,{Z:()=>a});var n=o(307),s=o(193),i=o(996),r=o(967);const a={zoomOut:n.Z,fadeOut:s.Z,moveToTop:i.Z,horizontalMove:r.Z}},919:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(806),s=o(535);const i=class{constructor(t,e){this.optionOpen=t.open,this.optionClose=t.close,this.keyPopup=e,this.init()}init(){new s.Z(this.optionOpen,this.keyPopup),new n.Z(this.optionClose,this.keyPopup)}}},806:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(646),s=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}init(){(new s.Z).readConfig(this.options,["closeAfterXSeconds","closeClickButton","closeClickOutside"],n.Z,this.keyPopup)}}},879:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(1==t.enable){const o=document.querySelector(`.${e}`).querySelector(".closeAfterXSeconds");new MutationObserver((e=>{let n;e.forEach((e=>{"attributes"===e.type&&"class"===e.attributeName&&(o.classList.contains("active")?n=setTimeout((()=>{o.classList.remove("active"),o.style.setProperty("display","none")}),t.seconds):clearTimeout(n))}))})).observe(o,{attributes:!0})}}},190:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const t=document.querySelector(`.${e}`);t.querySelector(".btnClosePopup").onclick=()=>{t.querySelector(".closeClickButton").classList.remove("active")}}}},418:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(1==t.enable){function o(t){if(t.stopPropagation(),t.target!=document.body){let e=t.target.parentElement;for(;e!==document.body;){if(e.classList.contains("closeClickOutside")||e.classList.contains("activePopup"))return e;e=e.parentElement}return null}return!0}let n=document.querySelector(`.${e}`);n=n.children[0],document.addEventListener("click",(t=>{if(console.log(!n.classList.contains("active")),n.classList.contains("active"))return console.log(t.target!=document.querySelector(".btn"+e)),t.target!=document.querySelector(".btn"+e)?1==o(t)?void console.log(t.target):null==o(t)?void n.classList.remove("active"):void 0:void 0}))}}},646:(t,e,o)=>{o.d(e,{Z:()=>r});var n=o(879),s=o(190),i=o(418);const r={closeAfterXSeconds:n.Z,closeClickButton:s.Z,closeClickOutside:i.Z}},535:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(553),s=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}init(){this.isOpenPopup()}isOpenPopup(){return(new s.Z).readConfig(this.options,["scrollToXPercent","visitWebAfterXSeconds","onClickItem","afterViewXPage"],n.Z,this.keyPopup)}}},178:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(1==t.enable){var o=localStorage.getItem(`${e}`);null==o&&(o=0),o++,localStorage.setItem(`${e}`,o),o===t.NumPage&&document.querySelector(`.${e}`).querySelector(".afterViewXPage").classList.add("active")}}},10:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(console.log("aaaaaa"),1==t.enable){if(null==document.querySelector(`.btn${e}`))return;document.querySelector(`.btn${e}`).onclick=()=>{document.querySelector(`.${e}`).querySelector(".onClickItem").classList.add("active")}}}},376:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!t.enable)return!1;window.addEventListener("scroll",(function(){const o=window.scrollY;console.log("Giá trị đã cuộn: "+o);const n=document.body.scrollHeight-window.innerHeight;console.log("Chiều cao page: "+n);let s=sessionStorage.getItem(e);console.log(t.percent/100*n),o>=t.percent/100*n&&null===s&&(document.querySelector(`.${e}`).querySelector(".scrollToXPercent").classList.add("active"),sessionStorage.setItem(e,1))}))}},57:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(1==t.enable){const o=document.querySelector(`.${e}`).querySelector(".visitWebAfterXSeconds");setTimeout((()=>{o.classList.add("active")}),t.seconds)}}},553:(t,e,o)=>{o.d(e,{Z:()=>a});var n=o(376),s=o(57),i=o(10),r=o(178);const a={scrollToXPercent:n.Z,visitWebAfterXSeconds:s.Z,onClickItem:i.Z,afterViewXPage:r.Z}},384:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(34),s=o(505);const i=class{constructor(t){this.options=t}getStatus(){const t=new s.Z,e=["existClass","existCookie"];return t.activeConditions(this.options,e),t.readConfig(this.options,e,n.Z)}}},497:(t,e,o)=>{o.d(e,{Z:()=>n});const n=t=>!0===t.enable&&document.body.classList.contains("saas-popup")},610:(t,e,o)=>{o.d(e,{Z:()=>n});const n=t=>{if(!0===t.enable){return 1==(t=>{let e=t+"=",o=decodeURIComponent(document.cookie).split(";"),n=o.length;for(let t=0;t<n;t++){let n=o[t];for(;" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return""})("saas-popup")}return!1}},34:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(497),s=o(610);const i={existClass:n.Z,existCookie:s.Z}},30:(t,e,o)=>{o.d(e,{Z:()=>n});const n=function(t,e){if(!0===t.enable){let t=!1;const o=document.querySelector(`.${e}`).querySelector(".overlayPopup");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName)if(o.classList.contains("active")&&!1===t){let e=document.createElement("div");e.classList.add("overlay"),document.querySelector("body").appendChild(e),t=!0}else if(!o.classList.contains("active")){let e=document.querySelector(".overlay");e&&document.querySelector("body").removeChild(e),t=!1}}))})).observe(o,{attributes:!0})}}},236:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(null!=t.width&&null!=t.height){var o=document.documentElement.clientWidth,n=document.documentElement.clientHeight,s=t.width,i=t.height;o<=360?(s*=.4,i*=.4):o<=480?(s*=.5,i*=.5):o<=640?(s*=.7,i*=.7):o<=768&&(s*=.8,i*=.8);var r=(o-s)/o*100,a=(n-i)/n*100,c=o*(t.x/100)*(r/100),l=n*(t.y/100)*(a/100);let u=document.querySelector(`.${e}`).querySelector(".positionPopup");u.style.setProperty("width",`${s}px`,"important"),u.style.setProperty("height",`${i}px`,"important"),u.style.setProperty("left",`${c}px`,"important"),u.style.setProperty("top",`${l}px`,"important")}}},555:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(496),s=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}init(){(new s.Z).readConfig(this.options,["overlayPopup","positionPopup"],n.Z,this.keyPopup)}}},496:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(236),s=o(30);const i={positionPopup:n.Z,overlayPopup:s.Z}}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(544),o(505),o(227),o(331),o(87),o(214),o(708),o(45),o(960),o(501),o(294),o(519),o(193),o(967),o(996),o(307),o(388),o(413),o(123),o(879),o(190),o(418),o(806),o(646),o(178),o(10),o(376),o(57),o(535),o(553),o(919),o(497),o(610),o(384),o(34),o(30),o(236),o(555),o(496)})();