var prompt = require('prompt-sync')();
//5.Read a single digit num and write number in word
let singleDigitNum=prompt('Enter a single digit number: ');
switch(singleDigitNum)
{
    case 1:
        console.log("Its One");
        break;
    case 2:
        console.log("Its Two");
        break;
    case 3:
        console.log("Its Three");
        break;
    case 4:
        console.log("Its Four");
        break;
    case 5:
        console.log("Its Five");
        break;
    case 6:
        console.log("Its Six");
        break;
    case 7:
        console.log("Its Seven");
        break;
    case 8:
        console.log("Its Eight");
        break;
    case 9:
        console.log("Its Nine");
        break;
    case 0:
        console.log("Its Zero");
        break;
    default:
        console.log("Please enter a single digit number");

}
