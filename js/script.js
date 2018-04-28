/* let num = parseInt(prompt("Enter a number."));
let numSquare = num * num;

function square(num){

  if(!isNaN(num)){ //if user enters number

    alert(numSquare);
  }
  else{
    alert("Not a number!");
  }

}

square(num); //call function*/

/*
In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.*/


let str = prompt("Enter a sentence, all lowercased and no period.");

function check(string) {
/*  CHECKS
str.charAt(0) !== str.charAt(0).toLowerCase()   <---first char isn't lowercased
str.slice(-1) !== "."      <--last char isn't a period
(str.charAt(0) !== str.charAt(0).toLowerCase()) && (str.slice(-1) == ".") <=capitalized AND last char is '.'
*/

return;

}

check();  //function call
