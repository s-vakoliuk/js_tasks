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
            let name = document.createElement('div');
            name.innerText = `name - ${post.name}`;
            let email = document.createElement('div');
            email.innerText = `email - ${post.email}`;
            let body = document.createElement('div');
            body.innerText = `body - ${post.body}`;
            postDetails.append(name);
            postDetails.append(email);
            postDetails.append(body);
        }
    });