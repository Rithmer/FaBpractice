const KEY = "theme",
  btn = document.querySelector(".theme-toggle");
const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;

if (
  localStorage.getItem(KEY) === "dark" ||
  (!localStorage.getItem(KEY) && prefersDark)
) {
  document.body.classList.add("theme-dark");
  btn?.setAttribute("aria-pressed", "true");
}

btn?.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("theme-dark");
  btn.setAttribute("aria-pressed", String(isDark));
  localStorage.setItem(KEY, isDark ? "dark" : "light");
});

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");

  if (sessionStorage.getItem("loaderShown")) {
    loader.style.display = "none";
  } else {
    sessionStorage.setItem("loaderShown", "true");
    setTimeout(() => {
      loader.style.display = "none";
    }, 3000);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".side-nav__link");
  const current = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

