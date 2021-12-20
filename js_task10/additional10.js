// Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо натисканням на стрілочки.

const arrImages=[
    {
        alt: '01',
        url: './img/01.png'
    },
    {
        alt: '02',
        url: './img/02.png'
    },
    {
        alt: '03',
        url: './img/03.png'
    },
    {
        alt: '04',
        url: './img/04.png'
    },
    {
        alt: '05',
        url: './img/05.png'
    }
]
const buttLeft=document.getElementById("buttLeft");
const buttRight=document.getElementById("buttRight");
const picturesBox=document.getElementById("picturesBox");

picturesBox.style.height="300px";
picturesBox.style.width="500px";

let carIndex=0;
buttLeft.onclick=()=>{
    if (carIndex - 1 < 0){
        carIndex=arrImages.length-1;
    }else{
        carIndex=carIndex-1;
    }
    picturesBox.src=arrImages[carIndex].url
    picturesBox.alt=arrImages[carIndex].alt
}

buttRight.onclick = () =>{
    if (carIndex + 1 > arrImages.length -1){
        carIndex = 0;
    }else{
        carIndex = carIndex + 1;
    }
    picturesBox.src=arrImages[carIndex].url
    picturesBox.alt=arrImages[carIndex].alt
}