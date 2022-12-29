let overlay = document.querySelector(".overlay");
let myStart = document.querySelector(".overlay span");
let userfield = document.querySelector(".user-name");
let myImgBlocks = document.querySelectorAll(".img-block");
let wrongField = document.querySelector(".wrong-tries");
let wrongsTries = 0;
let Timer = 2;

window.onload = function () {
  userfield.innerHTML = `Hello`;
};

myStart.onclick = function () {
  let userName = window.prompt("what is your name?");
  if (userName) {
    overlay.style.display = "none";
    userfield.innerHTML = `Hello ${userName}`;
    showAndHideCards();
    myImgBlocks.forEach((ele) => {
      ele.onclick = clickedCard;
    });
  }
};
// show and hide cards in 2 seconds function
function showAndHideCards() {
  myImgBlocks.forEach((ele) => {
    ele.classList.add("clicked");
  });
  let handler = setInterval(() => {
    Timer--;
    if (Timer === 0) {
      clearInterval(handler);
      myImgBlocks.forEach((ele) => {
        ele.classList.remove("clicked");
      });
    }
  }, 1000);
}

// clicked card function
let cards = [];
function clickedCard(e) {
  e.currentTarget.classList.add("clicked");
  cards.push(e.currentTarget);

  if (cards.length === 2) {
    let src1 = cards[0].firstElementChild.firstElementChild.src;
    let src2 = cards[1].firstElementChild.firstElementChild.src;
    if (src1 === src2) {
      cards.forEach((ele) => {
        ele.style.cssText = "opacity:0;cursor: default;";
        console.log(e);
        cards = [];
      });
    } else {
      delay();
      wrongsTries++;
      wrongField.innerHTML = `wrong tries : ${wrongsTries}`;
    }
  }
}
function delay() {
  setTimeout(() => {
    cards.forEach((ele) => {
      ele.classList.remove("clicked");
      cards = [];
    });
  }, 1000);
}
window.oncontextmenu = function (e) {
  // e.preventDefault();
};
