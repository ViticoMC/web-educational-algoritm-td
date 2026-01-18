// Este script previene el parpadeo de tema al cargar la página
// Se ejecuta antes de renderizar la página
(function () {
  const theme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = theme || (prefersDark ? "dark" : "light");

  if (initialTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  document.documentElement.style.colorScheme = initialTheme;
})();
