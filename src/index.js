import pageLoadFunction from './initialPageLoad';
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';
import './styles.css';

const content = document.getElementById('content');
const body  = document.getElementById('body');

var homeStatus = true;
var menuStatus = false;
var contactStatus = false;

// console.log("Sewwwy is served!");
const pageObj = pageLoadFunction();
// console.log(pageObj)

content.append(pageObj.container);
homePage(pageObj.mainBody);

const homeButton = pageObj.homeButton;
const menuButton = pageObj.menuButton;
const contactButton = pageObj.contactButton;
var currentButton = homeButton;

homeButton.addEventListener('click', function() {
    // let child = pageObj.mainBody.firstChild;
    // pageObj.mainBody.remove(child);
    if(currentButton !== homeButton) {
        currentButton.classList.remove('active');
        currentButton = homeButton;
        currentButton.classList.add('active');
        pageObj.mainBody.removeChild(pageObj.mainBody.firstElementChild);
        // debugger
        homePage(pageObj.mainBody);
        
    }
    
})

menuButton.addEventListener('click', function() {
    if(currentButton !== menuButton){
        currentButton.classList.remove('active');
        currentButton = menuButton;
        currentButton.classList.add('active');
        pageObj.mainBody.removeChild(pageObj.mainBody.firstElementChild);
        menuPage(pageObj.mainBody);
        
    }
})

contactButton.addEventListener('click', function() {
    if(currentButton !== contactButton){
        currentButton.classList.remove('active');
        currentButton = contactButton;
        currentButton.classList.add('active');
        pageObj.mainBody.removeChild(pageObj.mainBody.firstElementChild);
        contactPage(pageObj.mainBody);
       
    }
})