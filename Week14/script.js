let userNameValue = document.getElementsByClassName('userName');
let userNameResult = document.getElementsByClassName('nameResult');
function clickOnButton() {
userNameResult.value = (`Привет, ${userNameValue.value}`);
    }    

        





function calcSum(){
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b);
}
function calcMin(){
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(a - b);
}

function calcDiv(){
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(a / b);
}

function calcMult(){
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(a * b);
}


