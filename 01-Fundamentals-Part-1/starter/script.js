// let js = "amazing";
// console.log(3+ 40+ 80*10-10);

// // Values and Variable
// console.log('Sanjay'); // Sanjay is the Values.
// console.log(45);

// let firstName = 'Sanjay'; // firstName is the variable.
// console.log(firstName)// Variable is written in the camel case. 

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHighterBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHighterBMI)


// If Else---

// const age = 17;
// // const isOldEnough = age >= 18;

// if (age >= 18) {
//     console.log('Sanjay you can go with driving license')
// }else{
//     console.log('You have not yet reached 18 years')
// }

// const bithYear = 2004;
// let century;

// if (bithYear <= 2000){
//     century = 20;
// }else{
//     century = 21
// }
// console.log(century)

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHighterBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHighterBMI)

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John (${BMIJohn})`);
// }else {
//     console.log(`John's BMI (${BMIJohn}) is higher that Mark's (${BMIMark})`)
// }


//--------------------------------------------//
// equality operator:

// const age = '18'; // if the number is in the string the loose opperator will show the answer to our requirement. 
// if (age == 18) console.log("You have become an adult.") //using equality operator--- Loose
// console.log(typeof age)

// const age_Number = 18; // if the number is in the string the strict opperator will show will not show our requirement. 
// if (age_Number === 18) console.log("You have become an adult.") //using equality operator--- Loose
// console.log(Number(age))
// console.log(typeof age_Number)

//-------------------------------------------------//

// const favorite = Number(prompt("Enter you favorite number?"));
// console.log(favorite)
// console.log(typeof favorite)

// if (favorite === 23) {
//     console.log('cool! 23 is an good number')
// } else if(favorite === 7) {
//     console.log('7 is also a good number')
// }
// if (favorite === 13) {
//     console.log('cool! 13 is an good number')
// }

//--------------------------------------------

// boolean value

// const hasDriversLicense = true; //a
// const hasGoodVision = true; //b

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sanjay can able to drive');
// } else{
//     console.log("Sanjay can't drive...")
// }

// const isTired = false; //c
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sanjay can able to drive');
// } else{
//     console.log("Sanjay can't drive...")
// }


//---------------------------------------

// Switch statements:

//const day = 'thursday';

// switch(day) {
//     case 'monday': // day === monday
//         console.log('Go to college');
//         console.log('Doing the work in the evening');
//         break;
//     case 'tuesday': // 
//         console.log('Planing my learnings');
//         console.log('writing my code');
//         break;
//     case 'wednesday': // 
//     case 'thursday': // 
//         console.log('Planing my learnings');
//         console.log('writing my code');
//         break;
//     case 'friday': // 
//         console.log('Doing Assignment');
//         break;
//     case 'saturday': // 
//     case 'sunday': //
//         console.log('Going out');
//         break;

//     default:
//         console.log('Not a valid day!')
// }

// if (day === 'monday'){
//     console.log('Go to college');
//     console.log('Doing the work in the evening');
// }else if (day === 'tuesday'){
//     console.log('Planing my learnings');
//     console.log('writing my code');
// }else if(day === 'wednesday' || day === 'thursday'){
//     console.log('Planing my learnings');
//     console.log('writing my code');
// }else if (day === 'friday'){
//     console.log('Doing Assignment');
// }else if (day ==='saturday' || day === 'sunday'){
//     console.log('Going out');
// } else{
//     console.log('not a valid day!')
// }

// const age = 17; // conditions
// // age >= 18 ? console.log('I Like to work in google'): //if part
// // console.log('I like to work as freelance'); //else part

// const work = age >= 18 ? 'google ' : 'freelance';
// console.log(work);

// let work2;
// if (age >= 18){
//     work2 = 'google';
// } else {
//     work2 = 'freeelance';
// }
// console.log(work2);

// console.log(`I like to work at google ${age >= 18 ? 'google ' : 'freelance'}`);


let input = prompt("Enter the input to verify the typeOF")
console.log(typeof input)