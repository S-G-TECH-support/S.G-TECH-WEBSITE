"use strict";
// smmoth scroll
const nav = document.querySelector(".nav_container");
const header = document.querySelector(".header");
const navheight = nav.getBoundingClientRect().height;
// console.log(navheight);
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    // top1.classList.remove("top_hidden");
  } else {
    nav.classList.remove("sticky");
    // top1.classList.add("top_hidden");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navheight}px`,
});
headerObserver.observe(header);

document.querySelector(".nav-title").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// mobile and pc view

let myMediaQuery = window.matchMedia("(min-width: 915px)");
function widthChangeCallback(myMediaQuery) {
  if (myMediaQuery.matches) {
    document.querySelector(".below-menu").classList.add("display");
    // document.querySelector(".image").classList.remove("display");
    // document.querySelector(".image_1").classList.add("display");
  } else {
    // document.querySelector(".image_1").classList.remove("display");
    // document.querySelector(".image").classList.add("display");
    document.querySelector(`.section_2`).classList.add("display");
  }
}
myMediaQuery.addEventListener("change", widthChangeCallback);
widthChangeCallback(myMediaQuery);

//class//
const pcNav = document.querySelector(".nav-title");
const navLinks = document.querySelectorAll(".nav_link");

// pc-navbar
pcNav.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".nav_link");
  if (!clicked) return;
  navLinks.forEach((t) => t.classList.remove("active"));
  clicked.classList.add("active");
});
// mobile-navbar
const moNav = document.querySelector(".below-menu");
const iconCon = document.querySelectorAll(".icon-con");
const section = document.querySelectorAll(".section");
moNav.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".icon-con");
  // console.log(clicked.dataset.tab);
  let num = clicked.dataset.tab;
  if (!clicked) return;
  iconCon.forEach((t) => t.classList.remove("active-ico"));
  clicked.classList.add("active-ico");
  section.forEach((t) => t.classList.add("display"));
  document.querySelector(`.section_${num}`).classList.remove("display");
});
