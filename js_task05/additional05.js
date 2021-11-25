// - Дано натуральне число n. Виведіть все числа от 1 до n.
// let countNumber=(n)=>{
//     let count=[];
//     for (let index = 0; index <= n; index++) {
//        count[index]=1+index;
//     }
//     return (count);
// };
// console.log('Кількість чисел: ',countNumber(100));
// document.write('Кількість чисел: ' + countNumber(100));

//-Дано два цілих числа A і В . Виведіть всі числа від A до B включно, в порядку зростання, якщо A < B, або в порядку спадання в протилежному випадку.

// let countNumber=(a,b)=>{
//     let numArray=[];
//     if (a<b) {
//         count=(b-a);
//         for (let index = 0; index <= count; index++) {
//         numArray.push(index+a);
//         }
//         return (numArray);
//     }else{
//         if (a>b) {
//         count=(a-b);
//         for (let index = 0; index <= count; index++) {
//         numArray.push(index+b);
//         numArray.sort((a, b) => b - a);
//         }
//         return (numArray);
//     }
//     }
// };
// console.log('Кількість чисел: ',countNumber(25,5));
// document.write('Кількість чисел: ' + countNumber(25,5));

// - Функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// let numArray=[1,0,6,0,3];
// let numArray=[0,1,2,3,4];
// let numArray=[0,0,1,0];
let orderlyArray=(numArray)=> {
    let position = 0;
    for (let index = 0; index < numArray.length; index++) {
        if (numArray[index] != 0) {
            numArray[position] = numArray[index];
            position++;
        }
    }
    for (let index = position; index < numArray.length; index++) {
        numArray[position++] = 0;
        return numArray;
    }
};
console.log('Впорядкований масив: ', orderlyArray(1,0,6,0,3));
