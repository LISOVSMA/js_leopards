//! Callback
//TODO:=================01====================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

//TODO:=================02=============================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

//TODO:=================03=============================
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику
// Функція makeDish має логірувати "<shef> is cooking <dish>"

//TODO:=================04=============================

// Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(price)

//     },
// }
// product.showPrice()

//TODO:=================05=============================

//Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price)
//     },
// }

// function callAction(action) {
//     action()
// }

// callAction(product.showPrice)

//TODO:=================06=============================
//Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//Яка застосовується до кожного елементу масиву.
//Функція each повинна повернути новий масив, елементами
//якого будуть результати виклику callback
//callback функції повинна множити елементи на 2

const array = [3, 5, 6, 34, 8, 83, 12, 34]

//TODO:==================07============================
//Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка вважає та логує кількість своїх викликів

//TODO:==================08============================
//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає буль true, якщо рядок збігається зі збереженим
//паролем і false - якщо не збігається

//TODO:====================09==========================
//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.

//! Методи масивів
//TODO:=========task-10=================
// !find
// ? Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12]

//TODO:==========================

const users = [
    {
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        id: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
]

//TODO:==========================
// Отримати масив імен всіх користувачів (поле name).

//TODO:==========================
// Отримати масив об'єктів користувачів за кольором очей (eyeColor).

// console.log(getUsersByColor(users, 'brown'))
// console.log(getUsersByColor(users, 'blue')) // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//TODO:==========================
// Отримати масив імен користувачів за статтю (поле gender)

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//TODO:==========================
// Отримати масив тільки неактивних користувачів (поле isActive).

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//TODO:==========================
// Отримати масив користувачів віком від min до max

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//TODO:==========================
// Отримати загальну суму балансу (поле balance) всіх користувачів.

// console.log(calculateTotalBalance(users)); // 20916

//TODO:==========================
// Масив імен всіх користувачів, у яких є товарищь із зазначеним ім'ям.

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//TODO:==========================
// Масив імен (поле name) людей, відсортованих залежно кількості їх друзів (поле friends)

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//TODO:==========================
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

//TODO:==============================================
/// Даний словник із міст та дат виступів рок-групи

/// Необхідно перетворити словник (key-value) на масив із назв міст
/// Виведення міст має бути у хронологічному порядку
/// Міста у яких концерт вже пройшов потрібно виключити
/// Результат ["Умань", "Харків", "Одеса"]

// const concerts = {
//     Київ: new Date('2020-04-01'),
//     Умань: new Date('2023-07-02'),
//     Вінниця: new Date('2020-04-21'),
//     Одеса: new Date('2023-07-15'),
//     Хмельницький: new Date('2020-04-18'),
//     Харків: new Date('2023-07-10'),
// }

// console.log(concertsToArray(concerts))

//TODO:=========task-11=================

//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// const polly = new User({ userName: 'Polly', age: 30, numbersOfPost: 15 })
// console.log(polly)
// polly.getInfo()

//TODO:=========task-12=================

//Напиши функцію конструктор Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

// const storage = new Storage(['apple', 'banana', 'mango'])

// console.log(storage)
// console.log(storage.removeItem('apple'))

//TODO:=========task-13=================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// const client = new Client('mango', 'mango@gmail.com')

// client.changeEmail = 'mango555@gmail.com'
// console.log(client.getClientData.email)
// client.changeLogin = '12345'
// console.log(client.getClientData.login)

//TODO:=========task-14=================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// const note1 = new Notes()

// note1.addNote({ text: 'Note1', priority: Notes.Priority().LOW })
// note1.addNote({ text: 'Note2', priority: Notes.Priority().LOW })
// console.table(note1.items)

// note1.removeNote('Note1')
// console.table(note1.items)

// note1.updatePriority({ text: 'Note2', newPriority: Notes.Priority().HIGHT })
// console.table(note1.items)

//TODO:=========task-15=================
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

//TODO:=========task-16=================
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
