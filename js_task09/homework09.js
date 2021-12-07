// - Є масив: ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку menu
// Завдання робити через цикли.

const menuArray = ['Main','Products','About us','Contacts'];
const menuDiv = document.getElementsByClassName('menu')[0];
menuArray.forEach(item=>{
    const li = document.createElement('li');
    li.innerText = item
    menuDiv.appendChild(li);
})
// menuDiv.style.display = 'flex'

//---------------------------------------------------------------
document.body.appendChild(document.createElement('hr'));
//---------------------------------------------------------------

// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const div = document.createElement('div');
div.classList.add('wrap','collapse', 'alpha', 'beta');
div.style.backgroundColor = 'skyblue';
div.style.color = 'yellow';
div.style.fontSize = '40px';
div.innerText = 'Hello september 2021';
document.body.appendChild(div);

const div2 = div.cloneNode(true);
document.body.appendChild(div2);


//----------------------------------------------------------------
document.body.appendChild(document.createElement('hr'));
//----------------------------------------------------------------

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach(value => {
    const div = document.createElement('div');
    let text = '';
    for (let key in value) {
        text+=`- ${key}: ${value[key]}`;
    }
    div.innerText = text.slice(2);
    document.body.appendChild(div);
});

//---------------------------------------------------------------
document.body.appendChild(document.createElement('hr'));
//---------------------------------------------------------------

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.


coursesAndDurationArray.forEach(value => {
    const div = document.createElement('div');
    div.classList.add('item')
    const h1 = document.createElement('h1');
    h1.classList.add('heading')
    const p = document.createElement('p');
    p.classList.add('description');
    h1.innerText = value.title;
    p.innerText = value.monthDuration;
    div.append(h1,p);
    document.body.appendChild(div);
})

//--------------------------------------------------------------
document.body.appendChild(document.createElement('hr'));
//--------------------------------------------------------------