// Easy
// 1

// for (i = 1; i <= 100; i++) {
//     console.log(i);
// }

// 2

// let input = 35;
// let sum = 0;
// for (i = 0; i < input; i++) {

//     if (i % 2 == 0 && i > 0) {
//         sum += i;

//     }

// } console.log(sum);

// 3

// let n = 5;
// let sum = 0;
// for (i = 0; i <= n; i++) {
//     sum += i
// }
// console.log(sum);

// 4 

// let number = 2;
// let pow = 0;
// let result;
// while (Math.pow(number, pow) > 1000) {
//     return result
// }

// Medium
// 1

// const array = [6, 2, 15, 21, 12, 5, 0];
// for (i = 0; i < array.length; i++) {
//     for (j = 0; j < array.length; j++) {
//         if (array[i] < array[j]) {
//             let a = array[i];
//             array[i] = array[j];
//             array[j] = a;
//         }
//     }
// } console.log(array);

// 2

// function largestDifference(arr) {
//     let min = arr[0];
//     let difference = arr[1] - arr[0];
//     for (i = 1; i < arr.length; i++) {
//         if (difference < arr[i] - min) {
//             difference = arr[i] - min;
//         }
//         if (min > arr[i]) {
//             min = arr[i];
//         }
//     }
//     return difference
// }
// const array = [1, 2, 3, 10, 56, 2];
// let maxDifferences = largestDifference(array);
// console.log(maxDifferences);

// 3

// function leftPyramid(n) {
//     for (i = 1; i <= n; i++) {
//         let od = '';
//         for (j = 1; j <= i; j++) {
//             od += '*';
//         }
//         console.log(od);
//     }

// }
// leftPyramid(4);

// 4 


// Hard 
// 1

// function chessBoard(n) {
//     for (i = 0; i < n; i++) {
//         let nud = '';
//         for (j = 0; j < n; j++) {
//             if ((i + j) % 2 == 0) {
//                 nud += "_"
//             } else { nud += "#" }

//         }
//         console.log(nud);
//     }
// }
// chessBoard(8);

// 2

// function fiboSeries(n) {
//     const fibo = [0, 1];
//     for (let i = 1; i < n - 1; i++) {
//         fibo.push(fibo[i] + fibo[i - 1]);
//     }
//     console.log(fibo);
// }
// fiboSeries(3);

// 3


