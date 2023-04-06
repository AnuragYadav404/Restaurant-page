import './styles.css';
import crumbs from './fishCrumbs.jpg';
import sword from './fishSword.jpg';
import tacos from './fishTacos.jpg';

export default function menuPage(ele) {
    const subContent = document.createElement('div');
    subContent.classList.add('subcontent');

    const item1 = document.createElement('div');
    item1.classList.add('item');
    const fishTacos = document.createElement('h1');
    fishTacos.innerText = 'Fish Tacos'
    // const fishTacosImg = document.createElement('img');
    // fishTacosImg.classList.add('menuImage');
    // fishTacosImg.src = '../fishTacos.webp'
    const fishTacosImg = new Image();
    fishTacosImg.src = tacos;
    fishTacosImg.classList.add('menuImage');

    const fishTacosDesc = document.createElement('p');
    fishTacosDesc.innerText = 'These crispy fish tacos with shredded cabbage and a spicy homemade white sauce are just delicious! Serve with homemade pico de gallo and lime wedges to squeeze on top.';
    item1.append(fishTacos, fishTacosImg, fishTacosDesc)

    const item2 = document.createElement('div');
    item2.classList.add('item');
    const fishCrumbs = document.createElement('h1');
    fishCrumbs.innerText = 'Air-Fried Crumbed Fish'
    // const fishCrumbsImg = document.createElement('img');
    // fishCrumbsImg.classList.add('menuImage');
    // fishCrumbsImg.src = '../fishCrumbs.webp'
    const fishCrumbsImg = new Image();
    fishCrumbsImg.src = crumbs;
    fishCrumbsImg.classList.add('menuImage');

    const fishCrumbsDesc = document.createElement('p');
    fishCrumbsDesc.innerText = 'This air fryer fish recipe is delicious. Crumbed fish is one of my favorite fried items, and this air-fried version of the recipe gives me great flavor without the fat.';
    item2.append(fishCrumbs, fishCrumbsImg, fishCrumbsDesc)

    const item3 = document.createElement('div');
    item3.classList.add('item');
    const fishSword = document.createElement('h1');
    fishSword.innerText = 'Grilled Marinated Swordfish'
    // const fishSwordImg = document.createElement('img');
    // fishSwordImg.classList.add('menuImage');
    // fishSwordImg.src = '../fishSword.webp'
    const fishSwordImg = new Image();
    fishSwordImg.src = sword;
    fishSwordImg.classList.add('menuImage');

    const fishSwordDesc = document.createElement('p');
    fishSwordDesc.innerText = "A quick swordfish marinade made with white wine, lemon juice, and soy sauce adds delicious flavor to the fish when it's grilled. Serve the grilled steaks with lemon wedges.";
    item3.append(fishSword, fishSwordImg, fishSwordDesc)


    subContent.append(item1, item2, item3);
    

    ele.appendChild(subContent);
}   