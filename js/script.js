/*
let num = parseInt(prompt("Enter a number."));

let numSquare = num * num;

function square(num){

  if(!isNaN(num)){ //if user enters number

    alert(`Square of that number is ${numSquare}`);
  }
  else{
    alert("Not a number!");
  }

}

square(num); //call function
*/

In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.*/


let str = prompt("Enter a sentence, all lowercased and no period.");

function check(string) {


/*
CHECKS:

str.charAt(0) !== str.charAt(0).toLowerCase()   //<---first char isn't lowercased

str.slice(-1) !== "."      //<--last char isn't a period

(str.charAt(0) !== str.charAt(0).toLowerCase()) && (str.slice(-1) == ".") <---capitalized AND last char is '.'
*/

//check case, period


let str = prompt("Enter a word or sentence without capitalization and period at the end.")

function check(){


    if((str.charAt(0) === str.charAt(0).toUpperCase()) && (str.slice(-1) !== ".")) {

      //first: is uppercase; last is not "."
      return alert((str.slice(0)) + ".");

    } else if ((str.charAt(0) == str.charAt(0).toLowerCase()) && (str.slice(-1) !== ".")){
        //not capitalized and no period
      return alert(str.charAt(0).toUpperCase() + str.slice(1) + ".");

    } else if ((str.charAt(0) !== str.charAt(0).toUpperCase()) && (str.slice(-1) !== ".")){

      return alert((str.charAt(0).toUpperCase()) + (str.slice(1)) + ".");
    }
    else if ((str.charAt(0) !== str.charAt(0).toUpperCase()) && (str.slice(-1) == ".")){
      return alert((str.charAt(0).toUpperCase()) + str.slice(1));
    } else
    {
      alert("Nice English.");
    }

  }


check();  //function call


/*
//PALINDROME function
let string = prompt("Enter a word!");





function palindrome(string) {

let length = string.length;

  for (let i = 0; i < Math.floor(length/2); i++)
  {
    let k = string[string.length-1-i];

    if(string[i] !== string[k])
    {
      return alert("This is NOT a palindrome! Do you even know what that is?");
    }
    else{
      return alert("*LE GASP* This word's spelled the same either direction! IT'S A PALINDROME!");
    }

  }

}

palindrome(string);
