// - створити функцію, яка якщо приймає один аргумент, просто виводить його, якщо два аргументи - складає або конкатенує їх між собою.
//Приклад обчислення площі круга S = πr2
// function calcSCircle(radius,other) {
//     let squareCircle = 3.14 * (radius=(radius+other) ** 2);
//     return squareCircle;
// }
// console.log('Площа кола: ',calcSCircle(10,0));
// document.write('Площа кола: ' + calcSCircle(10,0));

// - створити функцію яка приймає два масиви та додає значення елементів з однаковими індексами та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
//
// function calcSumArrays(array01,array02) {
//     let array03=[];
//     for (let index = 0; index <= array01.length-1; index++) {
//         array03[index] = array01[index] + array02[index];
//     }
//     return array03;
// }
// console.log('Новий масив: ',calcSumArrays([1,2,3,4],[2,3,4,5]));
//
// - Створити функцію яка приймає масив будь яких об'єктів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// let user=[{name: 'Dima', age: 13}, {model: 'Camry'}];
// function calcFieldsObject(array){
//     let keysArray = [];
//     let key=0;
//     for (let index of array) {
//         for (key in index) {
//             keysArray[key]=key;
//         }
//     }
//     return keysArray;
// }
// console.log(calcFieldsObject(user));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let user=[{name: 'Dima', age: 13}, {model: 'Camry'}];
// function calcFieldsObject(array){
//     let keysArray = [];
//     let value=0;
//     let key=0;
//     for (let index of array) {
//         for (key in index) {
//             value = index[key];
//             keysArray[value]=value;
//             }
//         }
//     return keysArray;
// };
// console.log(calcFieldsObject(user));