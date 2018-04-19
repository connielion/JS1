let emailArr;
var yourEmail;

while (true) {
  //evaluates the truthyness of 'true'
  var yourEmail = prompt('What is your email?');
  emailArr = yourEmail.split("");
  if (!(emailArr.includes('@'))) {
    var yourEmail = prompt('That was not a valid email. Please try again.');
  }
  else if (!(emailArr.includes('.'))) {
    var yourEmail = prompt('That was not a valid email. Please try again.');
  }
  else {
    alert('Thanks for providing a valid email.');
  }
}


//SWITCH STATEMENT - evaluates single parameter

/*

var numOfProjects = prompt(“How many projects do you have? You can choose a number 0-2.“);

switch(parseInt(numOfProjects)) {
 case 0:
     alert(“You won’t have a projects section on your page”);
     break;
    case 1:
     alert(“You’ll only have one showing”);
     break;
    case 2:
   alert(“You’ll only have one showing”);
        break;
 default:
   alert(’You didn\‘t follow the rules.’);
}
*/


Ternary Operator = short-hand for If-Else

// condition ? exp 1 : exp2
let age = prompt("your age?")

(parseInt(age))>=18 ? alert("Yay") : alert("Nay")
