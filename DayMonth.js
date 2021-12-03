var prompt = require('prompt-sync')();

let date =prompt("Enter date: ");
let Month =prompt("Enter month: ");
date=parseInt(date); //this function convert to string to integer
Month=parseInt(Month); //this function convert to string to integer
if ( date <= 20 && Month == 'march' && Month == 'april' && Month == 'may' && Month == 'june' )
{ 
     console.log("the $Month and $date is true");
}    
else
{
    console.log("false");
}