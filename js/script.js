/*

Prompts your user for their name.
Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
Depending on the color, write 9 different responses for the possible answers. Include the user's name in the response message.


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
*/

/*
Creates an array of things you need or want to do this weekend by collecting three todos from the user.
Using a for loop, change the items in the array by adding days they should be completed to each index.
Using a while loop, find the task that will take the longest and log it to the console.
Using a do while loop, add the string 'done' to all the tasks other than the one that will take the longest
Finally, alert all the tasks that are marked done in the todo array.
*/
var task1 = prompt("First thing you want to do this weekend is...? (Put in a task that will take the longest.");
var task2 = prompt("Second thing you want to do this weekend is...?");
var task3 = prompt("Third thing you want to do this weekend is...)?");


let todo = [
    { //objects
      task: task1,
      time: time1,
      task: task2,
      time: time2,
      task: task3,
      time: time3
    }
];

console.log(todo[0].task, todo[0].time);

let length = todo.length;


for (let i = 0; i < length; i++){ //loops once for each task
  let askTime = prompt("When would you like to complete this task?");
  todo[i].time = askTime;

}
