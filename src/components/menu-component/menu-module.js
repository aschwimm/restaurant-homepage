import Sashimi from './sashimi.jpg';
import ShortRibs from './short-ribs.jpg';
import SushiRolls from './sushi-rolls.jpg';

function menuItem(header, description, image) {
    const element = document.createElement('div');
    const menuHeader = document.createElement('h1');
    const menuDescription = document.createElement('div');
    menuHeader.innerText = header;
    menuDescription.innerText = description;
    const menuImage = new Image();
    menuImage.src = image;
    menuImage.classList.add('menu-image');
    element.appendChild(menuHeader);
    element.appendChild(menuDescription);
    element.appendChild(menuImage);
    return element;
}

export default function menu() {
    const element = document.createElement('div');
    const sashimi = menuItem(
        "I'm the sashimi header!",
        "I'm the sashimi description!",
        Sashimi
    )
    const shortRibs = menuItem(
        "I'm the short-ribs header!",
        "I'm the short-ribs description!",
        ShortRibs
    )
    const sushiRolls = menuItem(
        "I'm the sushi-roll header!",
        "I'm the sushi-rolls description!",
        SushiRolls
    )
    element.appendChild(sashimi);
    element.appendChild(shortRibs);
    element.appendChild(sushiRolls);
    return element;
}