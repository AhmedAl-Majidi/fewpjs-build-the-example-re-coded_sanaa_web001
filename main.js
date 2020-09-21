// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let states = {
  "♡": "♥",
  "♥": "♡"
};

let red = {
  "": "red",
  "red" : ""
};

let articles = document.querySelectorAll('like');

function likeFn(e) {
  let heart = e.target;
  mimicServerCall("url")
    .then(function(serverMessage){
       heart.innerText = states[heart.innerText];
       heart.style.color = red[heart.style.color];
    })
    .catch(function(error) {
      document.getElementById("modal").className = "";
    });
}
for (let ele of articles){
  ele.addEventListener("click", likeFn);
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
