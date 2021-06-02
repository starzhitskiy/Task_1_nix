// #1 *********************
// Ответ 1 потому что каждое выполнение цикла уменьшает i на 1 до тех пор пока i = 0

// #2 *********************
// let a=4;
// let b=8;
// let c=2;
//  if ( a > b && b > c) {
//    a *= 2;
//    b *= 2;
//    c *= 2;
//  } else if (!(a > b && b > c)) {
//    a *= (-1);
//    b *= (-1);
//    c *= (-1);
//  }
//  console.log(a, b, c);

// #3 *********************
//  let a=3;
// let b=4;
// let c=5;
//  if ( a > b && b > c || c > b && b > a) {
//    a *= 2;
//    b *= 2;
//    c *= 2;
//  } else {
//    a *= (-1);
//    b *= (-1);
//    c *= (-1);
//  }
//  console.log(a, b, c);

// #4 *********************
// let a = 13;
// let b = 4;
// let c = 4;
// if (b == c) {
//   console.log(b, c);
// } else if (b - a < c) {
//   console.log(b);
// } else if (c - a < b) {
//   console.log(c);
// }

// #5 *********************
//  let point;
//  let x;
//  let y;
//  if ((x = 0) && (y = 0)) {
//     console.log(1);
//    } else if (x = 0) {
//      console.log(2);
//    } else if (y = 0) {
//      console.log(3);
//    } else {
//      console.log(0);
//    }

// #6 *********************
//  let point = prompt('ввести точку', '');
//  let X = prompt('ввести координату X', '');
//  let Y = prompt('ввести координату Y', '');
//  if ((X > 0) && (Y > 0)) {
//   alert('Номер координатной четверти, 1');
//  } else if ((X < 0) && (Y > 0)) {
//   alert('Номер координатной четверти, 2');
//  } else if ((X < 0) && (Y < 0)) {
//   alert('Номер координатной четверти, 3');
//  } else if ((X > 0) && (Y < 0)) {
//   alert('Номер координатной четверти, 4');
//  }

// #7 *********************
// let a = ['x1', 'y1'];
// let b = ['x2', 'y2'];
// let c = ['x3', 'y3'];
// let d = [];
// if (a[0] == b[0] || a[0] == c[0]) {
//   d.push(a[0]);
// }
// if (a[1] == b[1] || a[1] == c[1]) {
//   d.push(a[1]);
// }
// console.log(d);

// #8 *********************
//  let year = 2000;
//  if (year % 4 != 0) {
//    console.log(365);
//  } else if (year % 100 != 0) {
//    console.log(366);
//  } else if (year % 400 != 0) {
//    console.log(365);
//  } else {
//    console.log(366);
//  }

// #9 *********************
// let num;
// if (num === 0) {
//   console.log('нулевое число');
// } else if (num > 0 && num % 2 != 0) {
//   console.log('положительное нечетное число');
// } else if (num > 0 && num % 2 == 0) {
//   console.log('положительное четное число');
// }

// #10 *********************
// let num = 301;
// if (num % 2 != 0) {
//   if (1 <= num && num < 10) {
//     console.log('нечетное однозначное число');
//   } else if (10 <= num && num < 100) {
//     console.log('нечетное двузначное число');
//   } else if (100 <= num && num <= 999) {
//     console.log('нечетное трехначное число');
//   }
// }

// if (num % 2 === 0) {
//   if (1 <= num && num < 10) {
//     console.log('четное однозначное число');
//   } else if (10 <= num && num < 100) {
//     console.log('четное двузначное число');
//   } else if (100 <= num && num <= 999) {
//     console.log('четное трехначное число');
//   }
// }

// #11 *********************
//  let i = 0;
//  while (++i < 5) alert( i );
// Выведет 1,2,3,4;
// let i = 0;
// while (i++ < 5) alert( i );
// Выведет 1,2,3,4,5

