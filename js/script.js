const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// =========================
// THEME
// =========================

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {
root.dataset.theme = savedTheme;
}

function updateThemeIcon() {
themeBtn.innerHTML =
root.dataset.theme === "dark"
? '<i class="fa-solid fa-sun"></i>'
: '<i class="fa-solid fa-moon"></i>';
}

updateThemeIcon();

themeBtn.addEventListener("click", () => {

root.dataset.theme =
root.dataset.theme === "dark"
? "light"
: "dark";

localStorage.setItem(
"portfolio-theme",
root.dataset.theme
);

updateThemeIcon();
});

// =========================
// MOBILE MENU
// =========================

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");

menuBtn.innerHTML = isOpen
? '<i class="fa-solid fa-xmark"></i>'
: '<i class="fa-solid fa-bars"></i>';
});

navLinks.querySelectorAll("a").forEach((link) => {

link.addEventListener("click", () => {

navLinks.classList.remove("open");

menuBtn.innerHTML =
  '<i class="fa-solid fa-bars"></i>';

});

});

// =========================
// SCROLL REVEAL
// =========================

const revealObserver = new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {

  if (entry.isIntersecting) {
    entry.target.classList.add("show");
  }

});

},
{
threshold: 0.12
}
);

document
.querySelectorAll(".reveal")
.forEach((element) => {
revealObserver.observe(element);
});

// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {

  if (entry.isIntersecting) {

    links.forEach((link) => {

      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      );

    });

  }

});

},
{
rootMargin: "-35% 0px -55% 0px"
}
);

sections.forEach((section) => {
sectionObserver.observe(section);
});

// =========================
// FOOTER YEAR
// =========================

document.getElementById("year").textContent =
new Date().getFullYear();