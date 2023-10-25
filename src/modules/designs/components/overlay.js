'use strict';

function overlay(config) {
    if (config.enable === true) {
      let open = false;
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "class") {
            if (document.querySelector(config.className).classList.contains("active") && open === false) {
              let overlay = document.createElement("div");
              overlay.classList.add("overlay");
              document.querySelector("body").appendChild(overlay);
              open = true;
            } else if (!document.querySelector(config.className).classList.contains("active")) {
              let overlay = document.querySelector(".overlay");
              overlay ? document.querySelector("body").removeChild(overlay) : "";
              open = false;
            }
          }
        });
      });
  
      observer.observe(document.querySelector(config.className), {
        attributes: true,
      });
    }
  }
export default overlay;