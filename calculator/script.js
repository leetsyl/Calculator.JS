const operators = ['*', '+', '-', '/'];

var firstNumber = true;

var btn = document.getElementsByClassName("btn-num");
var box = document.getElementById("ipt-num");

function buttonNumber(button) {
    if (!(operators.includes(button))) {
        if (firstNumber) {
            box.value = button;
            console.log(button);
            
            firstNumber = false;
        
        } else {
            box.value = box.value + button;
        }
        
    }
};

function allClear() {
    box.value = "";
}

