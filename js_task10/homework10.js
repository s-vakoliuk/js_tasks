// - Створити будь-який елемент з id = text.
// Використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникав елемент з id="text".

// // 1 варіант
// let click = document.getElementById('text');
// let button = document.getElementById('button1');
// button.onclick = function () {
//     click.style.display = 'none';
// }

// 2 варіант
// let click = document.getElementById('text');
// let button = document.getElementById('button1');
// document.getElementById('text').hidden = false;   // ящо hidden = false, то текст буде видно
// document.getElementById('button1').onclick = function () {
// }
// button.onclick = function () {
//     click.style.display = 'none';
// }

// - Створіть кнопку, яка буде приховувати сама себе при кліку на неї

// let button2 = document.getElementById('button2');
// button2.onclick = function () {
//     this.style.display="none";
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше ніж 18, та повідомити про це користувача

// document.getElementById('button3').onclick = function () {
//     let age = document.getElementById('userAge').value;
//     if (!age) {
//         alert('Ви не ввели свого вік');
//     } else if (+age < 18) {
//         alert('Вибачте, вам мало років');
//     } else {
//         alert('Вітаємо на нашому сайті');
//     }
// }


// - Створіть меню, яке відкривається/згортається при натисканні

// let menuElement = document.querySelector('.menu');
// let titleElement = menuElement.querySelector('.title');
// titleElement.onclick = function () {
//     menuElement.classList.toggle('hidden');
// };

// - Створити список коментарів, приклад об'єкта коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожен в своєму блоці.
// Додайте кожному коментарю по кнопці для згортання його в body

let comments = [
    {name: 'Максим', body: 'Вчи English'},
    {name: 'Іван', body: 'Досить сидіти, вже пізно'},
    {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
    {name: 'Іра', body: 'Воно, тобі треба?'},
];

let divFather = document.createElement('div');
for (const item of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');

    h3.innerText = item.name;
    p.innerHTML = item.body;
    btn.innerHTML = 'Закрий мене'
    btn.onclick = () => {
        p.classList.add('pHidden');
            // btn.previousElementSibling.classList.add('pHidden');  // 2варінт який звертаєтсья до ПОПЕРЕДНЬОГО елементу перед btn
        }
        div.append(h3, p, btn);
        divFather.append(div, hr);
    }
document.body.appendChild(divFather)