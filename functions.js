/*
function max(number1, number2) {
    if (number1 > number2)
        return number1
    else return number2
}
let number1 = prompt('Insert your number1');
let number2 = prompt('Insert your number2');
console.log(max(number1, number2));
*/
/*
function number(a) {
    if (a % 2 == 0)
        console.log("It's even number")
    else return console.log("It's not an even number")
}
let a = prompt('Insert your number')
console.log(number(a));
*/
/*
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
let average;
for (i = 0; i < numbers.length; i++) {
 
    sum += numbers[i];
    average = sum / numbers.length;
}
 
console.log(average);
*/
/*
const fiba = [0, 1];
for (let i = 1; i <= 100; i++) {
 
    fiba.push(fiba[i] + fiba[i - 1]);
}
console.log(fiba);
*/

const data = [
    { productName: "Bakery", unitPrice: 5000, amount: 200, totalPrice: 500000, casherId: 1, date: '2022-11-01' },
    { productName: "Chocolate", unitPrice: 7000, amount: 18, totalPrice: 54000, casherId: 2, date: '2022-11-01' },
    { productName: "Cake", unitPrice: 2000, amount: 200, totalPrice: 500000, casherId: 2, date: '2022-11-01' },
    { productName: "Coke", unitPrice: 3000, amount: 18, totalPrice: 54000, casherId: 2, date: '2022-11-01' },
    { productName: "Water", unitPrice: 4000, amount: 200, totalPrice: 500000, casherId: 2, date: '2022-11-01' },
    { productName: "Cookie", unitPrice: 9000, amount: 18, totalPrice: 54000, casherId: 2, date: '2022-11-01' },
    { productName: "Sweet", unitPrice: 5500, amount: 200, totalPrice: 500000, casherId: 1, date: '2022-11-01' },
    { productName: "Ice cream", unitPrice: 3300, amount: 18, totalPrice: 54000, casherId: 1, date: '2022-11-01' },
    { productName: "Гоо сайхан", unitPrice: 6000, amount: 200, totalPrice: 500000, casherId: 1, date: '2022-11-01' },
    { productName: "Эм", unitPrice: 2000, amount: 18, totalPrice: 54000, casherId: 1, date: '2022-11-03' },
    { productName: "Бэлэн хувцас", unitPrice: 7000, amount: 200, totalPrice: 500000, casherId: 4, date: '2022-11-03' },
    { productName: "Гэр ахуйн цахилгаан бараа", unitPrice: 3400, amount: 18, totalPrice: 54000, casherId: 4, date: '2022-11-03' },
    { productName: "Спорт бараа", unitPrice: 4000, amount: 200, totalPrice: 500000, casherId: 1, date: '2022-11-01' },
    { productName: "Спорт, аялал жуулчлалын бараа", unitPrice: 11000, amount: 18, totalPrice: 54000, casherId: 4, date: '2022-11-03' },
    { productName: "Гэр ахуйн тавилга", unitPrice: 5200, amount: 100, totalPrice: 500000, casherId: 4, date: '2022-11-01' },
    { productName: "Tea", unitPrice: 8000, amount: 58, totalPrice: 54000, casherId: 1, date: '2022-11-01' },
    { productName: "Cofee", unitPrice: 9000, amount: 440, totalPrice: 500000, casherId: 2, date: '2022-11-03' },
    { productName: "Salt", unitPrice: 2000, amount: 33, totalPrice: 54000, casherId: 2, date: '2022-11-01' },
    { productName: "Sugar", unitPrice: 4000, amount: 320, totalPrice: 500000, casherId: 2, date: '2022-11-03' },
    { productName: "Flour", unitPrice: 2000, amount: 14, totalPrice: 54000, casherId: 1, date: '2022-11-01' },
    { productName: "Flower", unitPrice: 6000, amount: 100, totalPrice: 500000, casherId: 3, date: '2022-11-03' },
    { productName: "Yogurt", unitPrice: 3400, amount: 8, totalPrice: 54000, casherId: 1, date: '2022-11-01' },
    { productName: "Chups", unitPrice: 6000, amount: 90, totalPrice: 500000, casherId: 3, date: '2022-11-03' },
    { productName: "Cheese", unitPrice: 1000, amount: 48, totalPrice: 54000, casherId: 1, date: '2022-11-03' },
    { productName: "Sauce", unitPrice: 1200, amount: 500, totalPrice: 500000, casherId: 3, date: '2022-11-01' },
    { productName: "Noodle", unitPrice: 3000, amount: 48, totalPrice: 54000, casherId: 1, date: '2022-11-03' },
    { productName: "Donut", unitPrice: 5000, amount: 200, totalPrice: 500000, casherId: 3, date: '2022-11-03' },
    { productName: "Good", unitPrice: 4500, amount: 48, totalPrice: 54000, casherId: 1, date: '2022-11-01' },
    { productName: "Bad", unitPrice: 6500, amount: 100, totalPrice: 500000, casherId: 1, date: '2022-11-01' },
    { productName: "Norm", unitPrice: 3200, amount: 28, totalPrice: 54000, casherId: 3, date: '2022-11-03' },
];
// 1 
// let totalprice = 0;
// data.forEach(item => {
//     totalprice += item.totalPrice;
// })
// console.log("Total price: " + totalprice);
// // 2 
// let totalamount = 0;
// data.forEach(item => {
//     totalamount += item.amount;
// })
// console.log("Amount: " + totalamount);
// 3
data.amount.sort(function (a, b) { return b - a });
console.log(data.amount);
