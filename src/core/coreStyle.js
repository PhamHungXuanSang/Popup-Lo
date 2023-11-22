'use strict';

export const coreStyle = () => {
    var styleTag = document.createElement("style");
    document.head.appendChild(styleTag);
    var cssStyles = ``;

    styleTag.appendChild(document.createTextNode(cssStyles));
};