// 1
// const numbers = [2, 4, 3, 5, 6, 7];
// const doubledNumbers = numbers.map((el, i) => el ** 2);
// console.log(doubledNumbers);

// const numbers = [2, 4, 3, 5, 6, 7];
// const doubledNumbers = numbers.map(function (el, i) {
//     return el ** 2
// });
// console.log(doubledNumbers);

// 2
// const celcius = [25, 41, 31, 16, 10, 9];
// const farenheit = celcius.map((el, i) => (el * 9 / 5) + 32);
// console.log(farenheit);

// const celcius = [25, 41, 31, 16, 10, 9];
// const farenheit = celcius.map(function (el, i) {
//     return (el * 9 / 5) + 32
// });
// console.log(farenheit);

//3
// const numbers = [4, 16, 25, 81, 49, 100];
// const squaredRoot = numbers.map((el, i) => Math.sqrt(el));
// console.log(squaredRoot);

// const numbers = [4, 16, 25, 81, 49, 100];
// const squaredRoot = numbers.map(function (el) {
//     return Math.sqrt(el)
// });
// console.log(squaredRoot);

//4
// const names = ['haha', 'hehe', 'hoho', 'huhu'];
// const upperCaseNames = names.map((el, i) => el.toUpperCase());
// console.log(upperCaseNames);

// const names = ['haha', 'hehe', 'hoho', 'huhu'];
// const upperCaseNames = names.map(function (el) {
//     return el.toUpperCase();
// });
// console.log(upperCaseNames);

//5
// function fullNames(arr) {
//     let firstLetters = arr.map((el, i) => el.firstname.charAt(0) + "," + el.lastname.charAt(0));
//     return firstLetters


// }
// const fullnames = [
//     { firstname: 'haha', lastname: 'jehe' },
//     { firstname: 'roho', lastname: 'xuhu' }
// ]
// console.log(fullNames(fullnames));

// function fullNames(arr) {
//     let firstLetters = arr.map(function (el, i) {
//         return el.firstname.charAt(0) + ", " + el.lastname.charAt(0)
//     })
//     return firstLetters
// }
// const fullnames = [
//     { firstname: 'haha', lastname: 'jehe' },
//     { firstname: 'roho', lastname: 'xuhu' }
// ];
// console.log(fullNames(fullNames));