/*

Prompts your user for their name.
Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
Depending on the color, write 9 different responses for the possible answers. Include the user's name in the response message.
*/

var askName = prompt("Comó se llama?");

var askColor = prompt("Cuál es tu color favorito? (LOWERCASE ONLY: red, orange, yellow, green, blue, pink, purple, black, white, and grey)");

switch(askColor) {
  case 'red':
  case 'orange':
  case 'purple':
  case 'pink':
  alert("Eww, " + askColor + "! You know what? You suck, " + askName + "!");
  break;

  case 'blue':
  case 'yellow':
  alert(`Hey, ${askName}! It's my favorite color too!`);
  break;

  case 'white':
  case 'black':
  case 'grey':
  alert('You are boring.');
  break;

  default:
  alert("YOU CAN'T ENGLISH?! ")

}
