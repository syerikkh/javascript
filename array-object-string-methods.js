// Easy
// 1
// function ascendingOrder(obj) {
//     return Object.keys(obj).sort();
// }
// const object = { b: 2, a: 1, c: 3 };
// let sortedKeys = ascendingOrder(object);
// console.log(sortedKeys);

// const object = { b: 2, a: 1, c: 3 };
// let sortedKeys = Object.values(object).sort();
// console.log(sortedKeys);

// 2

// function fullNameResult(obj) {
//     if (obj.hasOwnProperty('lastName', 'firstName')) {
//         return [obj.lastName.toUpperCase() + " " + obj.firstName]
//     }
//     else if (obj.lastName === null && obj.firstName === null) {
//         console.log('Буруу утга оруулсан байна.')
//     }
// }

// let fullName = {
//     lastName: prompt('Lastname'),
//     firstName: prompt('Firstname')
// };
// console.log(fullNameResult(fullName));

// function fullName(lastName, firstName) {
//     if (lastName && firstName) {
//         let upperLastName = lastName.toUpperCase();
//         return upperLastName + " " + firstName
//     } else { return "Буруу утга оруулсан байна." }
// }
// let lastName = prompt("Lastname");
// let firstName = prompt("Firstname");
// console.log(fullName(lastName, firstName));

// 3

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array);
// let reversedArray = array.reverse();
// console.log(reversedArray);
// let string = array.toString();
// console.log(string);
// let newString = string.replace(/,/g, "");
// console.log(newString);

// 4

// function sortByFrequency(arr) {
//     let sortedArray = [];


// }
// const fruits = ["apple", "banana", "apple", "cherry", "cherry", "cherry"]
// fruits.reduce();

// 5

const students = [
    { name: 'Alice', grades: [80, 90, 70] },
    { name: 'Alice', grades: [60, 80, 70] },
    { name: 'Alice', grades: [100, 60, 70] }
]
function findAverageGrades(students) {

}