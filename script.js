"use strit";
document.addEventListener("DOMContentLoaded", function () {
  // Get the circle element
  var circle = document.querySelector(".bot_ai");

  // Add a scroll event listener to the window
  window.addEventListener("scroll", function () {
    // Get the current scroll position
    var scrollPosition = window.scrollY;
    // console.log(scrollPosition);
    if (scrollPosition === 0 || scrollPosition < 200) {
      circle.classList.remove("display");
    }
    if (scrollPosition >= 100 && scrollPosition < 800) {
      circle.classList.add("display");
    }
    if (scrollPosition >= 1000) {
      circle.classList.remove("display");
    }
  });
});
const viewMore = document.querySelector(".viewMore");
const viewLess = document.querySelector(".viewLess");
const meg1 = document.querySelector(".meg_1");
const meg2 = document.querySelector(".meg_2");
viewMore.addEventListener("click", function (e) {
  e.preventDefault();
  meg2.style.textAlign = "start";
  meg1.classList.add("display");
  meg2.classList.remove("display");
});
viewLess.addEventListener("click", function (e) {
  e.preventDefault();
  meg1.style.textAlign = "end";
  meg1.classList.remove("display");
  meg2.classList.add("display");
});
const sectionChat = document.querySelector("#section_chat");
const bot = document.querySelector(".bot_ai");
bot.addEventListener("click", function (e) {
  e.preventDefault();
  sectionChat.scrollIntoView({ behavior: "smooth" });
});
