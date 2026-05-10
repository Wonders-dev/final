//The js for the about page is simply for the comment section really. I also put in js to put a video inside the about-me page to fulfill a stretch goal. 
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
//Putting in the video, I asked gemini how to. Strech #1
//I know the video doesn't fully fill into the video box, but filling it all makes it too long, so I controlled the height to be 300. 
//OKAY, READ THIS. I was struggling with the audio forever, but I realized it just needs to be opened on in an external browser. VS code just won't play the audio.
const video = document.createElement('video');
video.src = 'assets/about-video.mp4'; 
video.controls = true;   // I want them to be able to pause it and stuff. 
video.muted = false;          
video.width = 300;      
video.height=300;             
const container = document.getElementById('video-container');
container.appendChild(video);


// Attach the handler and render below for the comment section to work. 
form.addEventListener("submit", handleAdd);
render();
