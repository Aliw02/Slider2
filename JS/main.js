// Get Slider Items | Array.from [ES6 Feature]
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// Get Number of Slides
let slideCounts = sliderImages.length;

// Set Current Slide
let currentSlide = 1;

// Slide Number Element
let slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");


// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


// Create The Main UL Element
let paginationElement = document.createElement('ul');

// Set ID on Created UL Element
paginationElement.setAttribute('id', "pagination-ul");

// Create List Items Based on Slides Count
for (let i = 1; i <= slideCounts; i++) {

    // Create The LI
    let paginationItems = document.createElement('li');

    // Set Custom Attribute
    paginationItems.setAttribute('data-index', i);

    // Set Item Content
    paginationItems.appendChild(document.createTextNode(i));

    // Append Items To the main UL list
    paginationElement.appendChild(paginationItems)

}


// Add The Created UL Element To The Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The new created UL
let paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.from [ES6 Feature]
let paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));


// Loop Through All Bullets Items
for (let i = 0; i < paginationBullets.length; i++) {

    paginationBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute("data-index"));

        theChecker();

    }

}




// Trigger the Checker function
theChecker();

// Next Slide Function
function nextSlide() {
    if (nextButton.classList.contains("disabled")) {

        // Do Nothing
        return false
    }

    else {
        currentSlide++;

        theChecker();
    }
}


// Previous Slide Function
function prevSlide() {
    if (prevButton.classList.contains("disabled")) {

        // Do Nothing
        return false
    }

    else {
        currentSlide--;

        theChecker();
    }
}



// Create the Checker Function
function theChecker() {
    // Set the Slide Number
    slideNumberElement.textContent = 'Slid #' + (currentSlide) + ' of ' + (slideCounts);

    // Remove All Active Classes
    removeAllActive()

    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add("active");

    // Set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");

    // Check if current Slide is the First
    if (currentSlide == 1) {

        // Add Disabled Class on Previous Button
        prevButton.classList.add("disabled");
    }

    else {

        // Remove Disabled Class on Previous Button
        prevButton.classList.remove("disabled");
    }

    // Check if current Slide is the last
    if (currentSlide == slideCounts) {

        // Add Disabled Class on Next Button
        nextButton.classList.add("disabled");
    }

    else {

        // Remove Disabled Class on Next Button
        nextButton.classList.remove("disabled");
    }
}


// Remove All Active Classes From Image and Pagination  Bullets
function removeAllActive() {
    // Loop Through Images
    sliderImages.forEach((img) => {

        img.classList.remove('active')

    })

    // Loop Through Pagination Bullets
    paginationBullets.forEach((bullets) => {

        bullets.classList.remove('active')

    })

}