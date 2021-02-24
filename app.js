//DECLARACION DE VARIABLES

let backCover = document.getElementById('backCover');
let title = document.getElementById('title');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');


////////////////////      EVENTOS ///////////////

img1.addEventListener('click', (e)=>{
    //backCover.classList.add('addImg');
    backCover.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoeoHRiZHCYepPof98Ch9yS-NC6xNBLhAZg&usqp=CAU)"
    title.innerHTML = "Harry Potter";
})

img2.addEventListener('click', ()=>{    
    backCover.style.backgroundImage = "url(https://gamerstyle.com.mx/wp-content/uploads/2020/06/xHogwarts-Dark-Legacy-rumores-juego-harry-potter-gamer-style.jpg.pagespeed.ic.B1NRhLc6dF.webp)";
    title.innerHTML = "Harry Potter 2"
})
img3.addEventListener('click', ()=>{
    backCover.style.backgroundImage = "url(https://www.lavanguardia.com/files/image_449_220/uploads/2020/12/09/5fd1029065a27.jpeg)";
    title.innerHTML = "Friends"
})
img4.addEventListener('click', ()=>{
    backCover.style.backgroundImage = "url(https://www.laguiago.com/wp-content/uploads/2021/02/Tableros-gambito-de-dama.jpg";
    title.innerHTML = "Queen's Gambit"
})
img5.addEventListener('click', ()=>{
    backCover.style.backgroundImage = "url(https://www.liderempresarial.com/wp-content/uploads/2019/04/GOT-750x422.jpg)";
    title.innerHTML = "Game of Thrones";
})
img6.addEventListener('click', ()=>{
    backCover.style.backgroundImage = "url(https://www.republica.com/wp-content/uploads/2020/01/modern-family.jpg)";
    title.innerHTML = "Modern Family";
})

