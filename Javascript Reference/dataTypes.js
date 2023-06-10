console.log("hello, World!");

/*Data Types are of two types in broader horizon
1)Primitive data type:
 a)Strings  ("hello")
 b)Numbers  (2,3,4)
 c)Booleans  (true,false)
 d)Null (null)
 e)Undefined  (undefined)
 f)Symbol
2)Complex data type
 a)Object
*/

/*=============COMMENTS=================*/

/*They are of two types 
1) Single line 

//This is a Singleline comment

2) Multi line

/*
This
is
a
multi
line
comment
 */


//STRINGS
const exampleString = 'Hello, World!';

console.log(exampleString);

//In JavaScript strings are of 3 types

//1) Single Quote
const singleQuotes='Hello!';

console.log(singleQuotes);

//2) Double Quotes

const doubleQuotes="Hello!!";

console.log(doubleQuotes);

//3) Back Ticks

const name='Jane';
const backTicks=`hello,${name}`;

console.log(backTicks);

//using JS code in backticks

console.log(`${2+2}`);

//using typeof function

console.log(typeof(backTicks));

//Numbers
//JS is untype (Number type is not needed to be specified)

const firstNumber=5;
const secondNumber=10;

const result=firstNumber/secondNumber;

console.log(result);

//NaN stands for Not a Number 
//It has a typeof as number

const result1=name/secondNumber;

console.log(result1);
//=> NaN
console.log(typeof(result1));
//=>number

//Booleans

//true- 1
//false-0

const isCool=true;
if(isCool){
    console.log("Hi, you are cool!");
}
else{
    console.log('Oh, hi...')
}

const age=20;
console.log(age>18);

//Null
//It can be considered as an "Empty Box"
//This indicates that the variable is empty i.e. value is assigned as null

//typeof of null is object...why? is'nt it a primitive datatype, it must be null itself?
//Backstage=>it was a bug in JS, left untouched to prevent collapse of prebuild program after it's knowledge 

console.log(typeof null)//=>object

let age1=null;
console.log(age1)//=>null

age1=22;
console.log(age1);//=>22

//Undefined
//Value is not assigned to the variable

console.log(typeof undefined);//=>undefined

let x;
console.log(x);//=>undefined

//Object

const person={
    name:'Aditya',
    age:19
}
console.log(person);//=>{name:'Aditya',age:19}

//Dot notation
console.log(person.name);//=>Adiya
console.log(typeof person.name);//=>string

//Array : Type of Object

const arr=[1,2,3,4];
console.log(typeof arr);//=>Object
console.log(arr);//=>[1,2,3,4]

//Date Object

const date=new Date();
console.log(typeof date);//=>Object
console.log(date);

//Programming languages can be :
//1)Statically typed(Data type can not be changed after declaration)
//e.g. C, C++, Java
//2)Dynamically typed(no declaration required)
//e.g. "JavaScript", python

let message='Hello, World!';
console.log(typeof message);//=>String

message=5;
console.log(typeof message);//=>number


