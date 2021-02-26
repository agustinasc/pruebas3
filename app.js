//DECLARACION DE VARIABLES

let backCover = document.getElementById('backCover');
let title = document.getElementById('title');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');


////////////////////      EVENTOS ///////////////

img1.addEventListener('click', (e)=>{
    backCover.style.background = "url(./img/coverHarri1.jpg) no-repeat center/cover";
    // backCover.style.backgroundSize = "cover";
    title.innerHTML = "Harry Potter";
})

img2.addEventListener('click', (e)=>{    
    backCover.style.background = "url(./img/coverHarry2.jpg) no-repeat center/cover";
    title.innerHTML = "Harry Potter 2"
})
img3.addEventListener('click', (e)=>{
    backCover.style.background = "url(./img/coverFriends.jpg) no-repeat center/cover";
    title.innerHTML = "Friends"
})
img4.addEventListener('click', (e)=>{
    backCover.style.background = "url(./img/coverQueens.jpg) no-repeat center/cover";
    title.innerHTML = "Queen's Gambit"
})
img5.addEventListener('click', (e)=>{
    backCover.style.background = "url(./img/coverGot.jpg) no-repeat center/cover";
    title.innerHTML = "Game of Thrones";
})
img6.addEventListener('click', (e)=>{
    backCover.style.background = "url(./img/modern.jpg) no-repeat center/cover";
    title.innerHTML = "Modern Family";
})

