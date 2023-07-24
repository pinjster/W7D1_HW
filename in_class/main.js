// Test connection
console.log('Hello World')

// Declare variable, let, const, var
var firstName;
firstName = 'sean';
var lastName = 'currie';

// bad practice redeclare variable with var
// var firstName = 1;

//let / when updating value

let counter = 0;
counter += 1 ;
counter ++;

// const / constant variable , doesn't and cannot change
const fullName = 'Dylan Smith';
/* 
multi-line comment 
DONT REDECLARE VARIABLE  TYPES
SEMICOLONS ARE OPTIONAL
*/

console.log('Hello World'); console.log('Hello World'); 

//Strings
const string1 = "This is a string";
let string2;
string2 = "Here's another one";
const string3 = 'This is Sean\'s string';

const joinedString = string1 + ' added at end';
const joinedString2 = string1 + ' ' + string2;
console.log(joinedString);
console.log(joinedString2);

//indexing into string
console.log(joinedString2[1]);
console.log(joinedString.charAt(0));
//lower/upper casing
console.log(joinedString.toUpperCase());
console.log(joinedString.toLowerCase());

//slicing
console.log(joinedString2.slice(0, 4));
console.log(string2.substring(0, 4));
console.log(string1.slice(-6));
console.log(string1.slice(-6, -1));
console.log(fullName.replace('Smith', 'Cervantes'));
const marriedName = fullName.replace('Smith', 'Cervantes');

// Template Literals / formatted string ` `
const congrats = `Congrats on the marriage, ${marriedName}`;
console.log(congrats);

// length of string
console.log(fullName.length);
console.log(fullName[fullName.length - 1]);

console.log(typeof fullName);
console.log(typeof 1);

console.log(typeof [1,2,3]);

//Numeric type / type: number (for int and float) 
let number1 = 1;
let aFloat = 3.1415;

console.log(typeof aFloat);
console.log(Math.ceil(11/2));
console.log(Math.floor(11/2));
console.log(5 ** 2);
console.log(11 % 2);
// number1 ++ increments number
// ++number1 does not update number

//Type conversion
let strnum = number1.toString();
console.log(strnum);
console.log(parseInt(strnum));
console.log(parseFloat('12.9'));

console.log('10' + 10);
console.log(parseInt('10') + 10);

//Bool types
const bool1 = true;
console.log(typeof bool1);

console.log(5 > 3);
console.log(6 < 5);
console.log(5 >= 1);
console.log(5 <= 1);
console.log(10 == 10);
console.log(10 == '10');
console.log(10 === '10');
console.log(10 === 10);

console.log(!(10 < 11));
console.log((11 !== 11));
console.log(!false);

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(2));
//empty array will return true bool
//undefined and null both return false

console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false || true);

let nullString = null; //represents nothing
// let newStr is undefined

// Arrays 
let studentArray = ['ben', 'sima', 'michael', 'christian'];
console.log(studentArray);
console.log(Array.isArray(studentArray));
console.log(studentArray[1]);
console.log(studentArray.length);

const musicians = []; //const can have items added and removed because we aren't changing the value of array object

musicians.push('bob dylan');
musicians.push('neil young');

console.log(musicians);
musicians.push('j. cole', 'lil wayne');
console.log(musicians);

let removeArtist = musicians.pop();

console.log(musicians);

let [bd, ny, jc] = musicians;

console.log(bd, ny);
console.log(musicians);

let [bd2, , jc2] = musicians;

let [ben, ...restOfStudents] = studentArray;

console.log(ben, restOfStudents);

studentArray.unshift('david');
console.log(studentArray);
studentArray.shift()
console.log(studentArray);

console.log(studentArray.indexOf('ben'));
console.log(studentArray.indexOf('jojo'));

studentArray.push('david', 'tajay');

//Arrow function
// () => {};

(num1, num2) => {return num1 + num2};
const myArrow = (num1, num2) => {
    return num1 + num2;
};
console.log(myArrow(1,2))

console.log(studentArray.map((student)=> student.toUpperCase()));
console.log(studentArray);
console.log(studentArray.filter((student)=> student[student.length - 1] !== 'n'));

let matrixStr = studentArray.reduce((acc, student) => acc + `${student}`) + " welocome to JS week";
console.log(matrixStr);

console.log(studentArray.toString());

const joinedStudents = studentArray.join(', ');
console.log(joinedStudents);

console.log(studentArray.slice(0,2));
console.log(studentArray.slice(2));
console.log(studentArray.slice(3, 10000));

console.log(musicians);
let removedArtists = musicians.splice(1,2,'the beatles', 'queen', 'lil wayne');
console.log(musicians);
console.log(removedArtists);

musicians.splice(3);
console.log(musicians);

//In-class exercise 1:
/* 
make array of favorite foods.
add fried tarantulas.
then add "Mokh Mchermel" to front.
use slice of modified array, print original list.
*/
let favFoods = ['oats', 'grilled cheese', 'caniac combo'];
favFoods.push('fried tarantulas');
console.log(favFoods);
favFoods.unshift('Mokh Mchmermel');
console.log(favFoods);
console.log(favFoods.slice(1,4));


// hoisting / calling a function before it is defined
console.log(addNums(100, 1907));
// arrow functions cannot be hoisted

//Function
function t1(){
    console.log('t1 ran');
    return true;
}

function t2() {
    console.log('t2 ran');
    return false;
}

console.log(t1() && t2());

function addNums (num1, num2){
    return num1 + num2;
}
console.log(addNums(10,5));

const addNumsArrow = (num1, num2) => {
    return num1 + num2;
}
console.log(addNumsArrow(10,22));
//implecit return 
const addNumsArrow2 = (num1, num2) => num1 + num2;
console.log(addNumsArrow2(10,22));

const adNums3 = function(num1, num2) {
    return num1 + num2;
};
console.log(adNums3(10,10));

const greeting = (name) => `Hello ${name}`;
console.log(greeting('sean'));

function addManyNumber(...numbers){
    console.log(numbers);
    return numbers.reduce((acc, number) => acc + number);
}
console.log(addManyNumber(1,2,3,4,5,6,7,8,9))


//if statements
//flow control
if(10 > 11){
    console.log("10 > 11");
} else if (100 == '100'){
    console.log('number 100');
} else if (100 === '100'){
    console.log('same type');
} else {
    console.log('failure');
}

//Ternary
// console.log(number1 % 2 === 0 ? 'Even' : 'Odd')
console.log(10 > 11 ? '10 > 11' : '10 < 11');

console.log(
    10 > 11 ? 
        '10 > 11' : 
        100 === '100' ?
            'same data type' :
            100 == '100' ?
                'nums equal' :
                ''
    );

//for loop
for(let i = 0; i < 5; i++){
    console.log(i);
}

for(let i = 0; i < studentArray.length; i++){
    console.log(studentArray[i]);
}

for(let i = studentArray.length - 1; i >= 0; i--){
    console.log(studentArray[i]);
}

for(let i = 0; i <= 20; i += 2){
    console.log(i);
}

// for of loop
for(let student of studentArray){
    console.log(student);
}

let i = 0;
while (i <= 20){
    console.log(i);
    i++;
}

i = 0;
while (i < 20){
    console.log(i);
    if (i === 5){
        break;
    }
    i++;
}

i = 0;
while (i < 20){
    i++;
    if (i === 5){
        continue
    }
    console.log(i);
}

