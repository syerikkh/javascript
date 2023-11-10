// Medium 
// 1

// function findLongestWord(string) {
//     let words = string.split(" ");
//     let longestWord = "";
//     for (let i = 0; i < words.length; i++) {
//         let currentWord = words[i];
//         if (currentWord.length > longestWord.length) {
//             longestWord = currentWord;
//         }
//     }
//     return longestWord
// }
// let sentence = "The nalalalala brown fox jumps over the lazy dog";
// let longestword = findLongestWord(sentence);
// console.log(longestword);

// 2

// function findSumAndSubtract(a, b) {
//     return ["Sum of numbers: " + (a + b), "Subtract of numbers: " + (a - b)]
// }
// console.log(findSumAndSubtract(4, 8));

// 3

// function palindromCheck(str) {
//     const cleanStr = str.replace(/[^a-z0-9]/g, '').toLowerCase();
//     return cleanStr === cleanStr.split('').reverse().join('');
// }
// let check = "racecar";
// console.log(palindromCheck(check));

// 5

// function removeVowels(word) {
//     const vowels = ['a', 'e', 'y', 'u', 'i', 'o'];
//     for (i = 0; i < word.length; i++) {
//         let removedVowels = word.replace(vowels, '');
//         if (word.hasOwnProperty(vowels)) {
//             return removedVowels
//         }
//     }
// }
// let check = "racercar";
// console.log(removeVowels(check));

// function removeVowels(word) {
//     return word.replace(/[aeyuioAEYUIO]/g, '')
// }
// let check = "Helloooo world  hhyuhhiIY";
// let removedVowels = removeVowels(check);
// console.log(removedVowels); 
