const toggleButton = document.getElementById("theme-toggle");
const darkSvg = document.getElementById("theme-toggle-dark-icon");
const lightSvg = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: 'dark')").matches)
) {
  lightSvg.classList.remove("hidden");
} else {
  darkSvg.classList.remove("hidden");
}

toggleButton.addEventListener("click", toggleModes);

function addDark() {
  document.documentElement.classList.add("dark");
  localStorage.setItem("color-theme", "dark");
}

function addLight() {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("color-theme", "light");
}

function toggleModes() {
  darkSvg.classList.toggle("hidden");
  lightSvg.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    let colorTheme = localStorage.getItem("color-theme");
    colorTheme === "light" ? addDark() : addLight();
  } else {
    document.documentElement.classList.contains("dark")
      ? addLight()
      : addDark();
  }
}
