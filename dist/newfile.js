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
        css: `.my-popup {
            position: absolute;
            z-index: 1010 !important;
        }
        
        .active {
            display: block !important;
        }
        
        .closePopup {
            display: none;
        }
        
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 1000;
        }
        
        .popup {
            width: 100%;
            height: 100%;
            display: flex;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 2px 3px 3px 2px #ccc;
        }
        
        .img-wrapper {
            height: 100%;
            width: 45%;
        }
        
        .popup img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .content {
            flex-grow: 1;
            text-align: center;
            background-color: #fff;
        }
        
        .content .popup-heading {
            font-size: 160%;
            line-height: 100%;
            height: 10%;
            font-weight: 700;
            color: #bbb;
            margin-top: 10%;
            margin-bottom: 0;
        }
        
        .content .popup-offer {
            font-size: 180%;
            margin-top: 4%;
            margin-bottom: 0;
        }
        
        .content .popup-desc {
            font-size: 130%;
            color: #bbb;
            margin-top: 4%;
        }
        
        .content .popup-form {
            margin-top: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .content .popup-form .email {
            width: 70%;
            padding: 4% 8%;
            border-radius: 20px;
            border: 1px solid #ccc;
            background-color: #ddd;
            outline: none;
            margin-bottom: 10%;
        }
        
        .content .popup-form .submit {
            width: 70%;
            padding: 2% 8%;
            border-radius: 20px;
            border: none;
            background-color: red;
            color: #fff;
            font-size: 150%;
            font-weight: bold;
            outline: none;
            margin-bottom: 10%;
        }
        
        .content .popup-form .submit:hover {
            cursor: pointer;
            opacity: 0.8;
        }
        
        .content .refuse {
            border: none;
            background-color: transparent;
            text-decoration: underline;
            cursor: pointer;
            padding: 1.5%;
        }
        
        /* Responsive */
        @media screen and (max-width: 768px) {
            .popup {
                width: 100%;
                height: 100%;
                display: flex;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 2px 3px 3px 2px #ccc;
            }
        
            .content .popup-heading {
                font-size: 150%;
                line-height: 100%;
                height: 10%;
                font-weight: 700;
                color: #bbb;
                margin-top: 10%;
                margin-bottom: 0;
            }
            
            .content .popup-offer {
                font-size: 150%;
                margin-top: 4%;
                margin-bottom: 0;
            }
            
            .content .popup-desc {
                font-size: 130%;
                color: #bbb;
                margin-top: 4%;
            }
            
            .content .popup-form {
                margin-top: 16%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        
            .content .popup-form .email {
                width: 60%;
                padding: 3% 8%;
                border-radius: 20px;
                border: 1px solid #ccc;
                background-color: #ddd;
                outline: none;
                margin-bottom: 10%;
            }
            
            .content .popup-form .submit {
                width: 60%;
                padding: 2% 8%;
                border-radius: 20px;
                border: none;
                background-color: red;
                color: #fff;
                font-size: 150%;
                font-weight: bold;
                outline: none;
                margin-bottom: 10%;
            }
        }
        
        @media screen and (max-width: 640px) {
            .popup {
                width: 100%;
                height: 100%;
                display: flex;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 2px 3px 3px 2px #ccc;
            }
        
            .content .popup-heading {
                font-size: 130%;
                line-height: 100%;
                height: 10%;
                font-weight: 700;
                color: #bbb;
                margin-top: 10%;
                margin-bottom: 0;
            }
            
            .content .popup-offer {
                font-size: 150%;
                margin-top: 4%;
                margin-bottom: 0;
            }
            
            .content .popup-desc {
                font-size: 120%;
                color: #bbb;
                margin-top: 4%;
            }
            
            .content .popup-form {
                margin-top: 16%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        
            .content .popup-form .email {
                width: 60%;
                padding: 3% 8%;
                border-radius: 20px;
                border: 1px solid #ccc;
                background-color: #ddd;
                outline: none;
                margin-bottom: 10%;
            }
            
            .content .popup-form .submit {
                width: 60%;
                padding: 2% 8%;
                border-radius: 20px;
                border: none;
                background-color: red;
                color: #fff;
                font-size: 120%;
                font-weight: bold;
                outline: none;
                margin-bottom: 10%;
            }
        }
        
        @media screen and (max-width: 480px) {
            .popup {
                width: 100%;
                height: 100%;
                display: flex;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 2px 3px 3px 2px #ccc;
            }
        
            .content .popup-heading {
                font-size: 100%;
                line-height: 100%;
                height: 10%;
                font-weight: 700;
                color: #bbb;
                margin-top: 8%;
                margin-bottom: 0;
            }
            
            .content .popup-offer {
                font-size: 120%;
                margin-top: 4%;
                margin-bottom: 0;
            }
            
            .content .popup-desc {
                font-size: 90%;
                color: #bbb;
                margin-top: 4%;
            }
            
            .content .popup-form {
                margin-top: 16%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        
            .content .popup-form .email {
                width: 70%;
                font-size: 60%;
                padding: 3% 8%;
                border-radius: 20px;
                border: 1px solid #ccc;
                background-color: #ddd;
                outline: none;
                margin-bottom: 6%;
            }
            
            .content .popup-form .submit {
                width: 70%;
                padding: 2% 4%;
                border-radius: 20px;
                border: none;
                background-color: red;
                color: #fff;
                font-size: 80%;
                font-weight: bold;
                outline: none;
                margin-bottom: 8%;
            }
        }
        
        @media screen and (max-width: 360px) {
            .popup {
                width: 100%;
                height: 100%;
                display: flex;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 2px 3px 3px 2px #ccc;
            }
        
            .content .popup-heading {
                font-size: 90%;
                line-height: 90%;
                height: 10%;
                font-weight: 700;
                color: #bbb;
                margin-top: 8%;
                margin-bottom: 0;
            }
            
            .content .popup-offer {
                font-size: 100%;
                margin-top: 4%;
                margin-bottom: 0;
            }
            
            .content .popup-desc {
                font-size: 70%;
                color: #bbb;
                margin-top: 4%;
            }
            
            .content .popup-form {
                margin-top: 12%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        
            .content .popup-form .email {
                width: 70%;
                font-size: 50%;
                padding: 2% 6%;
                border-radius: 20px;
                border: 1px solid #ccc;
                background-color: #ddd;
                outline: none;
                margin-bottom: 6%;
            }
            
            .content .popup-form .submit {
                width: 70%;
                padding: 2% 6%;
                border-radius: 20px;
                border: none;
                background-color: red;
                color: #fff;
                font-size: 70%;
                font-weight: bold;
                outline: none;
                margin-bottom: 6%;
            }
        
            .content .refuse {
                font-size: 60%;
                border: none;
                background-color: transparent;
                text-decoration: underline;
                cursor: pointer;
                padding: 1.5%;
            }
        }`,
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
                    enable: true,
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
    }
];

