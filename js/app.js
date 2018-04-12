/*

Write a program that:
1.Asks for the user's first name
2.Asks for the user's last name
3.Logs the user's first name to the console
4.Alerts the user's last name

5. *Confirms the user's birthday and alerts the resulting birthday
Include the app.js in an empty html page

Add it to a repository's gh-pages branch so I can test it
Send me the url of the gh-pages on Slack
*/

/* Date()
let bday = '03/08/95'
let rightNow = new Date(bday);

alert(rightNow);

*/


var FirstName = prompt("What is your first name?");

var LastName = prompt("What is your last name?");

var bDay = "My bday is March 8.";


console.log(FirstName);

alert(LastName);

confirm(bDay);

alert(bDay);
