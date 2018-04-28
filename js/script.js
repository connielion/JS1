let num = parseInt(prompt("Enter a number."));
let numSquare = num * num;

function square(num){

  if(!isNaN(num)){ //if user enters number

    alert(numSquare);
  }
  else{
    alert("Not a number!");
  }

}

square(num); //call function
