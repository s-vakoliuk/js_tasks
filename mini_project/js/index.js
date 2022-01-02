
//Отримання інформації про користувачів з сайту jsonplaceholder.typicode.com
// та їх відображення на сторінці index.html
async function getResponse(){
    let response=await fetch('https://jsonplaceholder.typicode.com/users/');
    let content=await response.json();

    let list=document.querySelector('.users');

    let key;
    for (key in content){
        list.innerHTML+=`
            <li class="user">
                <p class="userId">id - ${content[key].id}</p>
                <p class="userName">name - ${content[key].name}</p>
                <a class="details" href="user-details.html">Details about user</a>
            </li>
            `
    }
}
getResponse();