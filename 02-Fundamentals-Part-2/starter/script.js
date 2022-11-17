"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive')

// const interface = 'audio' //interface already a function
// const private = 543; //private already a function

// --------------------------------------------

// Functions:

// function logger(){
//     console.log('My name is Sanjay');
// }
// // calling / running / invoking function.
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)

// const appleOrangesJuice = fruitProcessor(2, 4);
// console.log(appleOrangesJuice)

// ------------------------------------------------------------------
// Function declaration

// function calcAge1(birthYeah) {
//     return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);

// Function expression
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2)

// --------------------------------------------------------

// Arrow function
// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991)
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2000, 'sanjay'));
// console.log(yearsUntilRetirement(1980, 'Bob'))

// ---------------------------------------------------

// Fuction calling other function

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of ${orangesPieces} pieces of oranges`;
//     return juice;
//     }

// console.log(fruitProcessor(2, 3));

// -------------------------------------------

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah)
//     const retirement = 65 - age;
//     // return retirement;

//     if(retirement > 0){
//         return retirement;
//     } else {
//         return -1
//     }
// }

// console.log(yearsUntilRetirement(2004, 'Sanjay'));
// console.log(yearsUntilRetirement(1970, 'Bob'))

// ---------------------------------------------------------

// coding challenge 1:

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(3, 4, 5))

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins wins 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas wins 🏆 (${avgKoalas} vs. ${Dolphins})`)
//     } else {
//         console.log("No team wins")
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)

// // Test 2:

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas)

// ---------------------------------------------------
// Array

// const friend1 = "michael";
// const friend2 = "Bob";
// const friend3 = "John"

// const friends = ['Michael', 'Bob', 'John'];
// console.log(friends);

// const y = new Array(1991, 2004, 2021);

// console.log(friends[0])

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Ahmen";
// console.log(friends)

// const firstName = 'V'
// const sanjay = [ firstName , 'Sanjay', 2021 - 2004, 'Developer', friends];
// console.log(sanjay)
// console.log(sanjay.length);

// Exercise:

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const years = [1990, 2000, 2004, 2010, 2015];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length -1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages)

// --------------------------------------------------

// const friends = ['Michael', 'Bob', 'John'];
// const newLength = friends.push('ben');
// console.log(friends)
// console.log(newLength)

// friends.unshift('sanjay'); // adding the element at first
// console.log(friends)

// // Remove the element
// friends.pop() //last
// const popped = friends.pop()
// console.log(popped)
// console.log(friends)

// friends.shift(); // First
// console.log(friends)

// console.log(friends.indexOf('Michael'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Michael'));
// console.log(friends.includes('sanjay'))
// console.log(friends.includes(23))

// if (friends.includes('Peter')) {
//     console.log('You have a friend called Peter');
// } else {
//     // alert('NO friends')
//     console.log('no friends')
// }

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills [1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals)

// Introduction to Objects

// const sanjayArray = [
//     'V Sanjay',
//     '2021-2004',
//     'Developer',
// ];

// const sanjay = {
//     firstName: 'Sanjay',
//     lastName: 'V',
//     age: 2021-2004,
//     job: 'Developer',
//     firends: ['michael','vijay','google']
// };
// console.log(sanjay, sanjayArray);

// // Dot and Bracket Notation

// console.log(sanjay.lastName)
// console.log(sanjay['lastName'])

// const nameKey = 'Name';
// console.log(sanjay['first' + nameKey]);
// console.log(sanjay['last' + nameKey]);

// // console.log(sanjay.'last' + nameKey)

// const interestedIn = prompt('What do you want to know about Sanjay? Choose between firstName, lastName, age, job')

// if (sanjay[interestedIn]) {
//     console.log(sanjay[interestedIn]);
// }else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job')
// }

// sanjay.location = 'Bangalore';
// sanjay['instagram'] =  '@vsanjay48'
// console.log(sanjay)

