import { carousel } from './src/components/carousel/carousel';
import { Header } from './src/components/Header/header';
import { Home } from './src/pages/home/home';
import './style.css'

  const main = () => {
  const app = document.querySelector("#app");

  app.innerHTML = 
  `<header></header>
   <main></main>
   `
} 

main()
Header()
Home()
carousel()
