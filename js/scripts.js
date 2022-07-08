/** HELPER FUNCTIONS **/
// takes a HTML element and an object (ex. {"property": "value"}) and sets their inline CSS styles
// I took the idea for this helper function from this post on JavaScript Tutorial's website - https://www.javascripttutorial.net/dom/css/add-styles-to-an-element/
const addStyles = (element, style) => {
    for (const property in style) {
        element.style[property] = style[property];
    }
}


/*** NAV ***/

/* Sticky Header */
/* PSUEDOCODE */
// add the `position: fixed` rule to the all of elements with a class of .header__nav-bar (if js doesn't load, mainNav is unaffected)
// if the user is one the contact page... 
    // add relative positioning to the header's display image and the main content
// otherwise...
    // add an event listener to the .header__nav-bar elements that listens for a scroll event
    // when the user scrolls, check the amount scrolled on the Y axis
    // if the user's scroll position is less than a certain amount, set the background-color to transparent
    // if the user's scroll position is more than a certain amount, set the background-color to white


const mainNav = document.querySelectorAll("header .wrapper");

mainNav.forEach((navBar) => {
    // add the {position: fixed} css rule to the navBar
    addStyles(navBar, {'position': 'fixed'});

    // check to see if the user is on the contact page
    if (window.location.pathname.includes('contact')) {

        // add relevant styles to the contact page
        addStyles(navBar, {"backgroundColor": "white", "box-shadow": "0 2px 20px rgba(0,0,0,.2)"});
        addStyles(document.querySelector('header .display-img'), {"position": "relative", "top": "120px"});
        addStyles(document.querySelector('.contact h2'), {"position": "relative", "top": "40px"});
    } else {
        // on the other pages, add a scroll event listener
        document.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                // if the scroll position is 0, set the navBar backgroundColor to be transparent...
                addStyles(navBar, {"backgroundColor": "transparent", "box-shadow": "none"});
            } else {
                // otherwise, set the navBar backgroundColor to be white
                addStyles(navBar, {"backgroundColor": "white", "box-shadow": "0 2px 20px rgba(0,0,0,.2)"});
            }
        });
    }
});


/* Mobile Nav */
/* PSUEDOCODE */
// when a user clicks on the #slide-out-btn...
    // toggle a class on the header that contains relevant styling

const slideOutBtn = document.querySelector("#slide-out-btn");
const header = document.querySelector("header");

slideOutBtn.addEventListener('click', () => {
    header.classList.toggle("open-slide-out");
});


/* Search Bar */




