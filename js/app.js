//buttons
const goodsbtn = document.querySelector('#btn-goods');
const aboutbtn = document.querySelector('#btn-about');

//window.location.href was googled because it didn't feel right to simply put it in html (which I knew how to do), so I googled how to do the link using js. Does this count as a stretch lol?
//Basically, the function goods and about are so that the buttons go to the htmls for the respective page.
function goods(){
window.location.href = "index-goods.html";
}
function about(){
window.location.href = "index-about.html";
}

//Adding event listeners so that the buttons actually work. 
goodsbtn.addEventListener('click', goods);
aboutbtn.addEventListener('click', about);
