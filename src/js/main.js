// burger menu
document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  let menuItems = document.querySelectorAll(".navbar-item");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  for (let menuItem of menuItems) {
    menuItem.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    });
  }

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
});


//
document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".navbar-item");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector(".navbar-item[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });

    // Якор
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
  };

  // Multiple-text
  const typed = new Typed(".multiple-text", {
    strings: ["Frontend Разработчик", "HTML-Верстальщик", "Фрилансер"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});

// Scroll
const scrollReveal = ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

scrollReveal.reveal(".home-content, .heading, .header", {
  origin: "top",
});

scrollReveal.reveal(".home-img, .serv-2, .portfolio-content, .contact", {
  origin: "bottom",
});

scrollReveal.reveal(".home-content h1, .about-img, .serv-1", {
  origin: "left",
});

scrollReveal.reveal(".home-content p, .about-content, .serv-3", {
  origin: "right",
});

// circle skill

document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle");
  circles.forEach((elem) => {
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-ppercent");
    let percent = Math.floor((dots * marked) / 100);
    let points = "";
    let rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
      points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
      pointsMarked[i].classList.add("marked");
    }
  });
});
