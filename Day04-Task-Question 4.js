/*
Question 04 :
https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373
*/

/*
Task 1: Simple Programs todo for variables
1. Declare four variables without assigning values and print them in console
*/

let firstVariable;
let secondVariable;
let thirdVariable;
let fourthVariable;

console.log(firstVariable, secondVariable, thirdVariable, fourthVariable);

//Output for Question 01:
// undefined undefined undefined undefined

//***********************************************************************

/*
2. How to get value of the variable myvar as output
   var myvar= 1;
*/

var myvar = 1;

console.log(myvar);

//Output for Question 02:
// 1

//***********************************************************************

/*
3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
*/

const firstName = "Mohamed";
const lastName = "Saleem";
const maritalStatus = "Unmarried";
const country = "India";
const age = 26;

console.log(firstName, lastName, maritalStatus, country, age);

//Output for Question 03:
// Mohamed Saleem Unmarried India 26

//***********************************************************************

/*
4. Declare variables to store your first name, last name, marital status, country and age in a single line
*/

const firstName1 = "Mohamed", lastName1 = "Saleem", maritalStatus1 = "Unmarried", country1 = "India", age1 = 26;

console.log(firstName1, lastName1, maritalStatus1, country1, age1);

//Output for Question 04:
// Mohamed Saleem Unmarried India 26

//***********************************************************************

/*
5. Declare variables and assign string, boolean, undefined and null data types
*/

let stringVariable = "String";
let booleanVariable = true;
let undefinedVariable;
let nullVariable = null;

console.log(typeof (stringVariable), typeof (booleanVariable), typeof (undefinedVariable), typeof (nullVariable));

//Output for Question 05:
// string boolean undefined object

//***********************************************************************

/*
6. Convert the string to integer
   parseInt()
   Number()
   Plus sign(+)
*/

let a = "123";

let b = parseInt(a);
let c = Number(a);
let d = +a;

console.log(typeof (b), b);
console.log(typeof (c), c);
console.log(typeof (d), d);

//Output for Question 06:
// number 123
// number 123
// number 123

//***********************************************************************

/*
7. Write 6 statement which provide truthy & falsey values.
*/

console.log(Boolean(true));                     // true
console.log(Boolean('hi'));                     // true
console.log(Boolean(1));                        // true
console.log(Boolean([]));                       // true
console.log(Boolean([0]));                      // true
console.log(Boolean({}));                       // true
console.log(Boolean({ a: 1 }));                 // true

console.log(Boolean(false));                    // false
console.log(Boolean(undefined));                // false
console.log(Boolean(null));                     // false
console.log(Boolean(''));                       // false
console.log(Boolean(NaN));                      // false
console.log(Boolean(0));                        // false

//***************************************************************************************************************************

/*
Task 2: Simple Programs todo for Operators
1. Square of a number
*/

let num = 3;

let squareOfNumber = num * num;

console.log(squareOfNumber);                    //9

//***********************************************************************

/* 2. Swapping 2 numbers */

let num1 = 3;
let num2 = 6;

let num3 = num1;

num1 = num2;
num2 = num3;

console.log(num1);                              //6
console.log(num2);                              //3

//***********************************************************************

/* 3. Addition of 3 numbers */

let number1 = 5, number2 = 10, number3 = 15;

let additionOf3Numbers = number1 + number2 + number3;

console.log(additionOf3Numbers);                 //30

//***********************************************************************

/* 4. Celsius to Fahrenheit conversion */

let celcius = 30;

let fahrenheit = ((celcius * (9 / 5)) / 32);

console.log(fahrenheit);                        //1.6875

//***********************************************************************

/* 5. Meter to miles */

let meter = 20000;

let miles = meter / 1609.34;

console.log(miles.toFixed(3));                   //12.427

//***********************************************************************

/* 6. Pounds to kg */

let pounds = 100;

let kg = pounds * 0.45359;

console.log(kg.toFixed(3));                      //45.359

//***********************************************************************

/* 7. Calculate Batting Average */

// Batting Average = Runs Scored / Total no.of dismissals

let runScored = 12000;
let matchesPlayed = 170;
let notOut = 40;

let dismissals = matchesPlayed - notOut;

let battingAverage = runScored / dismissals;

console.log(battingAverage.toFixed(3));          //92.308

//***********************************************************************

/* 8. Calculate five test scores and print their average */

// Method-1 : Using for-of loop

