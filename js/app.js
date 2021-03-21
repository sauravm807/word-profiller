"use strict";

document.querySelector('#submitBtn').addEventListener('click', function () {
    var userinput = document.querySelector('#userinput');

    let string = userinput.value.trim().split(' ').sort();
    let counter = {};

    for (let i = 0; i < string.length; i++) {
        let key = string[i].toLowerCase();

        /** key lenght check if length is 0 continue */
        if (!key.length) continue;

        /** object prop check */
        if (!counter[key]) { counter[key] = 0; }
        counter[key] += 1;
    }
    console.log(counter);

    function showresult() {
        var result = document.getElementById('result');
        result.value = JSON.stringify(counter);
        console.log(result.value);

    }
    showresult();
});