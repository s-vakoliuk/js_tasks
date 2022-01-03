
//Отримання інформації про користувачів з сайту https://jsonplaceholder.typicode.com/users/
// та їх відображення на сторінці index.html

let users=document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then((usersValue) => {
        console.log(users);
        users.innerHTML = ``;
        for (const user of usersValue) {
            let userId = document.createElement('div');
            userId.innerText = `id - ${user.id}`;
            let userName = document.createElement('div');
            userName.innerText = `name - ${user.name}`;
            let userDetails = document.createElement('a');
            userDetails.innerText = 'post of current user';
            userDetails.href = 'user-details.html?id=' + user.id;

            users.append(userId);
            users.append(userName);
            users.append(userDetails);
        }
    });







//----Інший спосіб
// async function getResponse(){
//     let response=await fetch('https://jsonplaceholder.typicode.com/users/');
//     let content=await response.json();
//
//     let list=document.querySelector('.users');
//
//     let key;
//     for (key in content){
//         list.innerHTML+=`
//             <li class="user">
//                 <p class="userId">id: ${content[key].id}</p>
//                 <p class="userName">name: ${content[key].name}</p>
//                 <a class="btnDetails" href="user-details.html?id=">Details about user</a>
//             </li>
//             `
//     }
// }
// getResponse();
// //
// postDetails.href = 'post-details.html?id='+post.id;