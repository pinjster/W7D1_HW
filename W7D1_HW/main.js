/* Question 1: Write a function that takes a string and an array of strings ( in this example dog_names) 
and checks if one of the list members (dog names) is in the string . 
Return an array of the dog names found in the array 
*/
function filterDogNames(sentence, arr){
    let names = [];
    for(let i = 0; i < arr.length; i++){
        if(sentence.includes(arr[i])){
            names.push(arr[i]);
        }
    }
    return names;
}

var dogNames = ["Max","Fido","Gizmo","Nala"];
//Test 1
var testString1 = "Hello, my dog is Max, and they have purple eyes!";
console.log(filterDogNames(testString1, dogNames)); //Answer ['Max']
//Test 2
var testString2 = "My Dog is fast, her name is Tippi";
console.log(filterDogNames(testString2, dogNames)); //Answer []
//Test 3
var testString3 = "Come here Fido and Gizmo come here";
console.log(filterDogNames(testString3, dogNames)); //Answer ['Fido', 'Gizmo']

/* Question 2: Write a function using map to convert an array of numbers from inches to feet. 
*/
function inToFt(arr){
    return arr.map((num) => num / 12);
}
//Test 1
var heightsInInches = [66, 64, 60, 52, 72, 80, 51];
console.log(inToFt(heightsInInches)); //Answer [5.5, 5.333333333333333, 5, 4.333333333333333, 6, 6.666666666666667, 4.25]

/* Question 3: Using the Ternary Operator and Map, create an array that adds ‘is eating pizza’ 
to every name from the array ‘tmnt’ that ends with ‘o’ and add ‘is being rude’ to any other name 
*/
var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"];

let eatingPizza = tmnt.map((turt) => {
        return turt[turt.length - 1] !== 'o' ? `${turt} is being rude` : `${turt} is eating pizza`
    }
);

console.log(eatingPizza) //Answer ['Leonardo is eating pizza', 'Michelangelo is eating pizza', 'Donatello is eating pizza', 'Raphael is being rude']

/* Question 4: Write an arrow function to find the max number in a list. 
Do not use the Math.max function. The list will be all positive numbers 
*/
var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
let maxnum = (arr) => {
    max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]; 
        }
    }
    return max;
};
console.log(maxnum(findAMax)) //Answer 234125

/* Question 5: At the end of the third iteration ( the third time the loop has ran ) of this ‘For Loop’ 
define the state of all the variables used in this code block 
*/
var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
    ognib+=(bingo[i])
    if(i === bingo.length - 3){
        console.log(`bingo values is: \n${bingo}`);
        console.log(`ognib values is: \n${ognib}`);
        console.log(`i values is: \n${i}`);
    }
}
/* 
bingo values is: 
B-I-N-G-O
ognib values is: 
O-G
i values is: 
6
*/

/* Question 6: Complete 3 codewars problems using JavaScript, start with ones you have already solved in python. 
Paste a link in your .js file to the codewar problem and your solution  
*/
// Answer 1 link: https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
  }
// Answer 2 link: https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
function sumMul(n,m){
    if(n >= m){
      return "INVALID";
    }
    let total = 0;
    for(let i = n; i < m; i += n){
      total += i;
    }
    return total;
  }
// Answer 3 link: https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript
function drawStairs(n) {
    if (n === 1){
      return "I";
    }
    let step = "";
    let stair = "I\n";
    for(let i = 1; i < n - 1; i++){
      step += " ";
      stair += step;
      stair += "I\n";
    }
    console.log(stair + step + " I")
    return stair + step + " I";
  }