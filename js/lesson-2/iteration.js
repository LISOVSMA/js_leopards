'use strict';

/**
  |============================
  | for...in, Object.keys, Object.values
  |============================
*/
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

//! Проблема for in
// hasOwnProperty

// const obj = Object.create(salaries);

// obj.Daniel = 500;

// console.log(obj);

// for (const employeeName in obj) {
//   if (obj.hasOwnProperty(employeeName)) {
//     console.log(employeeName);
//   }
// }

//TODO:==========================
//? Виконати завдання - Отримайте суму зарплат усіх працівників
