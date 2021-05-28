// 'use strict'

// Task 1
// let admin = 'Vlad';
// let name = admin;
// alert(name);

// Task 2
// Можно использовать заглавные буквы для имени birthday! И для age! И
// одновременно для обеих переменных!

// Task 3
// let name = "Ilya";
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); //hello Ilya

// Task 4
// "" + 1 + 0 // 10
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 //;45
// "4" - 2 // 2
// "4px" - 2 //NaN
// 7 / 0 // Infinity
// " -9 " + 5 //-9 5
// // " -9 " - 5 //-14
// null + 1 // 1
// undefined + 1 // NaN

// Task 5
// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// Task 6
// let a = 2;
// let x = 1 + (a *= 2);
// x = 5;
// a = 4

// Task 7
// 5 > 4 // true
// "ананас" > "яблоко" //false
// "2" > "12" // true
// undefined == null //true
// undefined === null //false
// null == "\n0\n" //false
// null === +"\n0\n" //false

// Task 8
// let name = prompt("Введите ваше имя?", "");
// alert(name);

// Task 9
// Выведется!

// Task 10
// let name = prompt("Каково «официальное» название JavaScript?", "");
// if (name === 'ECMAScript') {
//   prompt('Верно!');
// } else {
//   prompt('Не знаете? ECMAScript!');
// }

// Task 11
// let value = prompt();
// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }

// Task 12
// result = (a + b < 4) ? 'Мало' : 'Много';

// Task 13
// let message = (login == 'Сотрудник') ? 'Привет' :
// login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' : '';

// Task 14
// 2

// Task 15
// 1

// Task 16
// null

// Task 17
// 1

// Task 18
// 3

// Task 19
// if (age >= 14 && age <= 90)

// Task 20
// if (!(age >= 14 && age <= 90))

// Task 21
// if (-1 || 0) alert( 'first' ); //first
// if (-1 && 0) alert( 'second' ); //second
// if (null || -1 && 1) alert( 'third' ); //third

// Task 22
// let userName = prompt("Кто там?", '');
// if (userName == 'Админ') {
// let pass = prompt('Пароль?', '');
// if (pass == 'Я главный') {
//   alert( 'Здравствуйте!' );
// } else if (pass == '' || pass == null) {
//   alert( 'Отменено' );
// } else {
//   alert( 'Неверный пароль' );
// }

// } else if (userName == '' || userName == null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }

// Task 23
// if(browser == 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser == 'Chrome'
//  || browser == 'Firefox'
//  || browser == 'Safari'
//  || browser == 'Opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }

// Task 24
// let a = +prompt('a?', '');
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert( 2, 3);
//     break;
// }

// Task 25
// let a = 5;
// if (a > 0) {
//   a++
// } else {
//   a;
// }
// console.log(a)

// Task 26
// let a = 9;
// if (a > 0) {
//   a++
// } else {
//   a -= 2;
// }
// console.log(a)

// Task 27
// let a = 0;
// if (a > 0) {
//   a++
// } else if (a < 0) {
//   a -= 2;
// } else {
//   a = 10;
// }
// console.log(a)

// Task 28
// let num1 = 5;
// let num2 = 3;
// let num3 = -4;

// let positiveNumber = 0;

// if (num1 > 0) {
//   positiveNumber++;
// }
// if (num2 > 0) {
//   positiveNumber++;
// }
// if (num3 > 0) {
//   positiveNumber++;
// }
// console.log(positiveNumber);

// Task 29
// let num1 = 5;
// let num2 = 3;
// let num3 = -4;

// let positiveNumber = 0;
// let negativeNumber = 0;

// if (num1 > 0) {
//   positiveNumber++;
// } else {
//   negativeNumber++;
// }
// if (num2 > 0) {
//   positiveNumber++;
// }else {
//   negativeNumber++;
// }
// if (num3 > 0) {
//   positiveNumber++;
// }else {
//   negativeNumber++;
// }
// console.log(positiveNumber);
// console.log(negativeNumber);

// Task 30
// let a = 3;
// let b = 2;
// const bigestNumber = ( a > b ) ? console.log(a) : console.log(b);

// Task 31
// let number1 = prompt("ввести первое число", "");
// let number2 = prompt("ввести второе число", "");
// if (number1 > number2) {
//   alert(1);
// } if (number2 > number1) {
//   alert(2);
// }

// Task 32
// let a = 3;
// let b = 22;
// const Number1 = ( a > b ) ? console.log(a) : console.log(b);
// const Number2 = ( b > a ) ? console.log(a) : console.log(b);

// Task 33
// Что такое переменные вещественного типа??? 

// Task 34
// let A;
// let B;
// if (A !== B && A > B) {
//   A = B = A + B;
// } else {
//   A = 0;
//   B = 0;
// }
// console.log(A , B);


// Task 35
// let A;
// let B;
// if (A !== B && A > B) {
//   A = A;
//   B = A;
// } else {
//   A = 0;
//   B = 0;
// }
// console.log(A , B);

// Task 36
// let a = prompt("Введите первое число:");
// let b =  prompt("Введите второе число:");
// let c =  prompt("Введите третье число:");
// let res = Math.min(a,b,c);
// alert(res)

// Task 37
// let a = +prompt("Введите первое число:");
// let b = +prompt("Введите второе число:");
// let c = +prompt("Введите третье число:");
// let mn, mx, sr;
// if (a < b) mn = a; else mn = b;
// if (c < mn) mn = c;
// if (a > b) mx = a; else mx = b;
// if (c > mx) mx = c;
// sr = a + b + c - mn - mx;
// alert(sr);

// Task 38
// let a = prompt("Введите первое число:");
// let b =  prompt("Введите второе число:");
// let c =  prompt("Введите третье число:");
// let min = Math.min(a,b,c);10
// let max = Math.max(a,b,c)
// alert(min);
// alert(max);

// Task 39
// let a = 5;
// let b = 10;
// let c = 20;
// let sum = (a + b + c);
// let res = sum - Math.min(a,b,c);
// console.log(res)

// Task 40
let number1 = prompt("ввести число 1", "");
let number2 = prompt("ввести число 2", "");
let number3 = prompt("ввести число 3", "");

if (number1 !== number2 && number1 !== number3) {
  alert(1);
} 
if (number2 !== number1 && number2 !== number3) {
  alert(2);
}
if (number3 !== number2 && number3 !== number1) {
  alert(3);
}

