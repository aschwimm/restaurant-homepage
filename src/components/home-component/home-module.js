import Sushi from "./sushi-spread.jpg";


function homeHeader() {
    const element = document.createElement('h1');
    element.innerText = "I'm the Homepage Header!";
    element.classList.add('homepage');
    return element;
}

function homeDescription() {
    const element = document.createElement('div');
    element.innerText = "I'm the Homepage Description!";
    element.classList.add('description');
    return element;
}
export default function homeContainer() {
    const element = document.createElement('div');
    const sushi = new Image();
    sushi.src = Sushi;
    sushi.classList.add('home-image')
    element.classList.add('home-container');
    const wrapper = document.createElement('div');
    wrapper.classList.add('home-wrapper');
    wrapper.appendChild(homeHeader());
    wrapper.appendChild(homeDescription());
    element.appendChild(wrapper);
    element.appendChild(sushi);
    return element;
}