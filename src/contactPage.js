export default function contactPage(ele) {
    const subContent = document.createElement('div');

    const contact1 = document.createElement('h1');
    const p1 = document.createElement('p1');
    contact1.innerText = "Contact Number 1 :"
    p1.innerText = "1231231234";

    const contact2 = document.createElement('h1');
    const p2 = document.createElement('p2');
    contact2.innerText = "Contact Number 2 :"
    p2.innerText = "3331231234";

    subContent.append(contact1,p1,contact2,p2);
    ele.appendChild(subContent);
}