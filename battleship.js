//hold location of ship
var location1 = 3;
var  location2 = 4;
var location3 = 5;

var guess; //hold user's guess
var hits = 0; //holds number of hits
var guesses = 0; //holds number of guesses

var isSunk = false // holds current status of the ship

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (Enter a guess from 0 to 6):")
    if ((guess > 6) || (guess < 0)){
        alert("Please enter a valid cell number!")
    } else {
        guesses = guesses + 1
    }

    if (guess == location1) {
        hits = hits + 1
        alert("Hit!")
    } else if (guess == location2) {
        hits = hits + 1
        alert("Hit")
    } else if (guess == location3) {
        hits = hits + 1
        alert("Hit!")
    } else {
        alert("Miss!)")
    }
    if (hits == 3) {
        isSunk = true
        alert("You sank my battleship!")
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, which means your shooting accuracy is " + (3/guesses)
    alert(stats)

