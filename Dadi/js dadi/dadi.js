const playerNum = Math.floor (Math.random() * 6) + 1;
const cpuNum = Math.floor (Math.random() * 6) + 1;
console.log("CPU's number: " + cpuNum + ", " + "Player's number: " + playerNum);

if (playerNum > cpuNum) {
    message = "Player win! Humanity safe!";
} else if (playerNum < cpuNum) {
    message = "Computer win! Humanity doomed!";
} else {
    message = "Draw! Dang it!";
}
console.log(message)
