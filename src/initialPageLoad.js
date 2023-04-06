import './styles.css';

export default function pageLoad() {
    // const subContent = document.createElement('div');
    // const subContentImage = document.createElement('img');
    // const subContentHeading = document.createElement('h1');
    // const subContentPara = document.createElement('p');
    // subContentImage.src = '../frying-nemo-s-new-logo.jpg';
    // subContentHeading.innerText = 'Frying Nemo!';
    // subContentPara.innerText = "This Restaurant has been historically been serving the best nemo's from the ocean!! from past 6.7 million years ";
    // // subContent.appendChild(subContentHeading);
    // // subContent.appendChild(subContentImage);
    // // subContent.appendChild(subContentPara);
    // subContent.append(subContentHeading, subContentImage, subContentPara)
    // return subContent

    const container = document.createElement('div');

    const header = document.createElement('div');
    header.classList.add('header');
    const mainBody = document.createElement('div');
    const footer = document.createElement('div');

    const homeButton = document.createElement('button');
    homeButton.id = "home";
    homeButton.innerText = "HOME";
    homeButton.classList.add('active');
    const menuButton = document.createElement('button');
    menuButton.innerText = "MENU";
    menuButton.id = "menu";
    const contactButton = document.createElement('button');
    contactButton.innerText = "CONTACT";
    contactButton.id = "contact";

    header.append(homeButton, menuButton, contactButton);
    container.append(header, mainBody, footer);

    return {container, header, mainBody, footer, homeButton, menuButton, contactButton};

}