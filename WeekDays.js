var prompt = require('prompt-sync')();
//4. read a number and display weekday (sunday, monday......)
console.log("WeekDay Number Between 1 to 7");
let day=prompt('Enter a Number : ');
if(day==1)
{
    console.log("Its Sunday");
}
else if(day==2)
{
    console.log("Its Monday");
}
else if(day==3)
{
    console.log("Its Tuesday");
}
else if(day==4)
{
    console.log("Its Wednesday");
}
else if(day==5)
{
    console.log("Its Thursday");
}
else if(day==6)
{
    console.log("Its Friday");
}
else if(day==7)
{
    console.log("Its Saturday");
}
else
{
    console.log("Enter Number Between 1 to 7");
}
