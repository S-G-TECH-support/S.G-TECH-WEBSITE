"use strict";
const nav=document.querySelector(".nav_container");
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