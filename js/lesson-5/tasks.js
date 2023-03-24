//TODO:====================01==========================
// Натискання на кновку "SHOW ME" має виводити значення з поля введення в alert
// const refs = {
//   btnEl : document.querySelector('.js-alert-button'),
//   inputEl : document.querySelector('.js-alert-input'),
// }
// refs.btnEl.addEventListener('click', onBtnClick )

// function onBtnClick(e) {
//   if(refs.inputEl.value.trim() === ''){
//   return  alert('Введіть значення')
//   }
//   alert(refs.inputEl.value);
// }

//TODO:====================02==========================
// Після натискання на кнопку "SWAP ME" здійснюється обмін вмістом між двома інпутами. Можете натискати на неї кілька разів або вручну змінити вміст інпутів.

// const refs = {
//   btnEl : document.querySelector('.js-swap-button'),
//   inputLeftEl : document.querySelector('.js-left-swap-input'),
//   inputRightEl : document.querySelector('.js-right-swap-input'),
// }

// refs.btnEl.addEventListener('click', (e) => {
//   const firstValue = refs.inputLeftEl.value ;
//   refs.inputLeftEl.value = refs.inputRightEl.value ;
//   refs.inputRightEl.value = firstValue;
// })

//TODO:====================03==========================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", у разі повторного натискання текст знову стає доступним і кнопка набуває початкового вигляду.

// const refs = {
//   passwordBtnEl : document.querySelector('.js-password-button'),
//   passwordInputEl : document.querySelector('.js-password-input'),
// }

// refs.passwordBtnEl.addEventListener('click', (e) => {
//   if(refs.passwordInputEl.type === 'text') {
//     refs.passwordInputEl.type = 'password';
//     refs.passwordBtnEl.textContent = 'Розкрити';
//     return;
//   }
//    refs.passwordInputEl.type = 'text';
//    refs.passwordBtnEl.textContent = 'Приховати';
// })

//TODO:====================04==========================
//  Створіть HTML сторінку з табличкою,
//  яка містить список продуктів.Кожен рядок у
//  табличці повинен містити назву продукту та його ціну.
//  При натисканні на будь - який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.

// const refs = {
//   tableEl: document.querySelector("#productTable"),
//   containerEl: document.querySelector("#productDetails"),
// };

// refs.tableEl.addEventListener("click", (e) => {
//   if (e.target.nodeName !== "TD") {
//     return;
//   }

//   const productName = e.target.parentNode.cells[0].textContent;
//   const productPrice = e.target.parentNode.cells[1].textContent;

//   refs.containerEl.textContent = `Ви вибрали : ${productName} за ${productPrice}`;
// });

//TODO:====================05==========================
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

// const containerEl = document.querySelector('.js-eventThumb');

// document.addEventListener('keydown' , ({key, code})=> {
//  const markup = `
//  <ul class='event-list'>
//  <li>
//  <b>Key</b> : ${key}
//  </li>
//  <li>
//  <b>Code</b> : ${code}
//  </li>
//  </ul>`
//  containerEl.insertAdjacentHTML('afterbegin' , markup)
// });


//TODO:====================06==========================
// Кнопка "Зменшити" робить квадрат меншим на 10 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.


//TODO:====================07==========================
// Навісьте слухач за кліком на глобальний об'єкт window і визначте, коли клік відбувається всередині елемента з класом "place", виведіть в консоль повідомлення "Ви клікнули в цільовий елемент". Коли клік припадає поза зоною елемента, виведіть повідомлення "Це не цільовий елемент". Використайте метод contains.
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

//TODO:====================08==========================
// По кліку на кнопку "Подвоїти" збільшити значення у кожному елементі списку в 2 рази

//TODO:====================09==========================
// При кліку на коло воно має слідувати за курсором. При повторному кліку воно стає в початкове положення.

// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
// https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY

// const circleEL = document.querySelector(".js-circle");

// circleEL.addEventListener("click", onCircleClick);

// function onCircleClick(e) {

//   const item = e.currentTarget;

//   if(item.style.position === "absolute"){
//     window.removeEventListener("mousemove", onMouseMove);
//     item.style.position = "static";
//     return;
//   }
//   item.style.position = "absolute";
//   window.addEventListener("mousemove", onMouseMove);
// }

// function onMouseMove(e) {

//   const left = e.pageX;
//   const top = e.pageY;

//   circleEL.style.top = `${top - 15}px`
//   circleEL.style.left = `${left - 15}px`
// }

//TODO:====================10==========================
// При кліці на кожну з кнопок підсумовуються значення з data-атрибутів. Після натискання на кнопку "Вивести результат" виводиться сума значення, а також статистика з інформацією про те, яка кнопка була натиснута скільки разів.

//TODO:====================11==========================
// Видаліть зі списку ті елементи, які позначені у чекбоксу.

// const refs = {
//   formEl: document.querySelector(".js-checkbox-form"),
// };

// refs.formEl.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const listEl = document.querySelectorAll(".js-checkbox-wrapper");
//   const filterArr = [...listEl].filter((el) => el.lastElementChild.checked);

//   filterArr.forEach((el) => el.remove());
// });

//TODO:====================12==========================
// Дано список людей. Зроби можливість сортування списку за іменем і за прізвищем.

//TODO:====================13==========================
// Даний список людей. Зроби фільтр за ім'ям/прізвищем.

//TODO:====================14==========================
// Клік по кнопці замінює символ з першого поля введення на символ із другого поля введення в усьому тексті. Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.

//TODO:====================15==========================
// Коло має зникати під час наведення на нього.При цьому позиція сусідніх кіл повинна залишатися незмінною.

// const gridEl = document.querySelector(".js-grid");

// gridEl.addEventListener("mouseover", (e) => {
//   if (!e.target.classList.contains("grid-item")) {
//     return;
//   }

//   e.target.style.opacity = 0;
// });

// gridEl.addEventListener("mouseout", (e) => {
//   if (!e.target.classList.contains("grid-item")) {
//     return;
//   }

//   e.target.style.opacity = 1;
// });
