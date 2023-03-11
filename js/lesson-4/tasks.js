//! Методи масивів
//*TODO:===================task-1===========================
/// Даний словник із міст та дат виступів рок-групи

/// Необхідно перетворити словник (key-value) на масив із назв міст
/// Виведення міст має бути у хронологічному порядку
/// Міста у яких концерт вже пройшов потрібно виключити
/// Результат ["Умань", "Харків", "Одеса"]

// const concerts = {
//   Київ: new Date('2020-04-01'),
//   Умань: new Date('2023-07-08'),
//   Вінниця: new Date('2020-04-21'),
//   Одеса: new Date('2023-07-15'),
//   Хмельницький: new Date('2020-04-18'),
//   Харків: new Date('2023-07-10'),
// };

// function concertsToArray(obj) {
//   return Object.keys(obj)
//     .filter(city => concerts[city] > new Date())
//     .sort((a, b) => concerts[a] - concerts[b]);
// }

// console.log(concertsToArray(concerts));

//! класи
//TODO:===================task-2===========================

//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// const User = function (userObject) {
//     const { userName, age, numbersOfPost } = userObject;
//     this.userName = userName;
//     this.age = age;
//     this.numbersOfPost = numbersOfPost;
//     this.getInfo = function () {
//         console.log(`Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`)
//     }

// }

// const polly = new User({ userName: 'Polly', age: 30, numbersOfPost: 15 });
// console.log("polly", polly);
// polly.getInfo();
// const ivan = new User({ userName: 'Ivan', age: 25, numbersOfPost: 20 });
// console.log("ivan", ivan);
// ivan.getInfo();

//TODO:===================task-3===========================

//Напиши функцію конструктор Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

// const Storage = function (arrayIn) {
//     this.items = arrayIn;

// }
// Storage.prototype.getItems = function () {
//     return this.items;
// };
// Storage.prototype.addItems = function (item) {
//     return this.items.push(item);
// };
// Storage.prototype.removeItem = function (item) {
//     const index = this.items.indexOf(item);
//     if (index !== -1) {
//         this.items.splice(index, 1);
//         return this.items
//     }
// };

// const storage = new Storage(['apple', 'banana', 'mango'])

// console.table(storage);
// console.table(storage.removeItem('apple'));
// console.table(storage);
// console.table(storage.addItems('tomato'));
// console.table(storage);

//TODO:===================task-4===========================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//     #login
//     #email
//     constructor(login, email) {
//         this.#login = login
//         this.#email = email
//     }

//     get getClientData() {
//         return {
//             login: this.#login,
//             email: this.#email,
//         }
//     }

//     set changeLogin(login) {
//         this.#login = login
//     }
//     set changeEmail(email) {
//         this.#email = email
//     }

// }

// const client = new Client('mango', 'mango@gmail.com')

// client.changeEmail = 'mango555@gmail.com'
// console.log(client.getClientData.email)
// client.changeLogin = '12345'
// console.log(client.getClientData.login)
// console.log(client);

//TODO:===================task-5===========================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
// updatePriority(text, newPriority)
// class Notes {
//   static Priopity() {
//     return {
//       HIGHT: "hight",
//       LOW: "low"
//     };
//   }
//   constructor() {
//     this.items = [];
//   }
//   addNote(note) {
//     return this.items.push(note);
//   }
//   removeNote(text) {
//     const index = this.items.findIndex((item) => item.text === text);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//       return this.items;
//     }
//   }
//   updatePriority(text, newPriority) {
//     const index = this.items.findIndex((item) => item.text === text);
//     console.log(index);
//     if (index !== -1) {
//       this.items[index] = newPriority;
//     }
//   }
// }
// const note1 = new Notes();
// console.log(Notes.Priopity().HIGHT);

// const low = Notes.Priopity().LOW;
// const hight = Notes.Priopity().HIGHT;

// note1.addNote({ text: "Note1", priority: low });
// note1.addNote({ text: "Note2", priority: low });
// console.table(note1.items);

// note1.removeNote("Note1");
// console.table(note1.items);

// note1.updatePriority("Note2", { text: "Note2", priority: hight });
// console.table(note1.items);

//TODO:===================task-6===========================
// Створи клас для калькулятора, який має такі методи:
// метод number, який набуває початкового значення для наступних операцій
// Геттер, який повертає фінальний результат усіх операцій, проведених із числом
// методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// const calculator = new Calculator()
// const res = calculator
//     .number(10)
//     .add(10)
//     .divide(2)
//     .multiply(4)
//     .substruct(5).result

// console.log(res)

// const res2 = calculator
//     .number(20)
//     .substruct(40)
//     .multiply(-8)
//     .divide(160)
//     .add(20).result

// console.log(res2)

//TODO:===================task-7===========================
// Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel
//Реалізувати завдання за допомогою ES5 прототипів та ES6 класів

// const HIERARCHY_LEVEL = {
//     TOP: 'top',
//     BOTTOM: 'bottom',
// }

// const workerObj = {
//     name: 'Mango',
//     surname: 'Worker',
//     age: 30,
//     position: 'FE developer',
//     salary: 5000,
// }

//ES5

// const worker = new TopLevelWorker(workerObj, HIERARCHY_LEVEL.BOTTOM)
// console.log(worker)
// console.log(worker.getSalary())
// console.log(worker.getHierarchyLevel())

//ES6

// const topWorker = new TopLevelWorkerES6(workerObj, HIERARCHY_LEVEL.TOP)
// console.log(topWorker)
// console.log(topWorker.getSalary())
// console.log(topWorker.getHierarchyLevel())
