const playerNum = Math.floor (Math.random() * 6) + 1;
console.log("Player's number: " + playerNum);

const cpuNum = Math.floor (Math.random() * 6) + 1;
console.log("CPU's number: " + cpuNum);

if (playerNum > cpuNum) {
    console.log("Player win! Humanity safe!");
} else if (playerNum < cpuNum) {
    console.log("Computer win! Humanity doomed!");
} else {
    console.log("Draw! Dang it!");
}