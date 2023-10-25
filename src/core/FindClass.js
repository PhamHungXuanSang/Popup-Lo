'use strict';


const FindClass = (classRoot) => {
    const arrMyPopup = document.querySelectorAll(`.${classRoot}`);
    let classListKey = [];

    for(let i of arrMyPopup) {
        classListKey.push(i.classList[1]);
    }

    return classListKey;
};

export default FindClass;