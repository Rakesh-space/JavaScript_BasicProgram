var prompt = require('prompt-sync')();
//3. Write a program to simulate a coin flip and print out HEADS & TAILS
let flipCoin=prompt('Enter "F" For Flipping Coin: ');
let coinOutput=Math.floor(Math.random()*2);
if(coinOutput==0)
{
    console.log("Its HEADS");
}
else
{
    console.log("Its TAILS");
}