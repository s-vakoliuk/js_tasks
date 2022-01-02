
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(users => {
        for (const user of users){
            let li = document.createElement('li');
            li.innerText += `
            username - ${user.username};
            email - ${user.email};
            address:
            street - ${user.address.street};
            suit - ${user.address.suit};
            city - ${user.address.city};
            zipcode - ${user.address.zipcode};
            geo: lat - ${user.address.geo.lat}; geo - ${user.address.geo.lng}
            `
            document.body.appendChild(li);
        }
});