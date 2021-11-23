// - створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)

// function calcMin(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         document.write(num1);
//         console.log(num1);
//     } else if (num2 < num3 && num2 < num1) {
//         console.log(num2);
//         document.write(num2);
//     } else {
//         console.log(num3);
//         document.write(num3);
//     }
// };
// calcMin(400, 200, 100);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function calcMax(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1);
//         console.log(num1);
//     } else if (num2 > num3 && num2 > num1) {
//         console.log(num2);
//         document.write(num2);
//     } else {
//         console.log(num3);
//         document.write(num3);
//     }
// };
// calcMax(400, 200, 100);

// - створити функцію яка повертає найбільше число з масиву

// let numArray = [20,3,4,5,6,10,60,3,40];
// function calcMaxNumArray(array) {
//     let max = array[0];
//     for (const element of array) {
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// document.write(`<h2>Найбільше число з масиву чисел: ${calcMaxNumArray(numArray)}</h2>`);

// - створити функцію яка повертає найменше число з масиву

// let numArray = [20,-3,4,5,-6,10,60,3,40];
// function calcMinNumArray(array) {
//     let min = array[0];
//     for (const element of array) {
//         if(element < min){
//             min = element;
//         }
//     }
//     return min;
// }
// document.write(`<h2>Найменше число з масиву чисел: ${calcMinNumArray(numArray)}</h2>`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// numArray = [20,3,4,5,6,10,60,3,40];
// function calcSumNumArray (array){
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = arrayElement + sum;
//     }
//     return sum;
// }
// document.write(`<h2>Сума чисел масиву: ${calcSumNumArray(numArray)}</h2>`);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// numArray = [20,3,4,5,6,10,60,3,40];
// function calcAvrNum(numArray){
//     let sum = 0;
//     for (const arrayElement of numArray) {
//         sum = arrayElement + sum;
//     }
//     return sum/numArray.length;
// }
// document.write(`<h2>Сума чисел масиву: ${calcAvrNum(numArray)}</h2>`);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменше, а виводить найбільше (Math використовувати заборонено);

// function minMax(arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max ", max);
//     return min;
// }
// document.write('Мінімальне число з введених: ' + minMax(100, 20, 3, 100, 2021));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function funRandom (length) {
//     let arrayEmpty = [];
//     for (let i = 0; i < length; i++){
//         arrayEmpty.push(Math.floor(Math.random()*100));
//     }
//     return arrayEmpty;
// };
// document.write(`<h2>${funRandom(12)}</h2>`);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomNumber(length,limit) {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.round(Math.random() * limit));
//     }
//     return emptyArray;
// }
// document.write(`<h2>${randomNumber(10,100)}</h2>`);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverse (startArray) {
//     let startArray = [];
//     let newArray=[];
//     for (let index = startArray.length - 1, reverseIndex=0; index >= 0; index--, reverseIndex++) {
//         newArray[reverseIndex]=startArray[index];
//     }
//     return newArray;
// }
// console.log(reverse(0,1,2,3,4,5,6,7,8,9));
//---------------------------------------------------------
// let startArray = [0,1,2,3,4,5,6,7,8,9];
// let newArray = [];
// for (let index = startArray.length - 1, reverseIndex=0; index >= 0; index--, reverseIndex++) {
//     newArray[reverseIndex]=startArray[index];
// }
// console.log(newArray);