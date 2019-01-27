//M.S. Crosson    //prog10_formInputMath.js
//27 JAN 2019     //JSIntern

/* These are the functions that go with the HTML page 
prog10_formInputMath.html                            */

function multiplyEm() {
    var num1 = document.getElementById('input_num1').value //gets first number from form
    var num2 = document.getElementById('input_num2').value //gets second number from form
    document.getElementById('result').innerHTML = "The result is: " + "<br>" + num1*num2; //produces result
  }


function divideEm() {
    var num1 = document.getElementById('input_num1').value //gets first number from form
    var num2 = document.getElementById('input_num2').value //gets second number from form
    document.getElementById('result').innerHTML = "The result is: " + "<br>" + num1/num2; //produces result
  }
