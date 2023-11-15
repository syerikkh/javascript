//6
// const numbers = [1, 3, 5, 7, 9, 7, 8, 33, 2, 5, 10, 12];
// const evenNumbers = numbers.filter((el) => el % 2 === 0);
// console.log(evenNumbers);

// const numbers = [1, 3, 5, 7, 9, 7, 8, 33, 2, 5, 10, 12];
// const evenNumbers = numbers.filter(function (el) {
//     if (el % 2 == 0) {
//         return el
//     }

// });
// console.log(evenNumbers);

//7
// function positiveNumbers(arr) {
//     const positivenums = arr.filter((el) => el > 0);
//     return positivenums

// }
// const numbers = [-1, 5, 7, 9, 3, -3, -5, 5, -2];
// console.log(positiveNumbers(numbers));

//8 
// const words = ['hahaha', 'hehe', 'huhuhuhu', 'hh', 'hhi'];
// let n = 5;
// const newArray = words.filter((el) => el.length > n);
// console.log(newArray);

// const words = ['hahaha', 'hehe', 'huhuhuhu', 'hh', 'hhi'];
// let n = 5;
// const newArray = words.filter(function (el) {
//     return el.length > n;
// });
// console.log(newArray);

//9
// const numbers = [2, 4, 6, 11, 17, 9, 12, 5];
// const primeNumbers = numbers.filter(function (el, i) {
//     if (el < 2) { return false }
//     for (i = 2; i < el; i++) {
//         if (el % i == 0) {
//             return false
//         }

//     }
//     return true

// });
// console.log(primeNumbers);

//10

// const words = ['aahaha', 'hehe', 'bhhuhuhu', 'chh', 'shhi', 'Ssss', 'sheesh'];
// const letter = "S";
// const newArray = words.filter((el) => el.charAt(0).toLowerCase() === letter.toLowerCase());
// console.log(newArray);

// const words = ['aahaha', 'hehe', 'bhhuhuhu', 'chh', 'shhi', 'Ssss', 'sheesh'];
// const letter = "s";
// const newArray = words.filter(function (el) {
//     return el.charAt(0).toLowerCase() === letter.toLowerCase();
// });
// console.log(newArray);

