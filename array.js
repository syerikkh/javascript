// Easy

// 1

// function findAverage(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum / array.length;
// }
// const numbers = [10, 20, 30, 40, 50];
// let average = findAverage(numbers);
// console.log(average);

// 2

// const fibo = [0, 1];
// for (let i = 1; i <= 100; i++) {
//     fibo.push(fibo[i] + fibo[i - 1]);
// }
// console.log(fibo);

// 3

// const array = [10, 20, 30, 40, 50];
// let newElement = 80;
// array.pop();
// array.push(newElement)
// console.log(array);

// 4
// function sumOfPositiveEvenNumbers(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {

//         if (array[i] > 0 && array[i] % 2 == 0) {
//             sum += array[i];
//         }
//     }
//     return sum;
// }

// const numbers = [-2, 4, 6, 7, 8, 9, 44, 2, 6, 7, 8];
// const result = sumOfPositiveEvenNumbers(numbers);
// console.log(result);

// Medium 
// 1 Chunk  

// function chunkArray(arr, chunkSize) {
//     const result = [];
//     for (i = 0; i < array.length; i += chunkSize) {
//         result.push(array.slice(i, i + chunkSize));
//     }
//     return result;
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunkedArray = chunkArray(array, 6);
// console.log(chunkedArray);

// 2

// function findMaxAndMin(array) {
//     if (array.length <= 2) return array;
//     let max = array[0];
//     let min = array[0];
//     for (i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return [max, min]
// }
// const numbers = [1, 3, 5, 22, 101, 1001, 89, 46, 17, 31, 59];
// let MaxAndMin = findMaxAndMin(numbers);
// console.log(MaxAndMin)



// 3 

// const array = [5, 4, 3, 2, 1, 7, 9, 12];
// for (i = 0; i < array.length; i++) {
//     for (j = 0; j < array.length; j++) {
//         if (array[i] < array[j]) {
//             let a = array[i];
//             array[i] = array[j];
//             array[j] = a;
//         }

//     }
// }
// console.log(array);

// 3 Function
// const array = [5, 4, 3, 2, 1, 7, 9, 12];
// array.sort(function (a, b) { return b - a });
// console.log(array);

// Hard 1


function findLongestIncreasingSubsequence(arr) {
    let lis = [];
    let d = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i])
    }
}
const array = [10, 9, 2, 5, 3, 7, 101, 18];