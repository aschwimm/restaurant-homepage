import DiningRoom from './dining-room.jpg';

function aboutPage(header, description, image) {
    const element = document.createElement('div');
    const aboutImage = new Image();
    const aboutHeader = document.createElement('h1');
    const aboutDescription = document.createElement('div');
    aboutHeader.innerText = header;
    aboutDescription.innerText = description;
    aboutImage.src = image;
    aboutImage.classList.add('about-image');
    element.appendChild(aboutHeader);
    element.appendChild(aboutDescription);
    element.appendChild(aboutImage);
    return element;
}

export default function about() {
    const element = document.createElement('div');
    const content = aboutPage(
        "I'm the about page header!",
        "I'm the about page description!",
        DiningRoom
    )
    element.appendChild(content);
    return element;
}