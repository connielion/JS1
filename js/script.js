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
      task: task3
      time: time3
    }
];

console.log(todo[0].task, todo[0].time);

var length = todo.length;
var days = []

for (let i = 0; i < todo.length, i++){ //loops once for each task
  let askTime = prompt("What day do you want to complete this task?");
  todo[i].time = askTime;

}


while () {
  console.log(task);
}
