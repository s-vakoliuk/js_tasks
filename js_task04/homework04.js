// - створити функцію яка обчислює та повертає площу прямокутника
// function areaRectangle(a, b) {
//     let squareRectangle = a * b;
//     return squareRectangle;
// }
// console.log(areaRectangle(10, 10));
// document.write('Площа прямокутника: ' + areaRectangle(10, 10));

// - створити функцію яка обчислює та повертає площу круга

//  function areaCircle(r) {
//     let radius = r ** 2;
//     let squareCircle = 3.14 * radius;
//     return squareCircle;
// }
// console.log(areaCircle(10));
// document.write('Площа круга: ' + areaCircle(10));

//- створити функцію яка обчислює та повертає площу циліндру S= 2πRH

//  function areaCylinder(r, h) {
//     let squareCylinder = 2 * 3.14 * r * h;
//     return squareCylinder;
// }
// console.log(areaCylinder(10,10));
// document.write('Площа циліндра: ' + areaCylinder(10, 10));

//- створити функцію яка приймає масив та виводить кожен його елемент

// let array = [24,9,2021,'start course', 'okten'];
// function indexArray (array) {
//     for (let index = 0; index < array.length; index++) {
//         document.write(" ",array[index]);
//     }
// }
// indexArray(array);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function createParagraph (text) {
//     for (let i = 0; i <= 10; i++) {
//         document.write(`<p>${i} - ${text}</p>`);
//     }
// }
// createParagraph('Абзац тексту');

//  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function createUl(arg) {
//     document.write(`<ul>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`</ul>`);
//     }
//     createUl('Список');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createUlDinamic(text, number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// createUlDinamic('список li', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let anyArray = [true,'Serhii', 2005, 'Natalia'];
// function primitives (array){
//     document.write(`<ol>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ol>`);
// }
// primitives(anyArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

 //  let newArray = [{id: 1, name: 'Serhii', age: 40}, {id: 2, name: 'Natalia', age: 40}, {id: 3, name: 'Mykhas', age: 15}, {id: 4, name: 'Perlynka', age: 12}];
// function objArray(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
//     }
// }
// objArray(newArray);