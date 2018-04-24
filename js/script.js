/*let emailArr;
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

*/


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


//Ternary Operator = short-hand for If-Else

// condition ? exp 1 : exp2
/* let age = prompt("your age?")

(parseInt(age))>=18 ? alert("Yay") : alert("Nay")

*/

let cars = ["jeep", "subaru", "honda"];
//cars.length --> 3
//cars.push("bmw") adds bmw to the end

// splice(index #, # of items you want to remove, "new item")

//splice needs 1 parameter


//slice() with no argument returns exact copy of array


/*
let shoppingList = [];

let item1="bleach";
let item2="cheese";
let item3="crackas"
let item4="wine";

shoppingList.push(item1, item2, item3, item4);

//console.log(shoppingList);

//NESTED ARRAYS

let a = ["A", '1'];
let b = ["B", "b"];
let array =[a, b];

//To access '1' from array a, console.log(array[0][1]);
*/


let m1=["The Lion King", "Simba", "1995"];
let m2=["Mulan", "mulan",
"2000"];
let m3=["Thor", "thor", "2011"];
let m4=["Captain America", "Steve", "1989"];
let m5=["MazeRunner", "Thomas", "2013"];

let favoriteMovies=[];

favoriteMovies.push(m1,m2,m3,m4,m5);

let title=[m1[0],m2[0],m3[0],m4[0], m5[0]];

alert(title);

let fave = [m1[0],m5[0]];


let length = favoriteMovies.length;

alert(length);

let i = 0;

for(i=0;i<length;i++){

if(favoriteMovies[i][0] === "The Lion King"){

  alert(`${favoriteMovies[i][1]} is my fav movie and it was made in ${favoriteMovies[i][2]}`);

} else if(favoriteMovies[i][0] === "Mulan") {

  alert(`${favoriteMovies[i][1]} is my fav movie and it was made in ${favoriteMovies[i][2]}`);

} else if(favoriteMovies[i][0] === "Thor") {

  alert(`${favoriteMovies[i][1]} is my fav movie and it was made in ${favoriteMovies[i][2]}`);

} else if(favoriteMovies[i][0] === "Captain America") {

  alert(`${favoriteMovies[i][1]} is my fav movie and it was made in ${favoriteMovies[i][2]}`);

} else if(favoriteMovies[i][0] === "MazeRunner") {

  alert(`${favoriteMovies[i][1]} is my fav movie and it was made in ${favoriteMovies[i][2]}`);

} else {
  alert("TYPO!!!");
}


  alert(favoriteMovies[0][0],favoriteMovies[0][1]);//just titles

}
