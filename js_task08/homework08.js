// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName:
// -- отримує текст з параграфа з id "content"

// let contentID = document.getElementById('content');
// console.log(contentID.innerText);

// -- отримує текст з блоку з id "rules"

// let rules = document.getElementById('rules');
// console.log(rules.innerText);
// console.log(document.getElementById('rules').innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

// let pContent = document.getElementById('content');
// pContent.innerText = 'Привіт групі september 2021';

// -- замініть текст параграфа з id 'rules' на будь-який інший

// let elementById = document.getElementById('rules');
// elementById.innerText = 'Привіт групі september 2021';

// -- змініть кожному елементу колір фону на червоний

// let children = document.body.children;
// for (const child of children) {
//     child.style.background = 'red';
// }


// -- змініть кожному елементу колір тексту на синій
// let children = document.body.children;
// for (const child of children) {
//     child.style.color = 'blue';
// }

// let all = document.querySelectorAll('*');// вертає список елементів в межах всього документу
// for (const elem of all) {
//     elem.style.background = 'red';
//     elem.style.color = 'blue';
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let element = document.getElementById('rules');
// console.log(element.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let fc_rules = document.getElementsByClassName('fc_rules');
// for (const fcRule of fc_rules) {
//     fcRule.style.color = 'red';
// }

