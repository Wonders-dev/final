//buttons
const goodsbtn = document.querySelector('#btn-goods');
const aboutbtn = document.querySelector('#btn-about');
const homebtn = document.querySelector('#backhome');
const lilybtn = document.querySelector('#btn-lily');
const rosebtn = document.querySelector('#btn-rose');
const miscbtn = document.querySelector('#btn-special'); 

//the h1, img, blah blah blah
const bodyPg = document.querySelector('body');
const heading = document.querySelector('h1');
const imgcrochet = document.querySelector('.crochetgoods .imj');
const imgcrochetmeas = document.querySelector('.crochetgoods .imjtwo')
const description = document.querySelector('.crochetgoods .descrip');
const price = document.querySelector('.crochetgoods .price')

//window.location.href was googled because it didn't feel right to simply put it in html (which I knew how to do), so I googled how to do the link using js. Possible stretch. 
//Basically, the function goods and about are so that the buttons go to the htmls for the respective page.
function goods(){
window.location.href = "goods.html";
}
function about(){
window.location.href = "about.html";
}

//The js for the about page below is simply for the comment section really (Except for the one event listener so that the home btn works).
// I also put in js to put a video inside the about-me page to fulfill a stretch goal. 
//The state has one pre-loaded comment so that I know it works, but I don't want a million self-made comments, so there is only one. 
const state = [
  { id: 1, title: "I commented on my own website!" },
];

const form = document.querySelector("#comment-form");
const input = document.querySelector("#comment-input");
const list = document.querySelector("#comment-list");

function render() {
  list.innerHTML = "";
  for (const task of state) {
    const li = document.createElement("li");
    li.textContent = task.title;
    list.appendChild(li);
  }
}

// Write handleAdd below.
function handleAdd(event){
  event.preventDefault()
  let text = input.value.trim();
  if (text === '') {
  return;          // early exit — don't create anything
}else {
  const newTask = {
  id: Date.now(),
  title: text
};
state.push(newTask);

  let li = document.createElement('li');
  li.textContent = newTask.title;
  list.appendChild(li);
  input.value = "";
}
}

//Putting in the video, I asked Gemini how to. Strech #1
//I know the video doesn't fully fill into the video box, but filling it all makes it too long, so I controlled the height to be 300. 
//OKAY, READ THIS. I was struggling with the audio forever, but I realized it just needs to be opened in an external browser. VS code just won't play the audio.
const video = document.createElement('video');
video.src = 'assets/about-video.mp4'; 
video.controls = true;   // I want them to be able to pause it and stuff. 
video.muted = false;          
video.width = 300;      
video.height=300;             
const container = document.getElementById('video-container');
if (container) {
  container.appendChild(video);
}
//Had to add the if container, then this, so that it doesn't crash on other pages. 

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

//had to use the ifs because if I didn't the js wouldn't work because the page would be like, "LILY BTN DOESN'T EXIST STOP EVERYTHING."
//So now, if this, than that, fixes that problem. 

// Goods page listeners
if (homebtn) {
  homebtn.addEventListener('click', homepage);
}

if (lilybtn) {
  lilybtn.addEventListener('click', showlilyofvalley);
}

if (rosebtn) {
  rosebtn.addEventListener('click', showrose);
}

if (miscbtn) {
  miscbtn.addEventListener('click', showspecial);
}

// Homepage buttons
if (goodsbtn) {
  goodsbtn.addEventListener('click', goods);
}

if (aboutbtn) {
  aboutbtn.addEventListener('click', about);
}

// About page comment section
if (form) {
  form.addEventListener("submit", handleAdd);
  render();
}
