import { Home } from "../../pages/home/home";
import { LoginRegister } from "../../pages/LoginRegister/LoginRegister";
import "./header.css"

const routes = [
    {
        texto: "Todos los eventos",
        funcion: Home
    },
    {
        texto: "Iniciar sesion",
        funcion: LoginRegister
    }
]

   export const Header = () => {
    const header = document.querySelector("header");
    header.innerHTML = "";
    const nav = document.createElement("nav");


    const logo = document.createElement("img");
    logo.classList = "logo";
    logo.src = "https://d1.awsstatic.com/case-studies/EMEA/IBERIA/Entradas.com%20Logo.85b28b7fd7871c08e2d4017cdbc434f7292f917d.png";

    
    const buscador = document.createElement("input");
    buscador.placeholder = "🔍 Busca un evento o artista";
    buscador.classList = "buscador"


    
    nav.append(logo);

   
    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        const a = document.createElement("a");
        a.href = "#";

        if (route.texto === "Iniciar sesion" && localStorage.getItem("token")) {
            a.textContent = "Cerrar sesion";
            a.addEventListener("click", () => {
                localStorage.removeItem("token");
                Header();
            });
        } else {
            a.textContent = route.texto;
            a.addEventListener("click", route.funcion);
        }
        nav.append(a);

        if (i === 0) {
            nav.append(buscador);
        }
    }


    header.append(nav);
};


