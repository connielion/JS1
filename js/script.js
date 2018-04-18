/*

Now that all your users at this point are at least 18, ask if they are less than 80 years old.
Now ask the users who are between 18 and 80 if they like Star Wars. If they are over 80, ask if they like prunes.
If they say they don't Star Wars, end the program. In all other cases, alert them with a message.
*/

let birthday = prompt("What's your birthday?, (MM/DD/YYYY)");
var checkAge = birthday.getFullYear();
var age =  (2018-checkAge);
confirm("You're" + age + "?");

if (age >= 18 ) { //over 18
  confirm("Go ahead!");
} else if (checkAge < 18) { //minor
  alert("You're underage!");
} else if (checkAge >= 18) { //
  prompt('Are you less than 80 years old?');
} else if (checkAge >18 && checkAge <80) { // 18< age <80
 prompt('Do you like Star Wars?');
} else if (checkAge >= 80){
  prompt('Do you like prunes?');
} else {
  alert('Are you Darth Vader?!!!');
}










/* =========================================================================================================

Prompts your user for their name.
Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
Depending on the color, write 9 different responses for the possible answers. Include the user's name in the response message.
======================================================================

var askName = prompt('Your name is...?');
var askColor = prompt("Pick favorite color: red, orange, yellow, green, blue, pink, purple, black, white, and grey.").

switch {
  case 1:
  askColor === red;
  break;
  case 2:
  askColor === orange;
  break;
  case 3:
  askColor === yellow;
  break;
  case 4:
  askColor === green;
  break;
  case 5:
  askColor === blue;
  break;
  case 6:
  askColor === pink;
  break;
  case 7:
  askColor === purple;
  break;
  case 8:
  askColor === black;
  break;
  case 9:
  askColor === white;
  break;
}
*/
