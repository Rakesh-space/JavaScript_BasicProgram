var val=0; val="foo"
var datatype=typeof val; datatype="function"
console.log(datatype);

var val=10n; val="foo" 
var datatype=typeof val; datatype="function"
console.log(datatype);

var val=true; val="foo" 
var datatype=typeof val; datatype="function"
console.log(datatype);

var val="foo"; val="foo"
var datatype=typeof val;  datatype="function"
console.log(datatype);

var datatype=typeof Symbol("id"); datatype="function"
console.log(datatype);

var datatype=typeof Math;
console.log(datatype);

var datatype=typeof null;
console.log(datatype);

let sayHi=function()
{
    sayHi=f()
    console.log.apply("Say Hi");
};

var datatype=typeof sayHi; datatype="function",sayHi;
console.log(datatype);

