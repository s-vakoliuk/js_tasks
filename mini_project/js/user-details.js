
let userDetails=document.getElementsByClassName('userDetails')[0];
let idNumber=1;

fetch(`https://jsonplaceholder.typicode.com/users/${idNumber}`)
    .then(response => response.json())
    .then((userId) => {
        console.log(userId);

        userDetails.innerHTML=``;
        let title = document.createElement('h2');
        title.innerText = `${userId.id} - ${userId.name}`;
        userDetails.append(title);

        let div = document.createElement('div');
        div.innerText = `
        username - ${userId.username};
        email - ${userId.email};
        address: street - ${userId.address.street}; suit - ${userId.address.suite}; city - ${userId.address.city}; zipcode - ${userId.address.zipcode};
        geo: lat - ${userId.address.geo.lat}; geo - ${userId.address.geo.lng}
        phone: ${userId.phone};
        website: ${userId.website};
        company: name - ${userId.company.name}; catchPhrase - ${userId.company.catchPhrase};bs - ${userId.company.bs};
        `
        userDetails.append(div);
        let btnPost=document.createElement('button');
        btnPost.innerText='Post of current user';
        userDetails.append(btnPost);
});

//---Posts----

let userPosts=document.getElementsByClassName('userPosts')[0];

fetch(`https://jsonplaceholder.typicode.com/users/${idNumber}/posts`)
    .then(response => response.json())
    .then((postId) => {
            console.log(postId);
            for (const post of postId){
            let li = document.createElement('li');
            li.innerText += `title - ${post.title}`;
            document.body.appendChild(li);
        }
    });


