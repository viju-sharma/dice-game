var random = Math.random();

var count = Math.floor(random*6+1);

if (count === 1){
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (count === 2 ) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (count === 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png")
}  else if (count === 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png")
}  else if (count === 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png")
}  else if (count===6){
  document.querySelector(".img1").setAttribute("src", "images/dice6.png")
}

var random2 = Math.random();

var count2 = Math.floor(random2*6+1);

if (count2 === 1){
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (count2 === 2 ) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (count2 === 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png")
}  else if (count2 === 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png")
}  else if (count2 === 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png")
}  else if (count2 === 6){
  document.querySelector(".img2").setAttribute("src", "images/dice6.png")
}

console.log(count, count2);
if (count2>count) {
  document.querySelector("#Refresh").innerHTML = "player 2 won";
} else if (count>count2){
  document.querySelector("#Refresh").innerHTML = "player 1 won";
} else {
  document.querySelector("#Refresh").innerHTML = "game is draw";
}
