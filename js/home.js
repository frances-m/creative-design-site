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