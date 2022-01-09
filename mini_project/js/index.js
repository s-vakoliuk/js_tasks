
//Отримання інформації про користувачів з сайту https://jsonplaceholder.typicode.com/users/
// та їх відображення на сторінці index.html

let users=document.getElementsByClassName('wrap')[0];
fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then((usersValue) => {
        console.log(users);
        users.innerHTML = ``;

        for (const user of usersValue) {

            let userWrap=document.createElement('div');
            userWrap.style.background='lightblue';
            userWrap.style.color='blue';
            userWrap.style.fontSize='30px';
            userWrap.style.border= '2px solid blue';
            userWrap.style.borderRadius= '10px';
            userWrap.style.margin='10px';
            userWrap.style.width='400px';
            userWrap.style.height='200px';

            let userId = document.createElement('p');
            userId.innerText = `id - ${user.id}`;
            userId.style.margin='10px';

            let userName = document.createElement('p');
            userName.innerText = `name - ${user.name}`;
            userName.style.margin='10px';

            let userDetails = document.createElement('a');
            userDetails.style.width='200px';
            userDetails.style.height='50px';
            userDetails.style.background='yellow';
            userDetails.style.borderRadius='10px';
            userDetails.style.margin='10px';
            userDetails.style.padding='10px';


            userDetails.innerText = 'User details';
            userDetails.href = 'user-details.html?id=' + user.id;

            userWrap.append(userId);
            userWrap.append(userName);
            userWrap.append(userDetails);

            users.appendChild(userWrap);
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