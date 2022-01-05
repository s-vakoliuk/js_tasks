// https://jsonplaceholder.typicode.com/posts/POST_ID/comments

let url=new URL(location.href);
console.log(url);
let idOfPost=url.searchParams.get('id');
console.log(idOfPost);

let postDetails=document.getElementsByClassName('postDetails')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/${idOfPost}/comments`)
    .then(response => response.json())
    .then((idOfPost) => {
        console.log(idOfPost);
        postDetails.innerHTML=``;
        for (const post of idOfPost){
            let postWrap =  document.createElement('div');
            postWrap.style.background='yellow';
            postWrap.style.color='blue';
            postWrap.style.fontSize='20px';
            postWrap.style.border= '2px solid blue';
            postWrap.style.borderRadius= '10px';
            postWrap.style.margin='10px';

            let name = document.createElement('p');
            name.innerText = `name - ${post.name}`;
            let email = document.createElement('p');
            email.innerText = `email - ${post.email}`;
            let body = document.createElement('p');
            body.innerText = `body - ${post.body}`;

            postWrap.append(name);
            postWrap.append(email);
            postWrap.append(body);

            postDetails.appendChild( postWrap);
        }
    });