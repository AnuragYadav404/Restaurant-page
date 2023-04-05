import pageLoadFunction from './initialPageLoad';
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';

const content = document.getElementById('content');

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
    console.log("Event started")
    pageObj.mainBody.removeChild(pageObj.mainBody.firstElementChild);
    console.log("child removed")
    // debugger
    homePage(pageObj.mainBody);
    console.log("Child added")
})

menuButton.addEventListener('click', function() {
    pageObj.mainBody.removeChild(pageObj.mainBody.firstElementChild);
    menuPage(pageObj.mainBody);
})

contactButton.addEventListener('click', function() {
    pageObj.mainBody.removeChild(pageObj.mainBody.firstElementChild);
    contactPage(pageObj.mainBody);
})