var prompt = require('prompt-sync')();
//2. find leap year or not
let inputYear=prompt('Enter a Year: ');
let conditionFirst=inputYear%4;
let conditionTwo=inputYear%400;
let conditionThird=inputYear%100; 
if(conditionTwo==0)
{
    console.log(inputYear+ " Year is Leap Year");
}
else if (conditionFirst == 0 && conditionThird != 0)
{
    console.log(inputYear+ " Year is Leap Year");
}
else
{
    console.log(inputYear+ " Year is Not Leap Year");

}