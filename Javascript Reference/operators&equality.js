//Comparison Operators => returns true/false

const a=10;
const b=9;

//Greater than
console.log(a>b);//=>true
//Less than
console.log(a<b);//=>false
//Greater than or equal to
console.log(a>=b);//=>true
//Less than or equal to
console.log(a<=b);//=>false
//Is equal
console.log(a==b);//=>false
//Not equal
console.log(a!=b);//=>true
//Strict Equality
console.log(a===b);//=>false
//Strict Inequality
console.log(a!==b);//=>true

//Strict Equality
//compares VALUES and DATA TYPES
//returns true only if both are same
console.log(10==='10');//=>false

//Loose Equality
//Does'nt compares DATA TYPES
console.log(10=='10');//=>true

//Douglas Crockford in his book ,Javascript:The good parts have written javasscript has two types of equality operator
//The Good Ones: === !==
//The Evil Twins: ==  !=

console.log(true==1);//=>True
console.log(true===1);//=>False

//Evil twins are unpredictable ,hence always use === or !== instead

//Logical Operators
//AND && =>All components are true =>TRUE
console.log(true && false && true);//=> false
//OR || =>At least one operand is true => TRUE
console.log(true||false||true);//=>true
//NOT ! 
console.log(!false);//=>true

 


