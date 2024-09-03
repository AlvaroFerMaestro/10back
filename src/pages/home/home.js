import { carousel } from "../../components/carousel/carousel";
import "./home.css"

export const Home = async () =>{

    const main = document.querySelector("main");
    main.innerHTML = ""

    const res = await fetch("http://localhost:3000/api/v1/eventos")

    const eventos = await res.json();
    
   pintarEventos(eventos, main);
   

}

const pintarEventos = (eventos, elementoPadre) => {

    const divEventos = document.createElement("div");
    divEventos.className = "divEventos"
    const divMusic = document.createElement("div");
    divMusic.className = "divMusic";
    const imgMusic = document.createElement("img")
    imgMusic.className = "imgMusic"
    imgMusic.src = "https://static.vecteezy.com/system/resources/previews/022/984/297/non_2x/headphones-brush-painted-icon-free-png.png"
    


    for (const evento of eventos) {
    const divEvento =document.createElement("div");
    const titulo = document.createElement("h3");
    const img = document.createElement("img");
    const descripcion = document.createElement("p")
    const precio = document.createElement("p");
    const botonComprar = document.createElement("button");
    const divByP = document.createElement("div")
    const like = document.createElement("img")
    // COLOCAR EL LIKE EN LOS EVENTOS 1:23  DE LA CALSE 2

    divEvento.className = "divEvento";
    divByP.className = "divByP"
    botonComprar.className = "botoncomprar"
    botonComprar.textContent = "Comprar"
    titulo.textContent = evento.titulo;
    img.src = evento.imagen
    descripcion.textContent = evento.descripcion;
    precio.textContent = `${evento.precio}€`

    // Añadir evento click al botón
  botonComprar.addEventListener("click", () => {
    // Redirigir a la página de compra (cambia la URL según tu necesidad)
    window.location.href = `http://localhost:3000/compra/${tucktuck.js}`;
  });

    divByP.append(botonComprar, precio)
    divEvento.append(titulo, img, descripcion, divByP)
    divEventos.append(divEvento)
    
    
    }
    divEventos.append(divMusic)
    divMusic.append(imgMusic)
    elementoPadre.append(divEventos)
}


// http://localhost:3000/api/v1/users/eventos