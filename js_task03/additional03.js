// 1. Створити пустий масив та :
    //    a. заповнити його 50 парними числами за допомоги циклу.
    // let evenNumbers=0;
    // let evenNumArray=[];
    // for (let index = 0; index < 51; index++) {
    //     evenNumbers=Math.floor(Math.random() * 100)+1;
    //     if( evenNumbers % 2 === 0){
    //         evenNumArray=evenNumbers;
    //     }
    //     document.write(`<div>Index ${index} - ${evenNumArray}</div>`);
    // }
//-------------------------------------------------------------------
    // b. заповнити його 50 непарними числами за допомоги циклу.
    // let evenNumbers=0;
    // let evenNumArray=[];
    // for (let index = 0; index < 51; index++) {
    //     evenNumbers=Math.floor(Math.random() * 100)+1;
    //     if( evenNumbers % 2 === 1){
    //         evenNumArray=evenNumbers;
    //     }
    //     document.write(`<div>Index ${index} - ${evenNumArray}</div>`);
    // }
    //    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
    //    d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемент
//     let evenNumArray=[];
//     for (let index = 0; index < 51; index=index+3) {
//         evenNumArray=Math.floor(Math.random() * 100)+1;
//         console.log('index:',index, evenNumArray);
//     }
//-------------------------------------------------
    //3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
    // let evenNumbers=0;
    // let evenNumArray=[];
    // for (let index = 0; index < 51; index=index+3) {
    //     evenNumbers=Math.floor(Math.random() * 100)+1;
    //     if( evenNumbers % 2 === 0){
    //         evenNumArray=evenNumbers;
    //     }
    //     console.log('index:',index, evenNumArray);
    // }
//---------------------------------------------------
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//     let evenNumbers=0;
//     let evenNumArray=[];
//     let newEvenNumArray=[];
//     let index = 0
//     for (index = 0; index < 51; index=index+3) {
//         evenNumbers=Math.floor(Math.random() * 100)+1;
//         if( evenNumbers % 2 === 0){
//             evenNumArray=evenNumbers;
//         }
//         console.log('index:',index, evenNumArray);
//         newEvenNumArray=evenNumArray;
//         console.log('newEvenNumArray',newEvenNumArray);
//     }
//-----------------------------------------------------
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//     let numArray=[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
//     let numNewArray=[];
//     let index = 0;
//     for (index = 0; index < numArray.length; index++) {
//         if (numArray[index]%2===0){
//             numNewArray=numArray[index-1];
//             console.log(numNewArray);
//         }
//     }
//------------------------------------------------------
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//     let checkArray=[100,250,50,168,120,345,188];
//     let suma = 0;
//     for (let index = 0; index < checkArray.length; index++) {
//         suma=suma+checkArray[index];
//     }
//     let average=suma/(checkArray.length);
//     console.log(suma);
//     console.log(average);
//---------------------------------------------------------
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//     let numArray=[];
//     let numDobArray=[];
//     for (let index = 0; index < 10; index++) {
//         numArray=Math.floor(Math.random() * 100)+1;
//         numDobArray=numArray*5;
//         console.log('numArray: ',numArray);
//         console.log('numDobArray',numDobArray);
//     }
//--------------------------------------------------------
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//     let mixArray = ['Serhii', 'Natalia', true, false, book={name:"Programming"}, cars=['fiat', 2009], 2021];
//     let numbersArray=[];
//     for(let index=0; index<mixArray.length; index++) {
//         if (typeof mixArray[index] === 'number') {
//             numbersArray = mixArray[index];
//         }
//         console.log(numbersArray);
//     }
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (let i = 0; i < mixArray.length; i++) {
//         if (typeof mixArray[i] === 'number') {
//             console.log(mixArray[i]);
//         }
//     }
//------------------------------------------------------
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

 let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

 let usersWithCities=[];

 for (let i = 0; i < usersWithId.length; i++) {
     let user = usersWithId[i];
     for (const address of citiesWithId) {
         if (address.user_id === user.id) {
             user.address = address;
         }
     }
 }
 usersWithCities=usersWithId;
 console.log(usersWithCities);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let numArray=[76, 9, 47 ,53, 78, 12, 33,65,88, 90];
// console.log('numArray', numArray);
// for (let index = 0; index < numArray.length; index++) {
//     if (numArray[index]%2===0) {
//         console.log('numEventArray', numArray[index]);
//     }
// }
//---------------------------------------------------
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//     let firstArray=[];
//     let secondArray=[];
//     for (let index = 0; index < 10; index++) {
//         firstArray=Math.floor(Math.random() * 100)+1;
//         secondArray=firstArray;
//         console.log('secondArray',secondArray);
//     }
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//     let lettersArray=['a', 'b', 'c'];
//     let word=0;
//     for (let index = 0; index < lettersArray.length; index++) {
//         word=lettersArray.join();
//     }
//     console.log(' word', word);
//--------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//     let lettersArray=['a', 'b', 'c'];
//     let word=0;
//     let index=0;
//     while(index < lettersArray.length){
//         word=lettersArray.join();
//         console.log('word: ', word);
//         index++;
//     }
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//     let lettersArray=['a', 'b', 'c'];
//     let word=0;
//     for ( word of lettersArray) {
//         word=lettersArray.join();
//     }
//     console.log(' word', word);