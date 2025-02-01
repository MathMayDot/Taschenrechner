/* JavaScript Datei - script.js */
"use strict";

function appendOperation(operation) {
    document.getElementById('resultArea').innerHTML += operation;
}

function calculateResult(){
    const calculateResult = document.getElementById('resultArea');
    const result = eval(calculateResult.innerHTML);
    calculateResult.innerHTML = result;
}

function deleteAll(){
    const deleteAll = document.getElementById('resultArea');
    deleteAll.innerHTML = '';
}

function deleteLast(){
    const deleteLast = document.getElementById('resultArea');
    deleteLast.innerHTML = deleteLast.innerHTML.slice(0, -1);
}