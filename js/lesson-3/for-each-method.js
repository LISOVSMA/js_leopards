// 'use strict'
/*
 * forEach() замість циклів for і for...of для масивів
 */

const numbers = [1, 2, 3, 4, 5];
let summ = 0;
// * 1.Варіант for
// for (let i = 0; i < numbers.length; i += 1 ){
//     summ += numbers[i];
// }
// * 2.Варіант for...of
// for (let number of numbers){
//     summ += number;
// }
// * 3.Варіант forEach
numbers.forEach( el => summ += el )

// console.log(summ);

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

function logItems(items) {
//   console.log(items);

// for (let i = 0; i < items.length; i += 1) {
//  
// }
// items.forEach((el, i) =>  console.log(`${i + 1} - ${el}`))
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

function printContactsInfo({ names, phones } = {}) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

// for (let i = 0; i < nameList.length; i += 1) {
//   console.log(`${nameList[i]}: ${phoneList[i]}`);
// }
nameList.forEach((el,i) => {
    // console.log(`${el}: ${phoneList[i]}`);
})

}
printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function calсulateAverage(...args) {
//   let total = 0;

// for (let i = 0; i < args.length; i+=1) {
//   total += args[i];
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2/
