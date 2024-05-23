// practice question 1

// for(let i=0;i<=100;i++){
//     if(i%2===0)
//     console.log(i)
// }


// practice question 2

let gameNum = 25;
let userNum = prompt("Guess a Number");

while(userNum != gameNum) {
    userNum = prompt("Wrong Answer, Guess Again");
}
console.log("Wohooo! ,You Guessed it right")