// #12 *********************
//  for (let i = 0; i < 5; i++) alert( i );
// Выведет 0,1,2,3,4;
// for (let i = 0; i < 5; ++i) alert( i );
// Выведет 0,1,2,3,4;

// #13 *********************
// for (let i = 2; i <= 10; i=i+2) {
//   console.log(i);
// }

// #14 *********************
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++
// }

// #15 *********************
// do {
//   num = prompt("Введите число, большее 100?", );
// } while (num <= 100 && num);

// #16 *********************
// let n = 10;
// nextPrime:
// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
//   alert( i );
// }

// #17 *********************
// let num1 = prompt('ввести число №1', '');
// let num2 = prompt('ввести число №2', '');
// console.log((Number(num1) + Number(num2)) / 2);

// #18 *********************
// let num = prompt('ввести число');
// alert(Math.sqrt(num));

// #19 *********************
// let num1 = prompt('ввести число №1');
// let num2 = prompt('ввести число №2');
// let num3 = prompt('ввести число №3');
// alert(Math.max(num1, num2, num3) - Math.min(num1, num2, num3));

// #20 *********************
// let num = prompt('ввести число');
// if (num % 2 !=0) {
//   alert('нечетное');
// } else {
//   alert('четное');
// }

// #21 *********************
// let num = prompt('ввести число < 100');
// if (1 <= num && num < 10) {
//   console.log('однозначное число', num);
// } else if (10 <= num && num < 100) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10
//     num = Math.floor(num / 10)
//   }
//   console.log('двузначное число', 'сумма чисел:', sum);
// }

// #22 *********************
// let num = prompt('1 (перевести дюймы в сантиметры)\n 2 (перевести сантиметры в дюймы) \n Введите число 1 или 2');
// if (num == 1) {
//   let size = prompt('Введите количество дюймов');
//   alert(size * 2.54 + ' сантиметров');
// }
// if (num == 2) {
//   let size = prompt('Введите количество сантиметров');
//   alert(size / 2.54 + ' дюймов');
// }

// #23 *********************
// let userName = prompt('Кто хочет стать миллионером?');
// alert('Ответь на первый вопрос');
// let Question1 = prompt('Первый вопрос?', '');
// if (Question1 == 'true') {
//   alert('Вы миллионер!!!');
// } else {
//   alert('Вы проиграли!!!');
// }

// #24 *********************
// let num = prompt('Ввести трёхзначное число');
// if (num % 2 == 0) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10
//     num = Math.floor(num / 10)
//   }
//   alert(sum);
// }
// if (num % 2 != 0) {
//   let multiply = num.toString();
//   alert(multiply[0] * multiply[1] * multiply[2]);
// }

// #25 *********************
// let num1 = prompt('ввести число №1');
// let num2 = prompt('ввести число №2');
// let num3 = prompt('ввести число №3');
// if (
//   (Number(num1) + Number(num2)) > Number(num3)
//   && (Number(num2) + Number(num3)) > Number(num1)
//   && (Number(num1) + Number(num3)) > Number(num2)
// ) {
//   alert('Вот это у тебя треугольник))');
// } else {
//   alert('Что-то пошло не так((');
// }

// #26 *********************
// let x = 4;
// let y = 9;
// let R = 10;
// let L = Math.sqrt(x * x + y * y);
// let result = L > R ? "Точка А лежит вне окружности" : "Точка А лежит внутри окружности";
// alert(result);

// #27 *********************
// let user = {
//   name: 'Juhn',
//   surname: 'Smith.',
// }
// user.name = 'Pete';
// delete user.name;

// #28 *********************
// const user = {
//   name: "John"
// };
// user.name = "Pete"; //это будет работать!
// Можно изменить объект, объявленный с помощью const!

// #29 *********************
// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// }
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// console.log(sumSalaries(salaries));

// #30 *********************
// Потому что i никогда не станет равным 10






