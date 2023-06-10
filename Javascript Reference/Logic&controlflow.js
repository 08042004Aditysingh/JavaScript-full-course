//LOGIC AND CONTROL FLOW

//1) If Statements
//2)Truthy/Falsy Values
//3)Switch Statements
//4)Ternary Operator

//If Statements

const age2 = 18;

if (age2 > 18) {
    console.log('You may enter!');
} else if (age2 === 18) {
    console.log('You just turned 18, welcome!');
}
else {
    console.log('Grow Up!');
}

//The "While" loop
//A single execution of a loop body is called iteration
let i = 0;

while (i < 3) {
    console.log(i);
    i++;
}

//The "For" loop

//for([initialisation];[condition];[final-expression]){ //block of code };

for (let i = 0; i < 3; i++) {
    console.log(i);
}


//DRY 
//Don't
//repeat
//yourself

//never write dry code
/*
console.log(0);
console.log(1);
console.log(2); 
console.log(3);
console.log(4);
console.log(5);
console.log(6);
*/

//Ternary Operator

// {[condition]?[execution for true]:[execution for false]};

{ 2 > 1 ? console.log('Hello!') : console.log('Hola!') };

//Switch Statements

//getDay() method returns the weekdays as number between 0 to 6

switch (new Date().getDay()) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
        break;
}
console.log(day);

