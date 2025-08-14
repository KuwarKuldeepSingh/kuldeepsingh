let gameNum = 25;
let userNum = prompt("guess the game number:");
while(userNum !== gameNum){
  userNum = prompt("you enter wrong number , Again enter the number : ");
  console.log("congratulation you can enter the right number");
}
