function makeBubble() {
  let clutter = "";

  for (let i = 0; i < 171; i++) {
    let value = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${value}</div>`;
  }

  document.querySelector("#pannelbottom-1").innerHTML = clutter;
}
function setHit() {
  document.querySelector("#hit .box").innerHTML = Math.floor(
    Math.random() * 10
  );
}

let score = 0;
let time = 15
function runTimer() {
  
  var stop = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timer .box").innerHTML = time;
    } else {
      clearInterval(stop);
      document.querySelector("#pannelbottom-2").style.top = 0
      document.querySelector("#pannelbottom-2 h1").innerHTML = `score : ${score}`
      document.querySelector("#pannelbottom-2 h1").style.color = "green"
     
    }
  }, 1000);
}


// makeBubble();



function scoreup() {
  score += 10;
  document.querySelector("#score .box").innerHTML = score;
}

document.querySelector("#pannelbottom").addEventListener("click", function (e) {
  

  if (Number(e.target.innerHTML) == document.querySelector("#hit .box").innerHTML) {
    scoreup();
    makeBubble();
    setHit();
  }
  else if(Number(e.target.innerHTML) !== document.querySelector("#hit .box").innerHTML && time >0){
  
    document.querySelector("#pannelbottom-2").style.top = 0
    document.querySelector("#pannelbottom-2 h1").innerHTML = "game over"
    document.querySelector("#pannelbottom-2 h1").style.color = "#e32636"
   


  }

 
});

let started = false

document.querySelector("#start").addEventListener('click' , function(){
  
  setHit();
  makeBubble();
  
  runTimer();
  document.querySelector("#score .box").innerHTML = 0;
  // document.querySelector("#start h2").innerHTML = "restart"
  
})

