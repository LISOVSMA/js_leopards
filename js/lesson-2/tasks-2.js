"use strict";
// ! Array
//TODO:=========task-1=================
//Повернути відсортовану копію масиву за зростанням
//не змінюючи вихідний масив
//не використовувати Array.prototype.sort()

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function copySortArray(array) {
//   const newNumbers = [...array];
//   // console.log(newNumbers === numbers);
//   for (let i = 0; i < newNumbers.length; i += 1) {
//     for (let j = 0; j < newNumbers.length; j += 1) {
//       if (newNumbers[j] > newNumbers[j + 1]) {
//         let temp = newNumbers[j];
//         newNumbers[j] = newNumbers[j + 1];
//         newNumbers[j + 1] = temp;
//       }
//     }
//   }
//   return newNumbers;
// }

// copySortArray(numbers);

// console.log("Копія масиву:", copySortArray(numbers)); //  [2, 3, 5, 7, 12, 24, 35, 56, 80]
// console.log("Початковий масив:", numbers); // [2, 5, 35, 56, 12, 24, 7, 80, 3]

//TODO:=========task-2=================
//* Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage() {
//   const args = arguments;
//   console.log(args);
//   let sum = 0;
//   let totalCounte = 0;
//   for (const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     }
//     sum += arg;
//     totalCounte += 1;
//   }
//   return Math.round(sum / totalCounte);
// }

// console.log(calculateAverage(10, 10, 20, 200, 310, 15, "text", [1, 2, 3])); // 60

//! Object
//TODO:=========task-3=================
// 4. Виправте помилки, щоб код працював
// const product = {
// price: 5000,
//   showPrice() {
//   return this.price ;
// },
// };
// console.log(product.showPrice());

//TODO:=========task-4=================
//* Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };
// console.log(getBool(obj, 'car')); // true

//TODO:=========task-5=================
const filmoteka = [
  {
    id: 1,
    title: "Duna",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 10,
    actors: [
      "Amelia Gibson",
      "Cameron Clayton",
      "Viola Vasquez",
      "Lula Collins",
      "Victor Nichols",
    ],
    adult: false,
  },
  {
    id: 2,
    title: "Venom",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 8,
    actors: [
      "Inez Greer",
      "Barry Curtis",
      "Blanche Rios",
      "Glen Perry",
      "Logan Powers",
    ],
    adult: true,
  },
  {
    id: 3,
    title: "Luca",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 9,
    actors: [
      "Marguerite Gibbs",
      "Lora Alvarez",
      "Jorge Simpson",
      "Thomas Hall",
      "Darrell Hunter",
    ],
    adult: false,
  },
  {
    id: 4,
    title: "Free Guy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 6,
    actors: [
      "Calvin Andrews",
      "Mamie Myers",
      "Madge Townsend",
      "Ralph Kim",
      "Jorge Reese",
    ],
    adult: true,
  },
  {
    id: 5,
    title: "Saw",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 7,
    actors: [
      "Adele Marsh",
      "Melvin Burgess",
      "Jesus Reese",
      "Harriet Moreno",
      "Curtis Cox",
    ],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.
const getAllTitlesOfFilms = (films) => films.map(({title}) => title);
// console.log("УСІ ФІЛЬМИ :", getAllTitlesOfFilms(filmoteka));

//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.
const findFilmByName = (films, filmTitle) =>
  [...films].find((film) => film.title === filmTitle);
// console.log(getAdultFilms(filmoteka, 'Duna'));

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.
const getAdultFilms = (films) => films.filter(({adult}) => adult);
// console.log(getAdultFilms(filmoteka));

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.
const getNotAdultFilms = (films) => films.filter((film) => !film.adult);
// console.log(getNotAdultFilms(filmoteka));
//TODO:=========task-6=================

//* Напишіть функцію updateObject, яка приймає об'єкт та повертає
//  новий об'єкт без вказаного параметра. Очікуваний результат ({a: 1, b: 2}, 'b') => {a: 1}
// let updateObject = { a: 1, b: 2 };
// const { b, ...rest } = updateObject;
// updateObject = rest;
// console.log(updateObject);
// https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript

//TODO:=========task-7=================
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

let updateObject = { a: 1, b: 2, c: 3 };
const { a, b, ...rest } = updateObject;
updateObject = rest;

// console.log(updateObject);

//TODO:=========task-8=================
//* Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]
// https://question-it.com/questions/245501/kak-razbit-obekt-js-na-massiv-par-kljuch-znachenie

const user = {
  name: "John",
  surName: "Stones",
  age: 20,
  hobby: "tenis",
  haveCar: true,
  merried: false,
};
// Object.keys(user).forEach(key => { console.log("key:",key, "value:",user[key]) });

//! Array methods
//TODO:=========task-9=================
const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

//? Отримати масив імен всіх користувачів (поле name).
const getAllName = [...users].map((user) => user.name);
// console.log(getAllName);

//? Отримати масив об'єктів користувачів за кольором очей (eyeColor).
const getUsersByColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);
// console.log(getUsersByColor(users, 'brown'));
// console.log(getUsersByColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//? Отримати масив імен користувачів за статтю (поле gender)
const getUsersWithGender = (users, gender) =>
  users.filter((user) => user.gender === gender);
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//? Отримати масив тільки неактивних користувачів (поле isActive).
const getInactiveUsers = (users) => users.filter((user) => !user.isActive);
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//? Отримати масив користувачів віком від min до max
const getUsersWithAge = (users, minAge, maxAge) =>
  users.filter((user) => user.age > minAge && user.age < maxAge);
// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//? Отримати загальну суму балансу (поле balance) всіх користувачів.
const calculateTotalBalance = (users) => {
  return [...users].reduce(
    (totalBalance, balanc) => totalBalance + balanc.balance,
    0
  );
};
// console.log(calculateTotalBalance(users)); // 20916

//? Масив імен всіх користувачів, у яких є товарищь із зазначеним ім'ям.
const getUsersWithFriend = (users, friendName) =>
  users.filter((user) => user.friends.indexOf(friendName) !== -1);
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//? Масив імен (поле name) людей, відсортованих залежно кількості їх друзів (поле friends)
const getNamesSortedByFriendsCount = (users) => {
  return [...users]
    .sort((first, second) => first.friends.length - second.friends.length)
    .map((user) => user.name);
};
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//? Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
const getSortedUniqueSkills = (users) => {
  return [...users]
    .flatMap((user) => user.skills)
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .sort((a, b) => a.localeCompare(b));
};
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

//TODO:=========task-10==home-work===============
// У кожному масиві якщо унікальний рядок, у якому не повторюються літери. Знайдіть та виведіть цей рядок.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

// findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']); // === 'foo'
// findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf']); // === 'abcd'
// findUniq(['qwe', 'camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac']); // === 'qwe'





//? Тут на перебираючи методи масиву
// Є масив віку собак
// 1.Треба написати функцію calcAverageHumanAge, яка приймає масив віку собак (ages) і робить наступне
// 2.Переводить  вік собак на людський вік, використовуючи наступну формулу: якщо вік собаки <= 2 роки, то humanAge = 2 * dogAge.Якщо вік собаки > 2 років, то humanAge = 16 + dogAge * 4
// 3.Виключає всіх собак, які мають менше 18 людських років (тобто залишає собак мінімум від 18 років)
// 4.Рахує середній людський вік усих собак

// white_check_mark
// eyes

const ages = [5, 2, 4, 1, 15, 8, 3];
// const ages2 = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge = (ages) =>
  [...ages]
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((totalAge,age, i, array) => totalAge + age / array.length,0);

// console.log(calcAverageHumanAge(ages));


