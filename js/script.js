const body = document.querySelector('body');



for (let i = 1; i <=100; i++) {


  if (i % 15 === 0) {
    //multiples of 3 and 5
    console.log("Fizzbuzz");
  }
  else if (i % 3 === 0){
    //multiple of 3
    p.textContent = "Fizz";

  }
  else if (i % 5 === 0){
    //multiples of 5
    p.textContent = "Buzz";
  }
  else {
    p.textContent = i;
  }
body.appendChild(p); //appending child to body
}
