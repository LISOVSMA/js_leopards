"use strict";

/**
  |============================
  | for...in, Object.keys, Object.values
  |============================
*/

// salaries.Maria = 500;

// console.log(Object.values(salaries));

//! Проблема for in
// hasOwnProperty

// const obj = Object.create(salaries);

// obj.Daniel = 500;

// console.log(obj);

// for (const employeeName in obj) {
//   // if (obj.hasOwnProperty(employeeName)) {
//   //   console.log(employeeName);
//   // }
//   // console.log(employeeName);
// }

//TODO:==========================
//? Виконати завдання - Отримайте суму зарплат усіх працівників

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let total = 0;

// Варіант 1:

// for (const item in salaries) {
//   console.log(item);
//   total += salaries[item];
// }

// Варіант 2:

// const values = Object.values(salaries);
// // console.log(values);
// for (const value of values) {
//   total += value;
// }

// Варіант 3:
// const keys = Object.keys(salaries);
// console.log(keys);
// for (const key of keys) {
//   total += salaries[key];
// }

// console.log(total);
