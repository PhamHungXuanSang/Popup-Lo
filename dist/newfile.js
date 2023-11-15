let a = [
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
                    </div>
                </div>`,
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

(()=>{"use strict";var __webpack_modules__={331:()=>{},87:(e,t,o)=>{o.d(t,{Z:()=>c});var i=o(919),s=o(384),n=o(555),r=o(123),a=o(214);const c=class{constructor(e,t,o){this.config=e,this.keyPopup=t,this.html=o}addStyleCSS(){document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("head"),t=document.createElement("link");t.rel="stylesheet",t.href="https://phamhungxuansang.github.io/Popup-Lo/src/core/core.css",e.appendChild(t)}))}findKeysWithEnableTrue(e){const t=[];for(const o in e)if("object"==typeof e[o]){const i=this.findKeysWithEnableTrue(e[o]);i.length>0&&t.push(...i.map((e=>`${o}.${e}`)))}else"enable"===o&&!0===e[o]&&t.push(o);return t}splitStringToArray(e){return e.split(".")}filterEnabledElements(e){return e.filter((e=>"enable"!==e))}functionPopupEnabled=()=>{const e=this.findKeysWithEnableTrue(this.config);var t=["positionPopup"];return e.forEach((e=>{let o=this.filterEnabledElements(this.splitStringToArray(e)),i=o.length;i>0&&t.push(o[i-1])})),t};show(){new a.Z("my-popup",this.html,this.keyPopup,this.functionPopupEnabled()).innerPopup();const e=new s.Z(this.config.condition);e.getStatus(),!1!==e.getStatus()&&!0===e.getStatus()&&!0===this.config.enable&&(new r.Z(this.config.animations,this.keyPopup),new i.Z(this.config.behaviors,this.keyPopup),new n.Z(this.config.design,this.keyPopup))}}},544:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Popup_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(87);function readConfig(e){e.forEach((e=>{if(1==e.enable){const t=document.createElement("div");t.classList.add("my-popup",e.functionName),document.body.appendChild(t);let o=new _Popup_js__WEBPACK_IMPORTED_MODULE_0__.Z(e,e.functionName,e.html);o.addStyleCSS(),o.show()}}))}eval("readConfig(a)")},505:(e,t,o)=>{o.d(t,{Z:()=>i});const i=class{constructor(e){this.config=e}readConfig(e,t,o,i){var s=!1;return t.forEach((t=>{void 0!==e[t]&&1==o[t](e[t],i)&&(s=!0)})),s}}},227:()=>{},214:(e,t,o)=>{o.d(t,{Z:()=>i});const i=class{constructor(e,t,o,i){this.className=e,this.html=t,this.idPopup=o,this.classList=i}innerPopup(e){const t=document.createElement("div");t.style.setProperty("display","none");for(let e of this.classList)t.classList.add(e);t.innerHTML=this.html,t.style.setProperty("position","fixed","important"),document.querySelector(`.${this.idPopup}`).appendChild(t)}}},123:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(294),s=o(388);const n=class{constructor(e,t){this.optionAppear=e.appear,this.optionDisAppear=e.disappear,this.keyPopup=t,this.init()}init(){new i.Z(this.optionAppear,this.keyPopup),new s.Z(this.optionDisAppear,this.keyPopup)}}},294:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(519),s=o(505);const n=class{constructor(e,t){this.options=e,this.keyPopup=t,this.init()}isEnableAnimations(){return this.options.enableAnimation}init(){this.isEnableAnimations()&&this.isOpenPopup()}isOpenPopup(){return(new s.Z).readConfig(this.options,["moveFromTop","horizontalMove","zoomIn","fadeIn"],i.Z,this.keyPopup)}}},708:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(1==e.enable){const o=e.easing,i=document.querySelector(`.${t}`).querySelector(".fadeIn");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&i.classList.contains("active")){const t=[{opacity:0},{opacity:1}],s={duration:e.duration,iterations:1,easing:o};i.animate(t,s)}}))})).observe(i,{attributes:!0})}}},45:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(!0===e.enable){const o=e.easing,i=window.innerWidth,s="left"==e.movingFrom.toLowerCase()?-i*(e.movingLength/100):i*(e.movingLength/100),n=document.querySelector(`.${t}`).querySelector(".horizontalMove");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&n.classList.contains("active")){const t=[{transform:`translateX(${s}px)`,opacity:0},{transform:"translateX(0px)",opacity:1}],i={duration:e.duration,iterations:1,easing:o};n.animate(t,i)}}))})).observe(n,{attributes:!0})}}},960:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(!0===e.enable){const o=e.easing,i=window.innerHeight*(e.movingLength/100),s=document.querySelector(`.${t}`).querySelector(".moveFromTop");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&s.classList.contains("active")){const t=[{transform:`translateY(-${i}px)`,opacity:0},{transform:"translateY(0px)",opacity:1}],n={duration:e.duration,iterations:1,easing:o};s.animate(t,n)}}))})).observe(s,{attributes:!0})}}},501:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(!0===e.enable){const o=e.easing,i=document.querySelector(`.${t}`).querySelector(".zoomIn");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&i.classList.contains("active")){const t=[{transform:`scale(${e.fromPercent/100})`,opacity:0},{transform:"scale(1)",opacity:1}],s={duration:e.duration,iterations:1,easing:o};i.animate(t,s)}}))})).observe(i,{attributes:!0})}}},519:(e,t,o)=>{o.d(t,{Z:()=>a});var i=o(960),s=o(45),n=o(501),r=o(708);const a={moveFromTop:i.Z,horizontalMove:s.Z,zoomIn:n.Z,fadeIn:r.Z}},388:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(413),s=o(505);const n=class{constructor(e,t){this.options=e,this.keyPopup=t,this.init()}isDisnableAnimations(){return this.options.enableAnimation}init(){this.isDisnableAnimations()&&this.isClosePopup()}isClosePopup(){(new s.Z).readConfig(this.options,["zoomOut","fadeOut","moveToTop","horizontalMove"],i.Z,this.keyPopup)}}},193:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(!0===e.enable){const o=e.easing,i=document.querySelector(`.${t}`).querySelector(".fadeOut");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&!i.classList.contains("active")){async function s(){1==await new Promise((t=>{const s={duration:e.duration,iterations:1,easing:o};i.animate([{opacity:1},{opacity:0}],s).onfinish=()=>{t(!0)}}))&&i.style.setProperty("display","none")}i.style.setProperty("display","block","important"),s()}}))})).observe(i,{attributes:!0})}}},967:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(!0===e.enable){const o=e.easing,i=window.innerWidth,s="left"==e.movingTo.toLowerCase()?-i*(e.movingLength/100):i*(e.movingLength/100),n=document.querySelector(`.${t}`).querySelector(".horizontalMove");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&!n.classList.contains("active")){async function i(){1==await new Promise((t=>{const i=[{transform:"translateX(0px)",opacity:1},{transform:`translateX(${s}px)`,opacity:0}],r={duration:e.duration,iterations:1,easing:o};n.animate(i,r).onfinish=()=>{t(!0)}}))&&n.style.setProperty("display","none")}n.style.setProperty("display","block","important"),i()}}))})).observe(n,{attributes:!0})}}},996:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(!0===e.enable){const o=e.easing,i=window.innerHeight*(e.movingLength/100),s=document.querySelector(`.${t}`).querySelector(".moveToTop");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&!s.classList.contains("active")){async function n(){1==await new Promise((t=>{const n=[{transform:"translateY(0px)",opacity:1},{transform:`translateY(-${i}px)`,opacity:0}],r={duration:e.duration,iterations:1,easing:o};s.animate(n,r).onfinish=()=>{t(!0)}}))&&s.style.setProperty("display","none")}s.style.setProperty("display","block","important"),n()}}))})).observe(s,{attributes:!0})}}},307:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(!0===e.enable){const o=e.easing,i=document.querySelector(`.${t}`).querySelector(".zoomOut");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&!i.classList.contains("active")){async function s(){1==await new Promise((t=>{const s={duration:e.duration,iterations:1,easing:o};i.animate([{transform:"scale(1)"},{transform:"scale(0)"}],s).onfinish=()=>{t(!0)}}))&&i.style.setProperty("display","none")}i.style.setProperty("display","block","important"),s()}}))})).observe(i,{attributes:!0})}}},413:(e,t,o)=>{o.d(t,{Z:()=>a});var i=o(307),s=o(193),n=o(996),r=o(967);const a={zoomOut:i.Z,fadeOut:s.Z,moveToTop:n.Z,horizontalMove:r.Z}},919:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(806),s=o(535);const n=class{constructor(e,t){this.optionOpen=e.open,this.optionClose=e.close,this.keyPopup=t,this.init()}init(){new s.Z(this.optionOpen,this.keyPopup),new i.Z(this.optionClose,this.keyPopup)}}},806:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(646),s=o(505);const n=class{constructor(e,t){this.options=e,this.keyPopup=t,this.init()}init(){(new s.Z).readConfig(this.options,["closeAfterXSeconds","closeClickButton","closeClickOutside"],i.Z,this.keyPopup)}}},879:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(1==e.enable){const o=document.querySelector(`.${t}`).querySelector(".closeAfterXSeconds");new MutationObserver((t=>{let i;t.forEach((t=>{"attributes"===t.type&&"class"===t.attributeName&&(o.classList.contains("active")?i=setTimeout((()=>{o.classList.remove("active"),o.style.setProperty("display","none")}),e.seconds):clearTimeout(i))}))})).observe(o,{attributes:!0})}}},190:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(!0===e.enable){const e=document.querySelector(`.${t}`);e.querySelector(".btnClosePopup").onclick=()=>{e.querySelector(".closeClickButton").classList.remove("active")}}}},418:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(1==e.enable){function o(e){if(e.stopPropagation(),e.target!=document.body){let t=e.target.parentElement;for(;t!==document.body;){if(t.classList.contains("closeClickOutside")||t.classList.contains("activePopup"))return t;t=t.parentElement}return null}return!0}document.querySelectorAll(".closeClickOutside").forEach(((e,t)=>{document.addEventListener("click",(i=>{if(e.classList.contains("active")&&i.target!=document.querySelector(".btnpopupTest"+(t+1))){if(1==o(i))return;null==o(i)&&e.classList.remove("active")}}))}))}}},646:(e,t,o)=>{o.d(t,{Z:()=>r});var i=o(879),s=o(190),n=o(418);const r={closeAfterXSeconds:i.Z,closeClickButton:s.Z,closeClickOutside:n.Z}},535:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(553),s=o(505);const n=class{constructor(e,t){this.options=e,this.keyPopup=t,this.init()}init(){this.isOpenPopup()}isOpenPopup(){return(new s.Z).readConfig(this.options,["scrollToXPercent","visitWebAfterXSeconds","onClickItem","afterViewXPage"],i.Z,this.keyPopup)}}},178:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(1==e.enable){var o=localStorage.getItem(`${t}`);null==o&&(o=0),o++,localStorage.setItem(`${t}`,o),o===e.NumPage&&document.querySelector(`.${t}`).querySelector(".afterViewXPage").classList.add("active")}}},10:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{console.log(t),1==e.enable&&(document.querySelector(`.btn${t}`).onclick=()=>{document.querySelector(`.${t}`).querySelector(".onClickItem").classList.add("active")})}},376:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(!e.enable)return!1;window.addEventListener("scroll",(function(){const o=window.scrollY;console.log("Giá trị đã cuộn: "+o);const i=document.body.scrollHeight-window.innerHeight;console.log("Chiều cao page: "+i);let s=sessionStorage.getItem(t);console.log(e.percent/100*i),o>=e.percent/100*i&&null===s&&(document.querySelector(`.${t}`).querySelector(".scrollToXPercent").classList.add("active"),sessionStorage.setItem(t,1))}))}},57:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(1==e.enable){const o=document.querySelector(`.${t}`).querySelector(".visitWebAfterXSeconds");setTimeout((()=>{o.classList.add("active")}),e.seconds)}}},553:(e,t,o)=>{o.d(t,{Z:()=>a});var i=o(376),s=o(57),n=o(10),r=o(178);const a={scrollToXPercent:i.Z,visitWebAfterXSeconds:s.Z,onClickItem:n.Z,afterViewXPage:r.Z}},384:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(34),s=o(505);const n=class{constructor(e){this.options=e,this.init()}init(){(new s.Z).readConfig(this.options,["existClass","existCookie"],i.Z)}getStatus(){return(new s.Z).readConfig(this.options,["existClass","existCookie"],i.Z)}}},497:(e,t,o)=>{o.d(t,{Z:()=>i});const i=e=>!0===e.enable&&document.body.classList.contains("saas-popup")},610:(e,t,o)=>{o.d(t,{Z:()=>i});const i=e=>{if(!0===e.enable){return 1==(e=>{let t=e+"=",o=decodeURIComponent(document.cookie).split(";"),i=o.length;for(let e=0;e<i;e++){let i=o[e];for(;" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""})("saas-popup")}return!1}},34:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(497),s=o(610);const n={existClass:i.Z,existCookie:s.Z}},30:(e,t,o)=>{o.d(t,{Z:()=>i});const i=function(e,t){if(console.log(e),!0===e.enable){let e=!1;const o=document.querySelector(`.${t}`).querySelector(".overlayPopup");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName)if(o.classList.contains("active")&&!1===e){let t=document.createElement("div");t.classList.add("overlay"),document.querySelector("body").appendChild(t),e=!0}else if(!o.classList.contains("active")){let t=document.querySelector(".overlay");t&&document.querySelector("body").removeChild(t),e=!1}}))})).observe(o,{attributes:!0})}}},236:(e,t,o)=>{o.d(t,{Z:()=>i});const i=(e,t)=>{if(console.log(e),null!=e.width&&null!=e.height){var o=document.documentElement.clientWidth,i=document.documentElement.clientHeight,s=e.width,n=e.height;o<=360?(s*=.4,n*=.4):o<=480?(s*=.5,n*=.5):o<=640?(s*=.7,n*=.7):o<=768&&(s*=.8,n*=.8);var r=(o-s)/o*100,a=(i-n)/i*100,c=o*(e.x/100)*(r/100),u=i*(e.y/100)*(a/100);let l=document.querySelector(`.${t}`).querySelector(".positionPopup");console.log(l),l.style.setProperty("width",`${s}px`,"important"),l.style.setProperty("height",`${n}px`,"important"),l.style.setProperty("left",`${c}px`,"important"),l.style.setProperty("top",`${u}px`,"important")}}},555:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(496),s=o(505);const n=class{constructor(e,t){this.options=e,this.keyPopup=t,this.init()}init(){(new s.Z).readConfig(this.options,["overlayPopup","positionPopup"],i.Z,this.keyPopup)}}},496:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(236),s=o(30);const n={positionPopup:i.Z,overlayPopup:s.Z}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var o=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](o,o.exports,__webpack_require__),o.exports}__webpack_require__.d=(e,t)=>{for(var o in t)__webpack_require__.o(t,o)&&!__webpack_require__.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__(544),__webpack_require__(505),__webpack_require__(227),__webpack_require__(331),__webpack_require__(87),__webpack_require__(214),__webpack_require__(708),__webpack_require__(45),__webpack_require__(960),__webpack_require__(501),__webpack_require__(294),__webpack_require__(519),__webpack_require__(193),__webpack_require__(967),__webpack_require__(996),__webpack_require__(307),__webpack_require__(388),__webpack_require__(413),__webpack_require__(123),__webpack_require__(879),__webpack_require__(190),__webpack_require__(418),__webpack_require__(806),__webpack_require__(646),__webpack_require__(178),__webpack_require__(10),__webpack_require__(376),__webpack_require__(57),__webpack_require__(535),__webpack_require__(553),__webpack_require__(919),__webpack_require__(497),__webpack_require__(610),__webpack_require__(384),__webpack_require__(34),__webpack_require__(30),__webpack_require__(236),__webpack_require__(555);var __webpack_exports__=__webpack_require__(496)})();