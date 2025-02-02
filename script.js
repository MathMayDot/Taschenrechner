/* JavaScript Datei - script.js */
"use strict";

function appendOperation(operation) {
    document.getElementById('resultArea').innerHTML += operation;
}

function calculateResult(){
    const displayElement = document.getElementById('resultArea');
    const mathExpression = displayElement.innerHTML;

    try {
        if(mathExpression === ""){
            displayElement.innerHTML = "0";
            return;
        }
    
    const calculateResult = math.evaluate(mathExpression);

        if(calculateResult === Infinity){
            displayElement.innerHTML = "Teilen durch 0 nicht möglich";
            return;
        }
    displayElement.innerHTML = calculateResult;

        } catch(error) {
        displayElement.innerHTML = "Math error"
        }
}

function deleteAll(){
    const deleteAll = document.getElementById('resultArea');
    deleteAll.innerHTML = '';
}

function deleteLast(){
    const deleteLast = document.getElementById('resultArea');
    deleteLast.innerHTML = deleteLast.innerHTML.slice(0, -1);
}