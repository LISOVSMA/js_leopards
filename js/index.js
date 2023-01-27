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

  
    

