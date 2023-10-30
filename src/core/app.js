'use strict';

// import Popup from "../../src/core/Popup.js";
// import FindClass from "./FindClass.js";

// var configAPI = 'https://saasstaging.variux.com/rest/V1/popupConfig/1';

// fetch(configAPI)
//     .then(function(response) {
//         return response.json();
//     })

//     .then(function(config) {
//         console.log(config);
//     })

// let newPopup1 = new Popup(config1, "popupTest01");
// newPopup1.show();
// let newPopup2 = new Popup(config2, "popupTest02");
// newPopup2.show();

// FindClass('my-popup').forEach((pop) => {
//     let newPopup = new Popup(config1, pop);
//     newPopup.show();
//     console.log(pop);
// })

// fetch("https://cors-anywhere.herokuapp.com/https://saasstaging.variux.com/rest/V1/integration/admin/token", {
//     method: "POST",
//     body: JSON.stringify({
//         username: "tungnguyen",
//         password: "p7}Z/&6MG-fRg(yg",
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
//     .then(res => res.json())
//     .then(data => console.log(data));



// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("demo").innerHTML = xhttp.responseText;
//     }
// };
// xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://saasstaging.variux.com/rest/V1/popupConfig/1", true);
// xhttp.send();


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://saasstaging.variux.com/rest/V1/popupConfig/1", true);
xhttp.send();