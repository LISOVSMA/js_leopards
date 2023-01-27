// 1. Напишіть програму, яка запитає у користувача "Enter the number of minutes to format"

//число (кількість хвилин) і виведе в консоль

//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const globalMinutes = 70;
// const hours = Math.floor(globalMinutes / 60);
// const modificateHours = String(hours).padStart(2, 0);
// const minutes = globalMinutes % 60;
// const modificateMinutes = String(minutes).padStart(2, 0);
// const time = `${modificateHours}:${modificateMinutes}`;
// console.log(time);

//2. Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню

// const max = 50;

// const min = 23;

// for (let i = max; i >= min; i -= 1){

//     if (i % 2 === 0) {
//         console.log("парні : " ,i);
//     }
// }

//3. Напишіть код, який буде запитувати логін за допомогою prompt "Hello, please enter your login!"

// і виводити результат у консоль браузера

//Якщо під час вводу login нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"

//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password)

//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"

//Пароль перевіряти так:

//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"

//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"

//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"

// const loginInput = prompt("Hello, please enter your login!");

// if (loginInput){
//     if (loginInput !== 'admin') {
//         alert('Goodbye');
//    } else {
//      const passwordInput = prompt('Please enter your password');
//     if (passwordInput) {
//         if (passwordInput !== 'adminPassword') {
//             alert('Goodbye');

//         } else {
//             alert('Hello');
//         }

//     } else {
//         alert('Authorization has been cancelled');
//     }
// }
// }  else {
//     alert('Authorization has been cancelled');

// }

//4. При завантаженні сторінки користувачу у prompt пропонується ввести число 'Hello, enter please the number'.

// Введене число додається до значення змінної total.

//Операція введення числа продовжується до тих пір, поки користувач не натисне кнопку Cancel у prompt.

//Після того, як користувач припинив серію введень і натиснув кнопку Cancel, показати alert з рядком "The total sum of the entered numbers is [total]."

//Робити перевірку, що користувач ввів саме число, а не довільний рядок не потрібно.

// let inputValue = prompt("Hello, enter please the number");
// let total = 0;

// while (inputValue) {
//   total += Number(inputValue);
//   inputValue = prompt("Hello, enter please the number");
// }
// alert(`The total sum of the entered numbers is ${total}.`);

//5. Напишіть цикл, який пропонує ввести

//число більше 100 через prompt 'Hello, enter please the number greater then 100.' та виводить його у alert, якщо умова виконана

//Якщо користувач ввів інше число, то попросити ввести ще раз і так далі.

//Цикл повинен запитувати число, поки користувач не введе число більше 100.

// Якщо користувач натисне кнопку відміни у prompt, то у alert треба вивести 'Goodbye'.

// let input = prompt("Hello, enter please the number greater then 100.");

// while (input <= 100 && input) {
//   input = prompt("Hello, enter please the number greater then 100.");
// }
// if (input) {
//   alert(input);
// } else {
//   alert("Goodbye");
// }
