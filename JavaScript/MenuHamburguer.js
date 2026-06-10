function ClickMenu() {
    const Menu = document.querySelector(".MenuHeader")
    if (Menu.style.display == "flex") {
        Menu.style.display = "none"
    } else {
        Menu.style.display = "flex"
    }
}