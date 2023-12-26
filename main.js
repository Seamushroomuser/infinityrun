    var music = new Audio('music.mp3');
music.play();
const human = document.getElementById("human");
const landmine = document.getElementById("landmine");
const tiger = document.getElementById("tiger");

function jump() {
  if (human.classList != "jump") {
    human.classList.add("jump");

    setTimeout(function () {
      human.classList.remove("jump");
    }, 300);
    if (tiger.classList != "jump") {
        tiger.classList.add("jump");
    
        setTimeout(function () {
          tiger.classList.remove("jump");
        }, 300);
      }
  }
}

let isAlive = setInterval(function () {
  // get current human Y position
  let humanTop = parseInt(window.getComputedStyle(human).getPropertyValue("top"));

  // get current landmine X position
  let landmineLeft = parseInt(
    window.getComputedStyle(landmine).getPropertyValue("left")
  );

  // detect collision
  if (landmineLeft < 140 && landmineLeft > 90 && humanTop >= 400) {
    // collision
    var explode = new Audio('explode.mp3');
    explode.play();
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});