
function bgChange() {
    let selectedBGColor = document.getElementById("bgselect").value;
    document.body.style.backgroundColor = selectedBGColor;
  }

const userNameValue = document.getElementById('userName');
const userNameResult = document.getElementById('nameResult');
function clickOnButton() {
    const valueInput = userNameValue.value
userNameResult.value = (`Привет, ${valueInput}!`);
setTimeout(() => userNameResult.value = "", 3000);
userNameValue.value = '';
    }    

const a = document.getElementById('numberFirst');
const b = document.getElementById('numberSecond');
const resultOutput = document.getElementById('result');

function calcSum() {

const valueInput1 = a.value
const valueInput2 = b.value
resultOutput.value = (+valueInput1 + +valueInput2);
setTimeout(() => resultOutput.value = "", 2000);
a.value = '';
b.value = '';
    }

function calcMin() {
const valueInput1 = a.value
const valueInput2 = b.value
resultOutput.value = (valueInput1 - valueInput2);
setTimeout(() => resultOutput.value = "", 2000);
a.value = '';
b.value = '';
}
function calcDiv() {
    const valueInput1 = a.value
    const valueInput2 = b.value
    if (valueInput2 =="0") {
        resultOutput.value = ('ERROR!');
        alert ('На ноль делить нельзя!')
        setTimeout(() => resultOutput.value = "", 2000);
        a.value = '';
        b.value = '';

    }
    else{
        resultOutput.value = (valueInput1 / valueInput2);
    a.value = '';
    b.value = '';}
    }
    function calcMult() {
        const valueInput1 = a.value
        const valueInput2 = b.value
        resultOutput.value = (valueInput1 * valueInput2);
        setTimeout(() => resultOutput.value = "", 2000);
        a.value = '';
        b.value = '';
        }

    // let colorChange = document.getElementById('calculator'); 
    //    function clickToChange(){
    //     colorChange.style.background = 'red';
    //    }
      


// let changeTheme = document.getElementById('changeTheme');
// let changeBackgroundColor = document.body.style.background;
// function changeColors(){
//           switch (changeTheme.value){
//              case 'blue':
//                 changeBackgroundColor.value = changeTheme.value;
//              break;
//               case 'white':
//                 changeBackgroundColor.value = changeTheme.value;
//               break;
//              case 'green':
//                 changeBackgroundColor.value = changeTheme.value;
//               break;
//          }}


        //  let changeTheme = document.getElementById('changeTheme');
        //  let changeBackgroundColor = document.getElementById('changeBackgroundColor');
        //  function changeColors(){
        //            switch (changeTheme.value){
        //              case 'blue':
        //                 document.getElementById('changeBackgroundColor').style.backgroundColor = 'blue';
        //               break;
        //              case 'white':
        //                 document.getElementById('changeBackgroundColor').style.backgroundColor = 'white';
        //              break;
        //              case 'green':
        //                 document.getElementById('changeBackgroundColor').style.backgroundColor = 'green';
        //             break;
        //        }}