(()=>{"use strict";var t={331:()=>{},87:(t,e,o)=>{o.d(e,{Z:()=>c});var s=o(919),n=o(384),i=o(555),r=o(123),a=o(214);const c=class{constructor(t,e,o,s){this.config=t,this.keyPopup=e,this.html=o,this.styleCss=s}findKeysWithEnableTrue(t){const e=[];for(const o in t)if("object"==typeof t[o]){const s=this.findKeysWithEnableTrue(t[o]);s.length>0&&e.push(...s.map((t=>`${o}.${t}`)))}else"enable"===o&&!0===t[o]&&e.push(o);return e}splitStringToArray(t){return t.split(".")}filterEnabledElements(t){return t.filter((t=>"enable"!==t))}functionPopupEnabled=()=>{const t=this.findKeysWithEnableTrue(this.config);var e=["positionPopup"];return t.forEach((t=>{let o=this.filterEnabledElements(this.splitStringToArray(t)),s=o.length;s>0&&e.push(o[s-1])})),e};show(){new a.Z("my-popup",this.html,this.styleCss,this.keyPopup,this.functionPopupEnabled()).innerPopup();const t=new n.Z(this.config.condition);t.getStatus(),!1!==t.getStatus()&&!0===t.getStatus()&&!0===this.config.enable&&(new r.Z(this.config.animations,this.keyPopup),new s.Z(this.config.behaviors,this.keyPopup),new i.Z(this.config.design,this.keyPopup))}}},544:(t,e,o)=>{var s=o(87);window.popup.forEach((t=>{if(!0===(e=t).enable&&document.body.classList.contains(e.namePopup)&&1==t.enable){const e=document.createElement("div");e.classList.add("my-popup",t.functionName),document.body.appendChild(e),new s.Z(t,t.functionName,t.html,t.css).show()}var e}))},505:(t,e,o)=>{o.d(e,{Z:()=>s});const s=class{constructor(t){this.config=t,this.Conditions=[]}readConfig(t,e,o,s){return e.forEach((e=>{void 0!==t[e]&&1==o[e](t[e],s)&&this.Conditions.pop()})),0==this.Conditions.length}activeConditions(t,e){e.forEach((e=>{1==t[e].enable&&this.Conditions.push(e)}))}}},227:()=>{},214:(t,e,o)=>{o.d(e,{Z:()=>s});const s=class{constructor(t,e,o,s,n){this.className=t,this.html=e,this.styleCss=o,this.idPopup=s,this.classList=n}innerPopup(){const t=document.createElement("div");t.innerHTML=this.html,t.style.setProperty("display","none"),t.style.setProperty("background-color","#fff","important");for(let e of this.classList)t.classList.add(e);t.style.setProperty("position","fixed","important");let e=document.createElement("style");document.head.appendChild(e);let o=this.styleCss;e.appendChild(document.createTextNode(o)),document.querySelector(`.${this.idPopup}`).appendChild(t)}}},123:(t,e,o)=>{o.d(e,{Z:()=>i});var s=o(294),n=o(388);const i=class{constructor(t,e){this.optionAppear=t.appear,this.optionDisAppear=t.disappear,this.keyPopup=e,this.init()}init(){new s.Z(this.optionAppear,this.keyPopup),new n.Z(this.optionDisAppear,this.keyPopup)}}},294:(t,e,o)=>{o.d(e,{Z:()=>i});var s=o(519),n=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}isEnableAnimations(){return this.options.enableAnimation}init(){this.isEnableAnimations()&&this.isOpenPopup()}isOpenPopup(){return(new n.Z).readConfig(this.options,["moveFromTop","horizontalMove","zoomIn","fadeIn"],s.Z,this.keyPopup)}}},708:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(1==t.enable){const o=t.easing,s=document.querySelector(`.${e}`).querySelector(".fadeIn");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&s.classList.contains("active")){const e=[{opacity:0},{opacity:1}],n={duration:t.duration,iterations:1,easing:o};s.animate(e,n)}}))})).observe(s,{attributes:!0})}}},45:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(!0===t.enable){const o=t.easing,s=window.innerWidth,n="left"==t.movingFrom.toLowerCase()?-s*(t.movingLength/100):s*(t.movingLength/100),i=document.querySelector(`.${e}`).querySelector(".horizontalMove");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&i.classList.contains("active")){const e=[{transform:`translateX(${n}px)`,opacity:0},{transform:"translateX(0px)",opacity:1}],s={duration:t.duration,iterations:1,easing:o};i.animate(e,s)}}))})).observe(i,{attributes:!0})}}},960:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(!0===t.enable){const o=t.easing,s=window.innerHeight*(t.movingLength/100),n=document.querySelector(`.${e}`).querySelector(".moveFromTop");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&n.classList.contains("active")){const e=[{transform:`translateY(-${s}px)`,opacity:0},{transform:"translateY(0px)",opacity:1}],i={duration:t.duration,iterations:1,easing:o};n.animate(e,i)}}))})).observe(n,{attributes:!0})}}},501:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(!0===t.enable){const o=t.easing,s=document.querySelector(`.${e}`).querySelector(".zoomIn");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&s.classList.contains("active")){const e=[{transform:`scale(${t.fromPercent/100})`,opacity:0},{transform:"scale(1)",opacity:1}],n={duration:t.duration,iterations:1,easing:o};s.animate(e,n)}}))})).observe(s,{attributes:!0})}}},519:(t,e,o)=>{o.d(e,{Z:()=>a});var s=o(960),n=o(45),i=o(501),r=o(708);const a={moveFromTop:s.Z,horizontalMove:n.Z,zoomIn:i.Z,fadeIn:r.Z}},388:(t,e,o)=>{o.d(e,{Z:()=>i});var s=o(413),n=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}isDisnableAnimations(){return this.options.enableAnimation}init(){this.isDisnableAnimations()&&this.isClosePopup()}isClosePopup(){(new n.Z).readConfig(this.options,["zoomOut","fadeOut","moveToTop","horizontalMove"],s.Z,this.keyPopup)}}},193:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(!0===t.enable){const o=t.easing,s=document.querySelector(`.${e}`).querySelector(".fadeOut");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!s.classList.contains("active")){async function n(){1==await new Promise((e=>{const n={duration:t.duration,iterations:1,easing:o};s.animate([{opacity:1},{opacity:0}],n).onfinish=()=>{e(!0)}}))&&s.style.setProperty("display","none")}s.style.setProperty("display","block","important"),n()}}))})).observe(s,{attributes:!0})}}},967:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(!0===t.enable){const o=t.easing,s=window.innerWidth,n="left"==t.movingTo.toLowerCase()?-s*(t.movingLength/100):s*(t.movingLength/100),i=document.querySelector(`.${e}`).querySelector(".horizontalMove");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!i.classList.contains("active")){async function s(){1==await new Promise((e=>{const s=[{transform:"translateX(0px)",opacity:1},{transform:`translateX(${n}px)`,opacity:0}],r={duration:t.duration,iterations:1,easing:o};i.animate(s,r).onfinish=()=>{e(!0)}}))&&i.style.setProperty("display","none")}i.style.setProperty("display","block","important"),s()}}))})).observe(i,{attributes:!0})}}},996:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(!0===t.enable){const o=t.easing,s=window.innerHeight*(t.movingLength/100),n=document.querySelector(`.${e}`).querySelector(".moveToTop");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!n.classList.contains("active")){async function i(){1==await new Promise((e=>{const i=[{transform:"translateY(0px)",opacity:1},{transform:`translateY(-${s}px)`,opacity:0}],r={duration:t.duration,iterations:1,easing:o};n.animate(i,r).onfinish=()=>{e(!0)}}))&&n.style.setProperty("display","none")}n.style.setProperty("display","block","important"),i()}}))})).observe(n,{attributes:!0})}}},307:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(!0===t.enable){const o=t.easing,s=document.querySelector(`.${e}`).querySelector(".zoomOut");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!s.classList.contains("active")){async function n(){1==await new Promise((e=>{const n={duration:t.duration,iterations:1,easing:o};s.animate([{transform:"scale(1)"},{transform:"scale(0)"}],n).onfinish=()=>{e(!0)}}))&&s.style.setProperty("display","none")}s.style.setProperty("display","block","important"),n()}}))})).observe(s,{attributes:!0})}}},413:(t,e,o)=>{o.d(e,{Z:()=>a});var s=o(307),n=o(193),i=o(996),r=o(967);const a={zoomOut:s.Z,fadeOut:n.Z,moveToTop:i.Z,horizontalMove:r.Z}},919:(t,e,o)=>{o.d(e,{Z:()=>i});var s=o(806),n=o(535);const i=class{constructor(t,e){this.optionOpen=t.open,this.optionClose=t.close,this.keyPopup=e,this.init()}init(){new n.Z(this.optionOpen,this.keyPopup),new s.Z(this.optionClose,this.keyPopup)}}},806:(t,e,o)=>{o.d(e,{Z:()=>i});var s=o(646),n=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}init(){(new n.Z).readConfig(this.options,["closeAfterXSeconds","closeClickButton","closeClickOutside"],s.Z,this.keyPopup)}}},879:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(!0===t.enable){const o=document.querySelector(`.${e} .closeAfterXSeconds`);let s;new MutationObserver((e=>{e.forEach((e=>{"attributes"===e.type&&"class"===e.attributeName&&(o.classList.contains("active")?s||(s=setTimeout((()=>{o.classList.remove("active"),s=null}),t.seconds)):clearTimeout(s))}))})).observe(o,{attributes:!0})}}},190:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(!0===t.enable){const t=document.querySelector(`.${e}`);t.querySelector(".btnClosePopup").onclick=()=>{t.querySelector(".closeClickButton").classList.remove("active")}}}},418:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(1==t.enable){function o(t){if(t.stopPropagation(),t.target!=document.body){let e=t.target.parentElement;for(;e!==document.body;){if(e.classList.contains("closeClickOutside")||e.classList.contains("activePopup"))return e;e=e.parentElement}return null}return!0}let s=document.querySelector(`.${e}`);s=s.children[0],document.addEventListener("click",(t=>{if(console.log(!s.classList.contains("active")),s.classList.contains("active"))return console.log(t.target!=document.querySelector(".btn"+e)),t.target!=document.querySelector(".btn"+e)?1==o(t)?void console.log(t.target):null==o(t)?void s.classList.remove("active"):void 0:void 0}))}}},646:(t,e,o)=>{o.d(e,{Z:()=>r});var s=o(879),n=o(190),i=o(418);const r={closeAfterXSeconds:s.Z,closeClickButton:n.Z,closeClickOutside:i.Z}},535:(t,e,o)=>{o.d(e,{Z:()=>i});var s=o(553),n=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}init(){this.isOpenPopup()}isOpenPopup(){return(new n.Z).readConfig(this.options,["scrollToXPercent","visitWebAfterXSeconds","onClickItem","afterViewXPage"],s.Z,this.keyPopup)}}},178:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(!0===t.enable){let t=localStorage.getItem(`${e}`)||0;if(t++,localStorage.setItem(`${e}`,t),ekeyPopup){const t=ekeyPopup.querySelector(".afterViewXPage");t&&!t.classList.contains("active")&&t.classList.add("active")}}}},10:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(1==t.enable){if(null==document.querySelector(`.btn${e}`))return;document.querySelector(`.btn${e}`).onclick=()=>{document.querySelector(`.${e}`).querySelector(".onClickItem").classList.add("active")}}}},376:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(!t.enable)return!1;window.addEventListener("scroll",(function(){const o=window.scrollY;console.log("Giá trị đã cuộn: "+o);const s=document.body.scrollHeight-window.innerHeight;console.log("Chiều cao page: "+s);let n=sessionStorage.getItem(e);console.log(t.percent/100*s),o>=t.percent/100*s&&null===n&&(document.querySelector(`.${e}`).querySelector(".scrollToXPercent").classList.add("active"),sessionStorage.setItem(e,1))}))}},57:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(1==t.enable){const o=document.querySelector(`.${e}`).querySelector(".visitWebAfterXSeconds");setTimeout((()=>{o.classList.add("active")}),t.seconds)}}},553:(t,e,o)=>{o.d(e,{Z:()=>a});var s=o(376),n=o(57),i=o(10),r=o(178);const a={scrollToXPercent:s.Z,visitWebAfterXSeconds:n.Z,onClickItem:i.Z,afterViewXPage:r.Z}},384:(t,e,o)=>{o.d(e,{Z:()=>i});var s=o(34),n=o(505);const i=class{constructor(t){this.options=t}getStatus(){const t=new n.Z,e=["existClass","existCookie"];return t.activeConditions(this.options,e),t.readConfig(this.options,e,s.Z)}}},497:(t,e,o)=>{o.d(e,{Z:()=>s});const s=t=>!0===t.enable&&document.body.classList.contains("saas-popup")},610:(t,e,o)=>{o.d(e,{Z:()=>s});const s=t=>{if(!0===t.enable){return 1==(t=>{let e=t+"=",o=decodeURIComponent(document.cookie).split(";"),s=o.length;for(let t=0;t<s;t++){let s=o[t];for(;" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(e))return s.substring(e.length,s.length)}return""})("saas-popup")}return!1}},34:(t,e,o)=>{o.d(e,{Z:()=>i});var s=o(497),n=o(610);const i={existClass:s.Z,existCookie:n.Z}},30:(t,e,o)=>{o.d(e,{Z:()=>s});const s=function(t,e){if(!0===t.enable){let t=!1;const o=document.querySelector(`.${e}`).querySelector(".overlayPopup");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName)if(o.classList.contains("active")&&!1===t){let e=document.createElement("div");e.classList.add("overlay"),document.querySelector("body").appendChild(e),t=!0}else if(!o.classList.contains("active")){let e=document.querySelector(".overlay");e&&document.querySelector("body").removeChild(e),t=!1}}))})).observe(o,{attributes:!0})}}},236:(t,e,o)=>{o.d(e,{Z:()=>s});const s=(t,e)=>{if(null!=t.width&&null!=t.height){var o=document.documentElement.clientWidth,s=document.documentElement.clientHeight,n=t.width,i=t.height;o<=360?(n*=.4,i*=.4):o<=480?(n*=.5,i*=.5):o<=640?(n*=.7,i*=.7):o<=768&&(n*=.8,i*=.8);var r=(o-n)/o*100,a=(s-i)/s*100,c=o*(t.x/100)*(r/100),l=s*(t.y/100)*(a/100);let u=document.querySelector(`.${e}`).querySelector(".positionPopup");u.style.setProperty("width",`${n}px`,"important"),u.style.setProperty("height",`${i}px`,"important"),u.style.setProperty("left",`${c}px`,"important"),u.style.setProperty("top",`${l}px`,"important")}}},555:(t,e,o)=>{o.d(e,{Z:()=>i});var s=o(496),n=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}init(){(new n.Z).readConfig(this.options,["overlayPopup","positionPopup"],s.Z,this.keyPopup)}}},496:(t,e,o)=>{o.d(e,{Z:()=>i});var s=o(236),n=o(30);const i={positionPopup:s.Z,overlayPopup:n.Z}}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,o),i.exports}o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(544),o(505),o(227),o(331),o(87),o(214),o(708),o(45),o(960),o(501),o(294),o(519),o(193),o(967),o(996),o(307),o(388),o(413),o(123),o(879),o(190),o(418),o(806),o(646),o(178),o(10),o(376),o(57),o(535),o(553),o(919),o(497),o(610),o(384),o(34),o(30),o(236),o(555),o(496)})();