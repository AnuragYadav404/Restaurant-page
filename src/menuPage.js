import './styles.css';

export default function menuPage(ele) {
    const subContent = document.createElement('div');
    subContent.classList.add('subcontent');
    const menuHead = document.createElement('h1');
    menuHead.innerText = "MENU";

    const menuList = document.createElement('ul');

    const item1 = document.createElement('li');
    item1.innerText = "Buffalo Wings";

    const item2 = document.createElement('li');
    item2.innerText = "Suar Wings";

    const item3 = document.createElement('li');
    item3.innerText = "KalaSuar Wings";

    menuList.append(item1, item2, item3);
    subContent.append(menuHead, menuList);
    ele.appendChild(subContent);
}   