// // Challenge
// // sanjay has 3 friends, and his best friends is called Michael

// console.log(`${sanjay.firstName} has ${sanjay.firends.length} friends, and his best friends is called ${sanjay.firends[0]}`)

// Objects Methods

// const sanjay = {
//     firstName: 'Sanjay',
//     lastName: 'V',
//     birthYear: 2004,
//     job: 'Developer',
//     firends: ['michael','vijay','google'],
//     hasDriversLicense: false,

//     calcAge: function(){
//         this.age = 2021 -this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${sanjay.job}, and he has ${this.hasDriversLicense ? 'a': 'no'} driver's license.`
//     }
// };

// console.log(sanjay.calcAge())

// // challenge

// console.log(sanjay.getSummary())

// Challenges 3

// const mark = {
//     fullName: 'V Mark',
//     mass: 50,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const sanjay ={
//     fullName: 'V Sanjay',
//     mass: 59,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };
// mark.calcBMI();
// sanjay.calcBMI();
// console.log(mark.bmi, sanjay.bmi)

// if (mark.bmi > sanjay.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${sanjay.fullName}'s BMI (${sanjay.bmi})`)
// } else if (sanjay.bmi > mark.bmi) {
//     console.log(`${sanjay.fullName}'s BMI (${sanjay.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

// Iteration: The for Loop
// for loops keep running while condition is True
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
// }

// for(let name = 0; name <= 10; name++){
//     console.log(`Hello sanjay ${name}`)
// }

// Looping Array, Breaking and Continuing

// const sanjay = [
//     'V Sanjay',
//     2021-2004,
//     'Developer',
//     ['Michael', 'Peter', 'steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < sanjay.length; i++) {
//     // Reading from sanjay array
//     console.log(sanjay[i], typeof sanjay[i]);

//     // Filling types array
//     // types[i] = typeof sanjay[i];
//     types.push(typeof sanjay[i])
// }
// console.log(types);

// const years = [1991, 2004, 2007, 1969, 2021];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i]);
// }
// console.log(ages);

// // Continue and Break
// console.log("---ONLY STRING---")
// for (let i = 0; i < sanjay.length; i++) {
//     if(typeof sanjay[i] !== 'string') continue;

//     console.log(sanjay[i], typeof sanjay[i]);
// }

// console.log("---BREAK WITH NUMBER---")
// for (let i = 0; i < sanjay.length; i++) {
//     if(typeof sanjay[i] !== 'number') break;

//     console.log(sanjay[i], typeof sanjay[i]);
// }

// Looping Backwards and Loops in Loops

const sanjay = [
  "V Sanjay",
  2022 - 2004,
  "Developer",
  ["Michael", "Peter", "steven"],
];

// 0, 1, ...., 4
// 4, 3, ...., 0

// for (let i = sanjay.length- 1; i >= 0; i--) {
//     console.log(i, sanjay[i]);
// }

// for (let i = 0; i < sanjay.length; i++) {
//     console.log(i, sanjay[i])
// }

// for loop inside loop

// for (let exercise = 1; exercise < 4; exercise ++ ) {
//     console.log(`-------Starting Exercise ${exercise}`)

// for (let rep = 1; rep < 6; rep ++) {
//     console.log(`Lifting weight repetition ${rep}`);
// }
// }

// While Loop

// for (let rep = 1; rep <= 10; rep++) {
//   // console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`Lifting weights repetition ${rep}`)
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end");
// }

// const c = 10;
const tempatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// TODO: Sample problem to solve problem 1

const tempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;

    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// tempAmplitude([7, 8, 10, 4]);
const aplitude = tempAmplitude([3, 6, 8], [4, 9, 10]);
console.log(aplitude);

// TODO: Problem 2:

// Function should now receive 2 arrays of temps

// * 1. Understanding the Problem:
// * -- With 2 arrays, should we implement functionality twice? No! just need to merge two arrags
// * How to merge two arrays into one?
