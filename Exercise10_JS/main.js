'use strict';

// #1**********************************
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// #2**********************************
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// #3**********************************
// function readNumber() {
//   let num;
//   do {
//     num = prompt('Введите число');
//   } while ( !isFinite(num) );
//   if (num === null || num === '') return null;
//   return +num;
// }
// alert(`Число: ${readNumber()}`);

// #4**********************************
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// #5**********************************
// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// #6**********************************
// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }

// #7**********************************
// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();
//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// #8**********************************
// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '...' : str;
// }

// #9**********************************
// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// #10**********************************
// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt('Введите число', 0);
//     if (value === '' || value === null || !isFinite(value)) break;
//     numbers.push(+value);
//   }
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// #11**********************************
// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }
//   return maxSum;
// }

// #12**********************************
// Функция будет работать также 

// #13**********************************
// 1-й вариант 
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }

// 2-й вариант
// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

// #14**********************************
// function min(a, b) {
//   return a < b ? a : b;
// }

// #15**********************************
// function pow(x, n) {
//   let result = x;
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// let x = prompt('x?', '');
// let n = prompt('n?', '');
// if (n < 1) {
//   alert(`Используйте только натуральное число`);
// } else {
//   alert( pow(x, n) );
// }

// #16**********************************
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   'Вы согласны?',
//   () => alert('Вы согласились.'),
//   () => alert('Вы отменили выполнение.')
// );

// #17**********************************
// let income = 3333;
// let rises = 1750;
// let cost = 8000;
// function month(income, rises, cost) {
// return Math.ceil(cost / (income - rises));
// }

// #18**********************************
// let arr = [];
// for(let i = 0; i < 10; i++) {
//   arr.push(+prompt('Введите число:'));
// }
// console.log(arr);
// const negative = arr
// .filter(number => number < 0)
// .reduce((a, b) => {
//   return a + b
// });
// console.log(negative);




//                                            10-1



// #1
// shoppingCart и fruits ссылаются на одинаковый массив
// Результат кода = 4


// #2
// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
// console.log(styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// #3
// У массива будет 3 элемента потому что функция теперь будет частью массива
// [a, b, function]
