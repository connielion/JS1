var myStatus = prompt("Are you sleepy? (Enter: Y/N; not case sensitive)");

if (myStatus === "Y" || myStatus === "y") {
  alert("Go to bed.")

} else if (myStatus === "N" || myStatus === "n") {
    let movie = confirm("Wanna watch a movie?")
    if (movie === true) {
      alert("You go pick the movie. I'll make popcorns!")
    }
    else {
      prompt("What would you like to do?")
    }
}
else {
  alert("Go count sheep!");
};










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
