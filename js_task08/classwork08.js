// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює класс який впливає на колір тексту елементу з id main_header на назву групи в якій ви вчитесь (mon-year)

// let elementById = document.getElementById('main_header');
// elementById.classList.add('september 2021');

// b) робить шириниу елементу ul 400px

// let elementsByTagName = document.getElementsByTagName('ul');
// elementsByTagName.style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementsByClassName = document.getElementsByClassName('linkList');
// for (const item of elementsByClassName) {
//     item.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// function addText(text) {
//     let elementsByClassName = document.getElementsByClassName('listElement2');
//     elementsByClassName.innerText = text;
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let lis = document.getElementsByTagName('li');
// for (const li of lis) {
//     li.style.background = 'silver';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let aList = document.getElementsByTagName('a');
// for (const a of aList) {
//     a.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let aList = document.getElementsByTagName('a');
// for (const a of aList) {
//     if (a.innerText === 'link3') {
//         a.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aList = document.getElementsByTagName('a');
// for (const a of aList) {
//     a.classList.add(a.innerText);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeadersList = document.getElementsByClassName('sub-header');
// for (const item of subHeadersList) {
//     item.style.background = prompt('enter color?');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let subHeaders = document.getElementsByClassName('sub-header');

// for (const subHeader of subHeaders) {
//     if (subHeader.innerText === 'content 2 segment') {
//         subHeader.style.color = prompt('color?');
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// document.getElementsByClassName('content_1').innerText = prompt();

// l) отримати елементи p та змінити їм padding на 20px

// let pars = document.getElementsByTagName('p');
// for (const p of pars) {
//     p.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let elementsByClassName = document.getElementsByClassName('text2');
// for (const item of elementsByClassName) {
//     elementsByClassName.innerText = 'sep-2021';
// }