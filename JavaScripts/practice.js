var num2 = 60; //variable is defined globally

console.log(num2);

var num2 = 30;

console.log(num2);


let statement = "Welcome to Javascript";

console.log(statement);

const fixed = 70; 

console.log(fixed);

//Object syntax
let car = {speed:600, model: "BMW", colour:"pink"};
console.log(car);
console.log(car.model);

//Generate a random number
let randomNum = Math.random();
console.log(randomNum);

//DOM Object
window.alert("Hello fellow traveler");
//document.write("<label>DUMELA</label>"); 

//Arrays
let shopping = ["juice", "mince", 20, nailpolish = {brand: "Revlon", price: 50}];
console.log(shopping);
console.log(shopping[1]);

//Conditionals
//If statement
let RandomNumber = Math.floor(Math.random() + 20);
console.log(RandomNumber);

if (RandomNumumber < 20)
{
    console.log("Too LOw, Try Again");  
}
else if (RandomNumumber === 20)
{
    console.log("Equal");  
}
else
{
    console.log("Too High, Try Again");
}

//Switch statement
let day = "Christmas" ;

switch(day)
{
    case "Sunday" : console.log("Happy Sunday");
    break;
    case "Monday" : console.log("Try to keep your head up");
    break;
    default: console.log("It must be a special day");
}


//Functions
function getRandomNum()
{
    let random = Math.floor(Math.random() * 10);
    console.log(random);
}

// call function
getRandomNum();

function getRandomNumTwo(num)
{
    let random = Math.floor(Math.random() * num);
    console.log(random);
}

getRandomNum(200);

function getRandomNumThree()
{
    let random = Math.floor(Math.random() * 10);
    return random;
}

console.log(getRandomNumThree);