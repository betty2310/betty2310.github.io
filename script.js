const themeStyle = document.getElementById("theme-style");

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

if (prefersDarkMode) {
  themeStyle.href = "stylesheets/style-dark.css";
} else {
  themeStyle.href = "stylesheets/style-light.css";
}