let scores = [60, 75, 53, 120, 108];
let sum = 0;

for (var score of scores) {

   sum = sum + score;

}

let averageScore = sum / scores.length;

console.log(averageScore);                       //83.2

// Method-2 : Using forEach loop

let sum1 = 0;

// scores.forEach(function (num) { sum1 = sum1 + num });           // forEach

scores.forEach((num) => { sum1 = sum1 + num });                    // forEach and Arrow function

let averageScore1 = sum1 / scores.length;

console.log(averageScore1);                       //83.2  

// Method-3 : Using reduce() function

let averageScore2 = scores.reduce((a, b) => a + b, 0) / scores.length;

console.log(averageScore2);                       //83.2  

//***********************************************************************

/* 9. Power of any number x ^ y */

let anyNumber = 3;
let powerOfNumber = 5;

console.log(anyNumber ** powerOfNumber);            //243

//***********************************************************************

/* 10. Calculate Simple Interest - Solved in codeKata Problems */

/* 11. Calculate area of an equilateral triangle - Solved in codeKata Problems */

/* 12. Calculate area of an Isoceles triangle - Solved in codeKata Problems */

//***********************************************************************

/* 13. Calculate volume of sphere */

const pi = 3.14;
let radiusOfSphere = 3;

let rCube = radiusOfSphere * radiusOfSphere * radiusOfSphere

let volumeOfSphere = ((4 / 3) * pi * rCube);

console.log(volumeOfSphere.toFixed(2));           //113.04

//***********************************************************************

/* 14. Volume Of Prism */

/*
a) volume of a Prism = BaseArea * Length;

b) volume of a Triangular Prism = ((1/2)*a*b*h;
   Where
   a = Apothem length of a triangular prism

   b = Base length of a triangular prism

   h = height of a triangular prism

c) volume of a Rectangular Prism = l*b*h;
   where
   l = Base width of a rectangular prism

   b = Base length of a rectangular prism

   h = height of a rectangular prism

d) Volume of a Pentagonal Prism = ((5/2)*a*b*h;

e) volume of a Hexagonal Prism = 3*a*b*h;
*/

//***********************************************************************

/* 15. Find area of a triangle - Solved in codeKata Problems */

/* 16. Give the Actual cost and Sold cost, Calculate Discount Of Product */

let actualCost = 40;
let soldCost = 38;

let discountOfProduct = (((actualCost - soldCost) / actualCost) * 100);

console.log(discountOfProduct);                   //5

//***********************************************************************

/* 17. Given their radius of a circle and find its diameter, circumference and area */

let radiusOfCircle = 14;

let diameterOfCircle = radiusOfCircle * 2;

let circumferenceOfCircle = 2 * pi * radiusOfCircle;

let areaOfCircle = pi * radiusOfCircle * radiusOfCircle;

console.log(diameterOfCircle, circumferenceOfCircle, areaOfCircle);          //28 87.92 615.44

//***********************************************************************

/* 18. Given two numbers and perform all arithmetic operations */

let firstNumber = 10;
let secondNumber = 7;

let additionOfNumbers = firstNumber + secondNumber;
console.log(additionOfNumbers);                               //17

let subtractionOfNumbers = firstNumber - secondNumber;
console.log(subtractionOfNumbers);                            //3

let multiplicationOfNumbers = firstNumber * secondNumber;
console.log(multiplicationOfNumbers);                         //70

let exponentiationOfNumbers = firstNumber ** secondNumber;
console.log(exponentiationOfNumbers);                         //10000000

let divisonOfNumbers = firstNumber / secondNumber;
console.log(divisonOfNumbers.toFixed(3));                     //1.429

let modulusOfNumbers = firstNumber % secondNumber;
console.log(modulusOfNumbers);                                //3

let incrementOfNumber;
let value = 4;
value++;
incrementOfNumber = value;
console.log(incrementOfNumber);                               //5

let decrementOfNumber;
let value1 = 8;
value1--;
decrementOfNumber = value1;
console.log(decrementOfNumber);                               //7

//***********************************************************************

/* 
19. Display the asterisk pattern as shown below(No loop needed):
    *****
    *****
    *****
    *****
    ***** 
*/

(function print(n, m) {

   if (n <= m) {
      console.log('*****');
      n++;
      print(n, m);
   }

})(1, 5);

//Output for Question 19:
// *****
// *****
// *****
// *****
// *****

//***********************************************************************