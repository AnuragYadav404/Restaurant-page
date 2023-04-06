import './styles.css';
import logo from './fryingNemo.jpg';

export default function homePage(ele) {
    const subContent = document.createElement('div');
    //const subContent = document.createElement('ul');
    subContent.id = "homePageSubContent";
    subContent.classList.add('subcontent');
    const subContentImage = new Image();
    const subContentHeading = document.createElement('h1');
    const subContentPara = document.createElement('p');
    /*

    const subContentImage = document.createElement('img');
    const subContentHeading = document.createElement('h1');
    const subContentPara = document.createElement('p');
    */
    subContentImage.src = logo;
    subContentHeading.innerText = 'Frying Nemo!';
    subContentPara.innerText = "Welcome to Frying Nemo, where the taste of the sea meets the sizzle of the kitchen! Our restaurant offers an unforgettable culinary experience that is sure to tantalize your taste buds.\n\nAt Frying Nemo, we take great pride in serving only the freshest seafood sourced directly from the ocean. Our expert chefs use their creativity and skill to bring out the unique flavors of each dish, creating a menu that is both classic and innovative.\n\nWhether you're in the mood for a classic fish and chips or a more exotic seafood platter, our menu has something for everyone. We also offer a wide range of vegetarian and gluten-free options, ensuring that all of our guests can enjoy a delicious meal.\n\nOur restaurant has a warm and welcoming atmosphere that is perfect for a romantic dinner, a family outing, or a night out with friends. With attentive service and a menu that is sure to impress, Frying Nemo is the perfect place to celebrate any occasion.\n\nWe take great care to ensure that every guest leaves our restaurant satisfied and eager to return. Come visit us at Frying Nemo and experience the ultimate seafood dining experience!.";
    subContentPara.style.width = '80%'
    // subContent.appendChild(subContentHeading);
    // subContent.appendChild(subContentImage);
    // subContent.appendChild(subContentPara);
    subContent.append(subContentHeading, subContentImage, subContentPara);
    ele.append(subContent);
}