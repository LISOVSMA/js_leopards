"use strict";
//? Деструктуризація об'єктів

// const user = {
//   firstName: "John",
//   lastName: "Reese",
//   age: 30,
//   isAdmin: true,
// };

//TODO:==========================
/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/

// const { lastName, firstName, ...anotherProps } = user;

// console.log("lastName: ", lastName);
// console.log("firstName: ", firstName);
// console.log("anotherProps: ", anotherProps);

//TODO:==========================
//?  Глибока деструктуризація об'єктів

// const team = {
//   number: 4,
//   flag: "./images/flag.jpg",
//   employees: ["Anton", "Oleg", "Ronnie", "Carr"],
//   langs: {
//     original: "uk",
//     secondary: "en",
//   },
// };

// const {
//   number,
//   flag,
//   employees,
//   langs: { original: teamLangOriginal, secondary: teamLangSecondary },
// } = team;

// console.log("number: ", number);
// console.log("flag: ", flag);
// console.log("employees: ", employees);

// console.log("teamLangOriginal: ", teamLangOriginal);
// console.log("teamLangSecondary: ", teamLangSecondary);

//TODO:==========================
//? Деструктуризація масивів

// const names = ["Herbert Todd", "Belle Soto", "Roger Marsh", "Ethan Lindsey"];

// const [user1, user2] = names;

// console.log(user1);
// console.log(user2);
// TODO:==========================
// const rgb = [210, 100, 50];

// const [red, , blue] = rgb;

// console.log(red, blue);

//TODO:==========================
/*
? У нас є об'єкт salaries із зарплатами:
? Створіть функцію topSalary (salaries), яка повертає ім'я найвищого працівника.
?
? Якщо об'єкт salaries порожній, потрібно повернути null.
? Якщо кілька високооплачуваних співробітників можна повернути будь-якого з них.
? P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
//   Maria: 1000,
// };

/*
[['John', 100], ['Pete', 300], ['Mary', 250]] // Object.entries;
*/

//? Створіть функцію.....

// const topSalaries = function (salaries) {
//   //   console.log(!Object.keys(salaries).length);
//   if (!Object.keys(salaries).length) {
//     return null;
//   }
//   const newArray = Object.entries(salaries);
//   //   console.log(newArray);
//   let max = newArray[0][1];
//   //   console.log(max);
//   let employeesName = newArray[0][0];
//   //   console.log(employeesName);
//   for (const [name, salaries] of newArray) {
//     if (salaries > max) {
//       max = salaries;
//       employeesName = name;
//     }
//   }
//   return employeesName;
// };

// console.log(topSalaries(salaries));
