//LOGIC AND CONTROL FLOW

//1) If Statements
//2)Truthy/Falsy Values
//3)Switch Statements
//4)Ternary Operator

//If Statements

const age2=18;

if(age2 > 18){
    console.log('You may enter!');
}else if(age2===18){
    console.log('You just turned 18, welcome!');
}
else{
    console.log('Grow Up!');
}

//The "While" loop
//A single execution of a loop body is called iteration
let i=0;

while(i<3){
    console.log(i);
    i++;
}

//The "For" loop

//for([initialisation];[condition];[final-expression]){ //block of code };

for(let i=0;i<3;i++){
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