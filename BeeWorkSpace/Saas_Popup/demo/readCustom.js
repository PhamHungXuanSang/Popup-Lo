'use strict';

const url = 'Custom.json';

fetch(url)
    .then((res) => {
        return res.json()
    })
    .then(json => console.log(json))