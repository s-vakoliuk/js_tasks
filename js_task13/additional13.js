// - Імітуємо наповнення інтернет магазину товарами:
// Створити форму з наступними полями:
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в locallstorage. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та locallstorage.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

//Кнопка збереження
const btSave=document.getElementById("btsave")
btSave.onclick =()=> {
let usersObj = {
    product: document.getElementById("product").value,
    quantity: document.getElementById("quantity").value,
    price: document.getElementById("price").value,
    pictures: document.getElementById("pictures").value
}
    let key=document.getElementById("record").value;
    localStorage.setItem(key,JSON.stringify(usersObj));
}

//Кнопка редагування
const btEdit=document.getElementById("btedit")
btEdit.onclick =()=> {
    let key=document.getElementById("recordnumber").value;
    let usersObjEdit = JSON.parse (localStorage.getItem (key));
    document.getElementById("firstname").value = usersObjEdit["firstname"];
    document.getElementById("lastname").value = usersObjEdit["lastname"];
    document.getElementById("lastname2").value = usersObjEdit["lastname2"];
    document.getElementById("phonenumber").value = usersObjEdit["phonenumber"];
    document.getElementById("email").value = usersObjEdit["email"];
    document.getElementById("date").vlue = usersObjEdit["date"];
    console.log(usersObjEdit);
}

//Кнопка видалення
const btErase=document.getElementById("bterase")
btErase.onclick =()=>{
    let key=document.getElementById("recordnumber").value;
    localStorage.removeItem(key);
}