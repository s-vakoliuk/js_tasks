// - Дано список імен.
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let name = (string, symbol) => {
//     let newArr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '));
//     }
// }
// name(n1, '.');
// name(n2, '-');
// name(n3, '_');

// - Створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let random = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray;
// };
// let result = random(10, 100);
// console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// 1 варіант використовуючи попередню функцію
// result.sort(( a, b ) =>  a - b);
// console.log(result);
// result.sort(( a, b ) =>  b - a);
// console.log(result);

// 2 варіант з новою функцією

// let sortRandom = (length, num) => {
// let emptyArray = [];
// for (let i = 1; i < length; i++) {
//     emptyArray.push(Math.floor(Math.random() * num));
// }
// return emptyArray.sort((a, b) => a - b);
// };
// console.log(sortRandom(10, 100));

// - Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let funcFilter = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray.filter(value => value % 2 === 0);
// };
// console.log(funcFilter(10, 100));

// - Створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arrayRandom = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray.map(value => value.toString());
// };
// console.log(arrayRandom(10, 100));

// - Створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (arr, direction) => {
//     if (direction === 'asc') return arr.sort((a, b) => a - b);
//     if (direction === 'desc') return arr.sort((a, b) => b - a);
// };
// console.log(sortNums([1, 56, 9, -20, 2345, 34, 98, 5], 'desc') );

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -відсортувати його за спаданням за monthDuration

// let newSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(newSort);

// -відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let newFilter = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5;
// });
// console.log(newFilter);

// - Напишіть функцію cutString(str, n), яка ділитиме рядок на підрядок,що складається з n символів.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (string, n) => {
//      const resultArray = [];
//      while (string.length) {
//          resultArray.push(string.substr(0, n));
//          string = string.slice(n);
//      }
//      console.log(resultArray);
// };
// document.writeln(cutString('Насолодитися', 3));