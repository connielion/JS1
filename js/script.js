/*
Creates an array of things you need or want to do this weekend by collecting three todos from the user.
Using a for loop, change the items in the array by adding days they should be completed to each index.
Using a while loop, find the task that will take the longest and log it to the console.
Using a do while loop, add the string 'done' to all the tasks other than the one that will take the longest
Finally, alert all the tasks that are marked done in the todo array.
*/
var task1 = [prompt("First thing you want to do this weekend is...? (Put in a task that will take the longest.")];
var task2 = [prompt("Second thing you want to do this weekend is...?")];
var task3 = [prompt("Third thing you want to do this weekend is...)?")];
//check if input is null -- edge casing
todo.push =(task1, task2, task3);

var time1 = [prompt('How long will it take you to do task 1?(The most time-consuming task)')];
var time2 = [prompt('How long will it take you to do task 2?')];
var time3 = [prompt('How long will it take you to do task 3?')];


/*

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
*/

console.log(todo[0].task, todo[0].time);

let length = todo.length;

for (let i = 0; i < length; i++){ //loops once for each task
  /*let askTime = prompt("When would you like to complete this ?");
  todo[i].time = askTime;*/
  let time = prompt(`How long would it take you to complete ${todo[i][0]}`, "2");

  time = !isNaN(parseInt(time));

  parseInt(time) : 2;

  todo[i].unshift(time);

}




let longest;
let j = 0;
todo.sort();

while (j<todo.length) {

  longest = todo[j][0] >longest[0] ?longest = todo[j] : longest = longest; //ternary version
  console.log(todo[j][1]);
  j++;
}

console.log(longest);



do {

  if(todo[k][todo[k].length-1] !=="this"){
  todo[k].push("done");
  }
//k++;
} while (let k=0; k !=== longest; k++)

longest.push('this is the longest');
