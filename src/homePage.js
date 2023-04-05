export default function homePage(ele) {
    const subContent = document.createElement('div');
    subContent.id = "homePageSubContent";
    const subContentImage = document.createElement('img');
    const subContentHeading = document.createElement('h1');
    const subContentPara = document.createElement('p');
    subContentImage.src = '../frying-nemo-s-new-logo.jpg';
    subContentHeading.innerText = 'Frying Nemo!';
    subContentPara.innerText = "This Restaurant has been historically been serving the best nemo's from the ocean!! from past 6.7 million years ";
    // subContent.appendChild(subContentHeading);
    // subContent.appendChild(subContentImage);
    // subContent.appendChild(subContentPara);
    subContent.append(subContentHeading, subContentImage, subContentPara);
    ele.append(subContent);
}