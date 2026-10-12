// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    nav.classList.contains("open")
  );
});

// CLOSE MENU AFTER CLICKING A LINK

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// SCROLL REVEAL ANIMATIONS

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

// APPLY ANIMATION TO ALL REVEAL ELEMENTS

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay =
    `${Math.min(index % 4, 3) * 90}ms`;

  observer.observe(element);
});