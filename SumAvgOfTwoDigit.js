//4.Use Script & Debug – Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
let sumOfRandomFiveNum=0; //here declare variables
for(let i=1;i<=5;i++)
{
    let randomTwoDigitNum=Math.floor(Math.random()*89)+10;//two digit element get here and converting random function
    console.log("Random Num: "+randomTwoDigitNum);
    sumOfRandomFiveNum+=randomTwoDigitNum;
}
console.log("Sum Of Random Two Digit Five Number is "+sumOfRandomFiveNum);