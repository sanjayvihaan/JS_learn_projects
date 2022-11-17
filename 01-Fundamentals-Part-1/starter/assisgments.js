// // Assignments JS fundamentals part - 1.
// let country = 'India';
// let continent = 'Asia';
// let population = '20'

// console.log(country)
// console.log(continent)
// console.log(population)

// // 2:

// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // 3:
// // Constant value cannot be changed.

// language = "English";
// // const country = 'Portugal';
// // const continent = 'Asia';
// // const isIsland = 'false';
// // isIsland = true;

// // 4:
// // Basic operators have been used to understand the concepts.
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description1 = country +
// ' is in ' + continent + ', and its ' + population + ' million people speak ' 
// + language;
// console.log(description1)

// // 5:
// // Strings ad Template Literals
// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description)

// // 6:
// // Taking Decision: If else:

// if (population > 31) {
//     console.log(`${country}'s population is above average`);
// } else{
//     console.log(`${country}'s population is ${33 - population} million below average`,);
// }


//-------------------------------

// const scoreDolphins = (Number(96 + 108 + 89) /3) ;
// const scoreKoalas = (Number(89 + 91 + 110) /3);
// console.log(scoreKoalas, scoreDolphins);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the game 🏆');
// } else if (scoreKoalas> scoreDolphins) {
//     console.log('Koalas win the game 🏆');
// }else if(scoreDolphins === scoreKoalas){
//     console.log('Both win the game')
// }

// Challenge #4:

// const tip = 15;
// const bill = 4005;

// const tip = bill <= 300 && bill>= 50 ? bill * 0.15: bill *2;
// console.log(`This bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
