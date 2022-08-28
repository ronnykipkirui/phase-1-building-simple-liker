// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let modal = document.getElementById("modal");
modal.classList.add("hidden")

let likeBtn = document.getElementsByClassName("like-glyph");
likeBtn.addEventListener("click",mimicServerCall())
let likeBtnArr = Array.from(likeBtn);
likeBtnArr.forEach((elem)=>{
  console.log(elem.textContent)
  elem.addEventListener("click", function(){
    elem.textContent = FULL_HEART;
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
