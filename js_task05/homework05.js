// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника

// const areaRectangle = (a, b) => {
//     return a * b;
// }
// console.log(areaRectangle(10, 10));
// document.write('Площа прямокутника: ' + areaRectangle(10, 10));

// - створити функцію яка обчислює та повертає площу круга
// const areaCircle = (r) => {
//     let radius = r ** 2;
//     return 3.14 * radius;
// }
// console.log(areaCircle(10));
// document.write('Площа круга: ' + areaCircle(10));

//- створити функцію яка обчислює та повертає площу циліндру S= 2πRH
// const areaCylinder = (r, h) => {
//     return 2 * 3.14 * r * h;
// }
// console.log(areaCylinder(10,10));
// document.write('Площа циліндра: ' + areaCylinder(10, 10));

//- створити функцію яка приймає масив та виводить кожен його елемент

// let array = [24,9,2021,'start course', 'okten'];
// const dataArray =  (array) => {
//     for (let i = 0; i < array.length; i++) {
//         document.write(" ",array[i]);
//     }
// }
// dataArray(array);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const createParagraph =  (text) => {
//     document.write(`<p>${text}</p>`);
//     document.write(`<p>${text}</p>`);
//     document.write(`<hr>`);
//     //==========================за допомогою циклу ========================
//     for (let i = 0; i <= 10; i++) {
//         document.write(`<p>${i} - ${text}</p>`);
//     }
// }
// createParagraph('Абзац тексту');

//  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const createUl = (arg) => {
//     document.write(`<ul>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`</ul>`);
// }
// createUl('Список');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const createUlDinamic = (text, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// createUlDinamic('список li', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let anyArray = [true,'Serhii', 2005, 'Natalia'];
// const primitives = (array) => {
//     document.write(`<ol>`) ;
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ol>`);
// }
// primitives(anyArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.

// let newArray = [{id: 1, name: 'Serhii', age: 40}, {id: 2, name: 'Natalia', age: 40}, {id: 3, name: 'Mykhas', age: 15}, {id: 4, name: 'Perlynka', age: 12}];
// const objArray = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
//     }
// }
// objArray(newArray);
