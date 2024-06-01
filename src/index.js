import './style.css';

import home from "./components/home-component/home-module";
import menu from "./components/menu-component/menu-module";
import about from "./components/about-component/about-module";

document.addEventListener('DOMContentLoaded', ()=>{
    const container = document.getElementById('content');
    container.appendChild(home());
    const homeButton = document.getElementById('home');
    homeButton.addEventListener('click', () => {
        container.innerHTML = '';
        container.appendChild(home());
    });
    const menuButton = document.getElementById('menu');
    menuButton.addEventListener('click', () => {
        container.innerHTML = '';
        container.appendChild(menu());
    })
    const aboutButton = document.getElementById('about');
    aboutButton.addEventListener('click', () => {
        container.innerHTML = '';
        container.appendChild(about());
    })
});