let myStatus = prompt("Are you sleepy? (Enter: Yes/No; not case sensitive)");

if (myStatus === "Y" || myStatus === "y" || myStatus === "yes" || myStatus === "Yes") {
      let fizzbuzz = prompt("Were you trying to solve the FizzBuzz?")

      if (fizzbuzz == "yes" || fizzbuzz == "Yes") {
          alert("Nice!")

      }
      else {
        alert("Oh, ok.")
      }

} else if (myStatus === "N" || myStatus === "n" || myStatus === "no" || myStatus === "No" ) {
    let movie = confirm("Wanna watch a movie?")
    if (movie === true) {
      alert("You go pick the movie. I'll make popcorns!")
    }
    else {
      prompt("What would you like to do? ")
    }
}
else {
  alert("Go do some coding!");
};
