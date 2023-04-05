import pageLoadFunction from './initialPageLoad';
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';

const content = document.getElementById('content');


//  homeStatus      -> true
//  menuStatus      -> false
//  contactStatus   -> false

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

homeButton.addEventListener('click', function() {
    // let child = pageObj.mainBody.firstChild;
    // pageObj.mainBody.remove(child);
    if(!homeStatus) {
        homeStatus = true;
        menuStatus = false;
        contactStatus = false;
        pageObj.mainBody.removeChild(pageObj.mainBody.firstElementChild);
        // debugger
        homePage(pageObj.mainBody);
    }
    
})

menuButton.addEventListener('click', function() {
    if(!menuStatus){
        homeStatus = false;
        menuStatus = true;
        contactStatus = false;
        pageObj.mainBody.removeChild(pageObj.mainBody.firstElementChild);
        menuPage(pageObj.mainBody);
    }
})

contactButton.addEventListener('click', function() {
    if(!contactStatus){
        homeStatus = false;
        menuStatus = false;
        contactStatus = true;
        pageObj.mainBody.removeChild(pageObj.mainBody.firstElementChild);
        contactPage(pageObj.mainBody);
    }
})