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
  alert("Go do some coding!");
};
