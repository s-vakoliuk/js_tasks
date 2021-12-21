    // console.log('start')
    // try {
    //     console.log(a);
    // } catch (error) {
    //     console.error(error);
    // } finally {
    //     console.log('finally');
    // }
    //
    // console.log('end');

    //  Date

    // let date = new Date();
    // console.log(date);
    // console.log(date.getTime(), 'time');
    // console.log(date.getFullYear(), 'year');
    // console.log(date.getMonth(), 'month');
    // console.log(date.getDay(), 'day');
    // console.log(date.getDate(), 'date');
    // console.log(date.getHours(), 'hours');
    // console.log(date.getMinutes(), 'minutes');
    // console.log(date.getSeconds(), 'seconds');
    // console.log(date.getMilliseconds(), 'milis');

    // function perfom() {
    //     let start = new Date().getTime();
    //     for (let i = 0; i < 1000000; i++) {
    //
    //     }
    //     let end = new Date().getTime();
    //     console.log(end - start);
    // }
    //
    // perfom();

    // document.forms.f1.onsubmit = function (e) {
    //     e.preventDefault();
    //     console.log(this.dateinput.value);
    //
    // };

    //  es6 spred rest

    // let name = 'somename';
    // let age = 1123;
    //
    // let user = {name, age};
    // console.log(user);

    // let user = {name: 'kokos', age: 123, status: true, skills: []}
    //
    // function log({name, age}) {
    //     console.log(name, age);
    // }
    //
    // log(user);
    // log({name: 'kokos', age: 123});


    // let user = {
    //     name: 'kokos',
    //     age: 123,
    //     status: true,
    //     skills: ['asd', 'qwe'],
    //     wife: {name: 'asd'},
    //     greeting: function () {
    //     }
    // };
    //
    // // let s = JSON.stringify(user);
    // // let copyUser = JSON.parse(s);
    // // console.log(user === copyUser);
    // // console.log(user)
    // // console.log(copyUser);
    //
    // let copyUser2 = {...user, wife: {...user.wife}, skills: [...user.skills]};
    // console.log(user)
    // console.log(copyUser2);
    // console.log(user === copyUser2);
    // console.log(user.wife === copyUser2.wife);
    // console.log(user.skills === copyUser2.skills);

    // let skills = ['asd', 'qwe'];
    // let name = 'vsaua';
    // let age = 31;
    // let wife = {name: 'anna'};
    //
    // let user = {skills: [...skills], name, age, wife: {...wife}}
    //
    // console.log(user);
    // user.skills.push('js');
    // console.log(skills);
    // user.wife.age = 19;
    // console.log(wife);

    // let {name: aliasName, age, greeting: xxx} = {
    //     name: 'kokos', age: 123, status: true, greeting: function () {
    //         console.log('hi', this);
    //     }
    // };
    // let name = 'asqtwryeqw';
    // console.log(aliasName, age);
    // xxx();

    //  call apply bind
    // let u1 = {
    //     name: 'vasya',
    //     greeting: function (msg, a, b) {
    //         console.log(`${msg} my name is ${this.name}`);
    //     }
    // }
    //
    // let u2 = {name: 'anton'};
    //
    // u1.greeting.call(u2, 'hi', 'asda', 'qwe');
    // u1.greeting.apply(u2, ['hi', 'asda', 'qwe']);
    //
    // let greetingCopy = u1.greeting.bind(u2, 'ola');
    // greetingCopy();
    //
    // function User(name) {
    //     this.name = name;
    // }
    //
    // function SuperUser(name, age) {
    //     User.apply(this, arguments);
    //     // User.call(this, ...arguments);
    //     this.age = age;
    // }

    //  proto
    // let array = new Array(1, 2, 3, 4);
    // console.log(array);
    //
    // Array.prototype.message = 'hi guys';
    // let arr1 = [];
    // console.log(arr1.message);
    // let arr2 = [];
    // console.log(arr2.message);
    //
    // Array.prototype.print = function () {
    //     console.log(this);
    // };
    //
    // array.print();
    Array.prototype.myCustomFilter = function (callback) {
        let localArray = [];
        for (const item of this) {
            let resutlBool = callback(item);
            if (resutlBool) {
                localArray.push(item);
            }
        }
        return localArray;
    };

    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];

    let customFilter = users.myCustomFilter(value => value.status);
    // console.log(customFilter);
    // console.log({}.__proto__);
    // set map

    // let map = new Map();
    // map.set({}, JSON.stringify({name: 'sasha', surname: 'petrov'}))
    // map.set({}, JSON.stringify({name: 'sasha', surname: 'borisov'}))
    // map.set({}, JSON.stringify({name: 'sasha', surname: 'borisov'}))
    //
    // console.log(map);
    //
    // let set = new Set();
    // set.add('asdasd');
    // set.add('qweqw');
    // console.log(set);


    //  regexp?
    let phone = '067-123-12-12';
    // phone = '(067) 123-12-12';
    phone = '(067) 123 12 12';

    // 0671231212
    let s = phone.replaceAll(/[\s\-)(]/g, '');
    console.log(s);
    // let email = 'asd@asd.com';
    // let email = 'qwe@asd.com';
    let email = 'zxc@asd.com qweqwe';

    let result = email.match(/[a-z]{1,}@asd.com/);
    console.log(result);
