// Написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив.
// Масив вивести в консоль


// Алгоритм дій наступний
// Отримати всі елементи в документі за допомогою querySelectorAll.
// Потім переглянути їх, отримуючи кожен клас, розбиваючи його на пробіли та додаючи нові до масиву arrayClasses
//
// let arrayClasses = [];
// let allElements = document.querySelectorAll('*');
//
// for (let i = 0; i < allElements.length; i++) {
//   let classes = allElements[i].className.toString().split(/\s+/);
//   for (let j = 0; j < classes.length; j++) {
//     let cls = classes[j];
//     if (cls && arrayClasses.indexOf(cls) === -1)
//       arrayClasses.push(cls);
//   }
// }

// console.log(arrayClasses);

function countClassName () {
    let arrayClasses = [];
    let allElements = document.querySelectorAll('*');
    console.log(arrayClasses);
    for (let i = 0; i < allElements.length; i++) {
        let classes = allElements[i].className.toString().split(/\s+/);
        for (let j = 0; j < classes.length; j++) {
            let cls = classes[j];
            if (cls && arrayClasses.indexOf(cls) === -1)
                arrayClasses.push(cls);
        }
    }
};

countClassName();
