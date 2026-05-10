//Buttons
const lilybtn = document.querySelector('#btn-lily');
const rosebtn = document.querySelector('#btn-rose');
const miscbtn = document.querySelector('#btn-special');
const homebtn = document.querySelector('#backhome');

//the h1, img, blah blah blah
const bodyPg = document.querySelector('body');
const heading = document.querySelector('h1');
const imgcrochet = document.querySelector('.crochetgoods .imj');
const imgcrochetmeas = document.querySelector('.crochetgoods .imjtwo')
const description = document.querySelector('.crochetgoods .descrip');
const price = document.querySelector('.crochetgoods .price')

//Function so that clicking the button leads to showing the Lily of the Valley.
function showlilyofvalley(){
    heading.textContent = 'Lily of the valley!';
    imgcrochet.src = 'assets/lily-of-valley.jpg';
    imgcrochet.alt ='Crochet lily of the valley, off-white flowers.';
    imgcrochetmeas.src = 'assets/lilymeasured.png';
    imgcrochetmeas.alt ='A photo of text stating the measurments.';

    description.textContent = 'These lily of the valley flowers are small and elegant. Put them on your glasses, car mirror, wrist, ear, headphones, and anything else you can thing of! The only color available is off-white flowers with pastel sage green stems and leaves. More colors coming soon!'
    price.textContent = "Price: 10$"
}

//Function so that clicking the button leads to showing the Rose.
function showrose(){
    heading.textContent = 'Rose!';
    imgcrochet.src = 'assets/mamaw-with-rose.jpg';
    imgcrochet.alt ='My grandma holding a rose.';
    imgcrochetmeas.src = 'assets/bundle-roses.jpg';
    imgcrochetmeas.alt ='A bundle of crocheted roses.';

    description.textContent = 'These handmade roses can be used to brighten your common areas! They never die, so you can cherish them forever. They come in multiple different colors, based on what materials are available, but red and white are always options.'
    price.textContent = "Price: 20$"
}

//Function so that clicking the button leads to showing the Special item.
function showspecial(){
    heading.textContent = 'Jellyfish!';
    imgcrochet.src = 'assets/jellyfishcropped.jpg';
    imgcrochet.alt ='A crocheted jellyfish on a bed.';
    imgcrochetmeas.src = 'assets/jellymeasured.png';
    imgcrochetmeas.alt ='A photo of text stating the measurments.';

    description.textContent = "This is the season's special, a jellyfish! This can be used as a decoration, something to talk to, and something to hug. It is pretty and has a lot of soul. Get it quick if you like it, because once the season is over, there will likely be no more in the future."
    price.textContent = "Price: 50$"
}

//Clicking the home button at the top left = back to the home page. 
function homepage(){
window.location.href = "index.html";
}

//Event listeners
homebtn.addEventListener('click', homepage);
lilybtn.addEventListener('click', showlilyofvalley);
rosebtn.addEventListener('click', showrose);
miscbtn.addEventListener('click', showspecial);