// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
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

// - Створити функцію-валідатор для адрес електронної пошти. Без використання регулярного виразу
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символи далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let email='someemail@gmail.com';
// let email='someeMAIL@gmail.com';
// let email='someeMAIL@i.ua';
// let email='some.email@gmail.com';

// function emailIsValid (email) {
//     let symbolAt=email.lastIndexOf('@');
//     let symbolDot=email.lastIndexOf('.');
//     return (symbolAt<symbolDot&&symbolAt>0&&email.lastIndexOf('@@')==-1&&symbolDot>2&&(email.length-symbolDot)>2);
// }
// console.log(emailIsValid(email));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономія це наука про небесні об'єкти";
// document.writeln(count(str, symb)) // 4

// let string = 'Астрономія це наука про небесні обєкти';// шукаємо в цьому рядку
// console.log(string);
// let symbol = "о"; // шукаємо підрядок o
// function symbolCount(string, symbol){
//  let stringsearch = 0;
//  for (let position = 0; position < string.length; position++){
//      if (string.charAt(position) === symbol){
//          stringsearch += 1;
//      }
//  }
//  return stringsearch;
// }
// console.log(symbolCount(string, symbol));
// document.writeln(symbolCount(string, symbol));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжіння прикладена до центру мас тіла";
// document.writeln(cutString(str, 5)) // 'Сила тяжіння прикладена до центру'

// let string = 'Сила тяжіння прикладена до центру мас тіла';// шукаємо в цьому рядку
// console.log(string);
// let n = 5;
//
// let cutString = (string, n) => {
//     let newString = '';
//     let stringArrayStart = string.split(' ');
//     let stringArrayEnd = stringArrayStart.slice(0, n);
//     newString = stringArrayEnd.join(' ');
//     return (newString);
// }
// console.log(cutString(string, n));
// document.writeln(cutString(string, n));

// - Є масив
let coursesArray = [
             {
                 title: 'JavaScript Complex',
                 monthDuration: 5,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
             },
             {
                 title: 'Java Complex',
                 monthDuration: 6,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'angular',
                     'aws',
                     'docker',
                     'git',
                     'java core',
                     'java advanced']
             },
             {
                 title: 'Python Complex',
                 monthDuration: 6,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'angular',
                     'aws',
                     'docker',
                     'python core',
                     'python advanced']
             },
             {
                 title: 'QA Complex',
                 monthDuration: 4,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
             },
             {
                 title: 'FullStack',
                 monthDuration: 7,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'react',
                     'angular',
                     'aws',
                     'docker',
                     'git',
                     'node.js',
                     'python',
                     'java']
             },
             {
                 title: 'Frontend',
                 monthDuration: 4,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
             }
         ];
console.log(coursesArray);
console.log('=== Вхідний масив ===');
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// coursesArray.sort(
//    function(a, b) {
//       if (a.modules === b.modules) {
//          // Price is only important when cities are the same
//          return b.modules - a.modules;
//       }
//       return b.modules > a.modules ? 1 : -1;
//    });
//
// console.log(coursesArray);

//
function byField(field) {
  return (a, b) => a[field.length] > b[field.length] ? 1 : -1;
}

coursesArray.sort(byField('modules'));
coursesArray.forEach(key => console.log(key.modules));




// let newSortArray = coursesArray.filter(function(item,index,array){
//     return item.modules;
// });
// console.log(newSortArray);

// coursesArray.forEach(function (arrayItems) {
//     console.log(coursesArray[0]);
// });


// let newSortArray = coursesArray.find(function(item,index,array){
//     return item.modules;
// });
// console.log(newSortArray);




