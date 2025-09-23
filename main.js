function modoEscuro(){
    const link = document.getElementById("tema");
    if (link.getAttribute("href") === "light.css") {
        link.setAttribute("href", "dark.css");
        document.querySelector("#modo").innerHTML = "Modo Claro"
    } else {
        link.setAttribute("href", "light.css");
        document.querySelector("#modo").innerHTML = "Modo Escuro"
    }
}