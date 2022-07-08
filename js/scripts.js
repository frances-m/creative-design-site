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

        const positioning = {"position": "relative", "top": "80px"};

        // add relevant styles to the contact page
        addStyles(navBar, {"backgroundColor": "white"});
        addStyles(document.querySelector('header .display-img'), positioning);
        addStyles(document.querySelector('.contact-page'), positioning);
    } else {
        // on the other pages, add a scroll event listener
        document.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                // if the scroll position is 0, set the navBar backgroundColor to be transparent...
                addStyles(navBar, {"backgroundColor": "transparent"});
            } else {
                // otherwise, set the navBar backgroundColor to be white
                addStyles(navBar, {"backgroundColor": "white"});
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


/*** HOME PAGE ***/

/* Carousel */
/* PSUEDOCODE */
// create an array of objects which holds the data for the carousel items
// create an index variable with a default value of 0
// when a user clicks on a carousel arrow button...
    // check the arrow direction
        // if the right arrow was clicked, increase the index variable by 1
        // if the left arrow was clicked, decrease the index variable by 1
    // then check to see...
        // if the index variable is greater than the length of the carousel items array, set the index variable to 0
        // if the index variable is less than 0, set the index variable to the length of the carousel items array
    // set the data of the carousel item at the index stored in the index variable to be displayed in the carousel

const carouselBtns = document.querySelectorAll(".home-carousel__btn");
const carouselImg = document.querySelector("#carousel-img");
const carouselDescription = document.querySelector("#carousel-text");

const carouselItems = [
    {
        imgSrc: "./assets/carousel-1.jpeg",
        alt: "a collection of design documents. in the center is a document featuring illegible text and a photo of a person",
        description: "Ecosystem iPad disruptive social media low hanging fruit stealth launch party handshake market branding. Pitch agile development business plan stealth channels prototype mass market product management value proposition startup strategy. Product management early adopters user experience metrics advisor gamification responsive web design hackathon termsheet backing series."
    },
    {
        imgSrc: "./assets/carousel-2.jpg",
        alt: "a collection of design system documents laid on a concrete surface",
        description: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approach."
    },
    {
        imgSrc: "./assets/carousel-3.jpg",
        alt: "a hand drawn design blueprint of a chair",
        description: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Organically grow the holistic world view of disruptive innovate."
    }
];

let carouselIndex = 0;

carouselBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // check event target's arrow direction and iterate the index variable
        if (e.target.classList.contains("right-arrow")) {
            carouselIndex++;
        } else if (e.target.classList.contains("left-arrow")) {
            carouselIndex--;
        }
        
        // loop to the other side of the array if the index is higher or lower than the number of items in the array
        if (carouselIndex > (carouselItems.length - 1)) {
            carouselIndex = 0;
        } else if (carouselIndex < 0) {
            carouselIndex = carouselItems.length - 1;
        }

        // adjust the carousel's html elements to display the selected carousel item on the page
        carouselImg.setAttribute("src", carouselItems[carouselIndex].imgSrc);
        carouselImg.setAttribute("alt", carouselItems[carouselIndex].alt);
        carouselDescription.innerHTML = carouselItems[carouselIndex].description;
    });
});

/* Search Bar */


/*** BLOG PAGE ***/
/* Comments Section */




/*** CONTACT PAGE ***/