import './styles.css'

export default function contactPage(ele) {
    const subContent = document.createElement('div');
    subContent.classList.add('subcontent');

    const pedro = document.createElement('ul');
    const pedroName = document.createElement('li')
    pedroName.innerText = 'Pedro Salamanca';
    const pedroDesign = document.createElement('li');
    pedroDesign.innerText = 'Designation : Head Chef';
    const pedroNumber = document.createElement('li');
    pedroNumber.innerText = 'Contact Number : 1231231231';
    pedro.append(pedroName, pedroDesign, pedroNumber);


    const tuco = document.createElement('ul');
    const tucoName = document.createElement('li')
    tucoName.innerText = 'Tuco Salamanca';
    const tucoDesign = document.createElement('li');
    tucoDesign.innerText = 'Designation : Manager';
    const tucoNumber = document.createElement('li');
    tucoNumber.innerText = 'Contact Number : 7891234565';
    tuco.append(tucoName, tucoDesign, tucoNumber);


    subContent.append(pedro, tuco);

    ele.appendChild(subContent);
}