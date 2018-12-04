'use strict';

function clickas(buttonValue) {
    if (buttonValue == 'C') {
        document.getElementById('values').value = '0';
    }
    else {
        if (document.getElementById('values').value == '0') {

            document.getElementById('values').value = buttonValue;
        }

        else {

            document.getElementById('values').value += buttonValue;
        }
    }
}

function suma(equation) {
    var answer = eval(equation);
    document.getElementById('values').value = answer;
}