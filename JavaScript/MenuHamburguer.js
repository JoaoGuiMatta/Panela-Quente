// abre o menu e troca o icone
function ClickMenu() {
  const Menu = document.querySelector(".MenuHeader");
  const Icone = document.getElementById("Burguer");

  if (Menu.style.display === "flex") {
    Menu.style.display = "none";
    Icone.className = "bi bi-list";
  } else {
    Menu.style.display = "flex";
    Icone.className = "bi bi-x-lg";
  }
}
// =========================================================================================================

// =========================================================================================================
//esconde e abre o menu
function toggleSubmenu(e) {
  e.preventDefault();
  const submenu = document.querySelector(".MenuHeader .submenu");
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}
// =========================================================================================================
