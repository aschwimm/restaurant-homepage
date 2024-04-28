import './style.css';

import home from "./components/home-component/home-module";


document.addEventListener('DOMContentLoaded', ()=>{
    const container = document.getElementById('content');
    container.appendChild(home());
    
    
  
    
});