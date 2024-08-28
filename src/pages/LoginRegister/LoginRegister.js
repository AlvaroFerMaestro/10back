import { Header } from "../../components/Header/header";
import { Home } from "../home/home";
import "./LoginRegister.css"

export const LoginRegister = () => {

    const main = document.querySelector("main");
    main.innerHTML = "";

    const loginDiv = document.createElement("div");

    Login(loginDiv);

    loginDiv.id = "login";

    main.append(loginDiv);
};

const Login = (elementoPadre) => {

    const form = document.createElement("form");
    const divImg = document.createElement("div");
    divImg.classList = "divImg";
    const imgDreams = document.createElement("img");
    imgDreams.classList = "imgDreams"
    imgDreams.src = "https://i.pinimg.com/564x/f3/b6/d8/f3b6d8bd72b6ab6392bb1bd0c813d2b1.jpg"
    const divNiños = document.createElement("div")
    divNiños.classList = "divNinos";
    const imgNiños = document.createElement("img")
    imgNiños.classList = "imgNinos"
    imgNiños.src = "https://i.pinimg.com/564x/30/fc/ac/30fcac16055f50a62b6b2e827429ce49.jpg"


    const inputUn = document.createElement("input");
    const inputPass = document.createElement("input");
    const button = document.createElement("button");
  

    inputPass.type = "password";
    inputUn.placeholder = "🚹      Usuario";
    inputPass.placeholder = "🔐      Contraseña"
    button.textContent = "Iniciar sesion"

    elementoPadre.append(form);
    form.append(inputUn);
    form.append(inputPass);
    form.append(button);
    divImg.append(imgDreams)
    form.append(divImg)
    divNiños.append(imgNiños);
    form.append(divNiños)
    


    // Logica submit


    form.addEventListener("submit", () => submit(inputUn.value, inputPass.value, form));

}

// Logica submit

const submit = async (userName, password, form) => {

    const objetoFInal = JSON.stringify({
        userName,
        password
    });

    const opciones = {
    method: "POST",
    body: objetoFInal,
    headers:{
        "Content-Type": "application/json"
    }
}

   const res = await fetch("http://localhost:3000/api/v1/users/login", opciones);

   if (res.status === 400 ){
    const pError = document.createElement("p");
    pError.textContent = "Usuario o contraseña incorrectos";
    pError.classList.add("error")

    form.append(pError);
    return;
   }

   const pError = document.querySelector(".error");
   if(pError){
    pError.remove();
   }

   const respuestaFinal = await res.json();
   localStorage.setItem("token", respuestaFinal.token);
   localStorage.setItem("user", JSON.stringify(respuestaFinal.user));
   Home();
   Header();
}

const register = async =>{
    const main = document.querySelector("main");
    main.innerHTML = " "
    const form = document.createElement ("form");
    form.classList = "formLogin";
    main.append(form);

    
    const inputUn = document.createElement("input");
    inputUn.placeholder = "Usuario";
    const inputPass = document.createElement ("input");
    inputPass.placeholder = "Contraseña";
    inputPass.type = "password"
 
    
    const divError = document.createElement ("div");
    divError.className = "pError";
    divError.style.display = "none";
    const button = document.createElement("button");
    button.classList = "registro"
    button.textContent = "Registrate";

    form.append(inputUn);
    form.append(inputPass)
    form.append(divError);
    form.append(button);
    
    form.addEventListener("submit", async () => {
        userName = inputUn.value;
        
    })

}