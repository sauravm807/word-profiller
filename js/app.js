"use strict";
let isShowInputDiv = true;
function init() {
    setRandomBodyColor();
    toggleInputOutputDiv();
}

document.querySelector('#submitBtn').addEventListener('click', function () {
    setRandomBodyColor();
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
    toggleInputOutputDiv();
});

function setRandomBodyColor() {
    let r = Math.floor(Math.random() * (230 - 130) + 130);
    let g = Math.floor(Math.random() * (230 - 130) + 130);
    let b = Math.floor(Math.random() * (230 - 130) + 130);
    let newColor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = newColor;
}

function showInputDiv() {
    document.querySelector('#inputDiv').style.display = 'block';
    document.querySelector('#outputDiv').style.display = 'none';
}
function showOutputDiv() {
    document.querySelector('#inputDiv').style.display = 'none';
    document.querySelector('#outputDiv').style.display = 'block';
}

function toggleInputOutputDiv() {
    if(isShowInputDiv) {
        showInputDiv();
    }
    if(!isShowInputDiv) {
        showOutputDiv();
    }
    isShowInputDiv = !isShowInputDiv;
}

document.querySelector('#backBtn').addEventListener('click', function () {
    toggleInputOutputDiv();
});