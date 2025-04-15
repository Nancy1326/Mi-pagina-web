// Animación de carga básica al abrir la página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = "opacity 1s ease";
      document.body.style.opacity = 1;
    }, 100);
  });