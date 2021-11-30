// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// Додати в об'єкт функції:
// - drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// - info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// - increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// - changeYear (newValue) - змінює рік випуску на значення newValue
// - addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Cars(model, brand, year, maxspeed, volume) {
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     };
//     this.newMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
// let addCar = new Cars('Grande Punto', 'FIAT', 2009, 180, 1.3);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.newMaxSpeed(20);
// addCar.drive();
// addCar.changeYear(2012);
// addCar.info();
// addCar.addDriver('Serhii');
// console.log(addCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars2 {
//     constructor(model, brand, year, maxspeed, engineVal) {
//         this.model = model;
//         this.brand = brand;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engineVal = engineVal;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//     info() {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
//     newMaxSpeed (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// let addCar2 = new Cars2('Grande Punto', 'FIAT', 2009, 180, 1.3);
// console.log(addCar2);
// addCar2.drive();
// addCar2.info();
// addCar2.newMaxSpeed(20);
// addCar2.drive();
// addCar2.changeYear(2012);
// addCar2.info();
// addCar2.addDriver('Serhii');
// console.log(addCar2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Popeliushka {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
//
// const popeliushkaArray = [
//     new Popeliushka('natalia', 22, 41),
//     new Popeliushka('nina', 21, 25),
//     new Popeliushka('irina', 24, 30),
//     new Popeliushka('lesia', 26, 31),
//     new Popeliushka('nadia', 29, 32),
//     new Popeliushka('olena', 90, 58),
//     new Popeliushka('leila', 87, 34),
//     new Popeliushka('galinka', 34, 39),
// ];
// console.log(popeliushkaArray);
//
//
// // Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Princ {
//     constructor(name, age, findShose) {
//         this.name = name;
//         this.age = age;
//         this.findShose = findShose;
//     }
// }
// const prince = new Princ('Serhii', 40, 41);
//
// // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// const newPara = (popeliushkaArray, prince) => {
//     for (const item of popeliushkaArray) {
//         if (item.footsize === prince.findShose) {
//             return `твоя попелюшка: ${item.name}`
//         }
//     }
// };
// console.log(newPara(popeliushkaArray, prince));
//
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// const emptyPrincess = popeliushkaArray.find((item) => item.footsize === prince.findShose);
// console.log(emptyPrincess);