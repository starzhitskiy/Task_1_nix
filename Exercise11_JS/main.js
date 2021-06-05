// #1-------------------------------------------------------------
// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//   let copy = arr.slice().sort()
//   console.log(copy);
//   console.log(arr);

// 2-й вариант

//   let copy = [...arr];
//   console.log(copy.sort((a,b) => a.localeCompare(b)));
// }
// console.log(copySorted(arr));


// #2-------------------------------------------------------------
// let user = [
//   { name: "Вася", age: 25 },
//   { name: "Петя", age: 30 },
//   { name: "Маша", age: 28 },
// ]
// let names = []
// for (let arr of user) {
// names.push(arr.name);
// }
// console.log(names);

// #3-------------------------------------------------------------
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [ vasya, petya, masha ];

// function getAverageAge(users) {
//   return users.reduce((a, b) => a + b.age, 0) / users.length;
// }
// console.log(getAverageAge(arr));

// #4-------------------------------------------------------------
// let strings = [
//   "кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// console.log(unique(strings));

// #5-------------------------------------------------------------
// function sum(a) {
//   return function(b) {
//     return a + b; 
//   };
// }
// console.log(sum(1)(5));

// #6-------------------------------------------------------------
// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   };
// }

// #7-------------------------------------------------------------
// function factorial(n) {
//   return (n != 0) ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(4));

// #8-------------------------------------------------------------
// const fib = n => {
//   const a = (1 + 5 ** 0.5) / 2;
//   return Math.round(a ** n / 5 ** 0.5);
// }

// console.log(fib(3));
// console.log(fib(7));
// console.log(fib(77));



