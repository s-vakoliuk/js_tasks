
let url=new URL(location.href);
console.log(url);
let idOfUser=url.searchParams.get('id');
console.log(idOfUser);


let userDetails=document.getElementsByClassName('userDetails')[0];


fetch(`https://jsonplaceholder.typicode.com/users/${idOfUser}`)
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
        let postDetails = document.createElement('a');
        postDetails.innerText='post of current user';
        postDetails.href = 'post-details.html?id='+post.id;

});

//---Posts----

let userPosts=document.getElementsByClassName('userPosts')[0];

fetch(`https://jsonplaceholder.typicode.com/users/${idOfUser}/posts`)
    .then(response => response.json())
    .then((postId) => {
            console.log(postId);
            userPosts.innerHTML=``;
            for (const post of postId){
                    let postWrap =  document.createElement('div');
                    postWrap.style.background='lightgreen';
                    postWrap.style.color='blue';
                    postWrap.style.fontSize='20px';
                    postWrap.style.border= '2px solid blue';
                    postWrap.style.borderRadius= '10px';
                    postWrap.style.margin='10px';

                    // postWrap.style.width='400px';
                    // postWrap.style.height='200px';

                    let title = document.createElement('p');
                    title.style.margin='10px';
                    title.innerText = `title - ${post.title}`;


                    let postDetails = document.createElement('a');
                    postDetails.style.margin='10px';
                    postDetails.style.background='yellow';
                    postDetails.style.borderRadius='10px';
                    postDetails.innerText='post of current user';
                    postDetails.href = 'post-details.html?id='+post.id;

                    postWrap.append(title);
                    postWrap.append(postDetails);

                    userPosts.appendChild(postWrap);
        }
    });
