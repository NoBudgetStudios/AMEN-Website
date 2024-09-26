// Set your dynamic content here
const productName = "AMEN"; // Change this for different products

// Text content for the hero section and CTA
const heroDescription = `Amen is a tabletop RPG created by Konstantinos Klimantakis, where players 
take on roles like mediums, priests, paranormal investigators and more. 
Their goal is to identify and banish spirits haunting various 
locations by gathering clues and performing rituals. 
Players must cooperate, use their characters’ unique abilities, 
and engage in strategic storytelling to navigate supernatural encounters and complete their mission​
`;

const heroCTA = "@Join the Newsletter";
const downloadCTA = "@Download TTRPG Rules"; // Text for the download button
const aboutText = "In Amen, players take on roles such as exorcists or paranormal investigators, each with unique abilities, exploring haunted locations to uncover the type of spirit present. The Game Master (GM) plays a dual role, not only guiding the narrative and creating an immersive, suspenseful atmosphere but also embodying the spirit itself, introducing threats and challenges to the players. As the team uses items like pendulums and holy symbols to gather clues, they must protect themselves from the spirit controlled by the GM. The ultimate goal is to perform a ritual by stacking six dice in the correct sequence, specific to the spirit type, while the GM ensures each encounter is tense and unpredictable."        

// Image URLs
const heroImage = "./images/descriptive_promo_image.png";

const promoImage1 = "./images/promo_image.png";
const promoImage2 = "./images/descriptive_promo_image.png";
const promoImage3 = "./images/promo_image.png";
const promoImage4 = "./images/promo_image.png";
const promoImage5 = "./images/descriptive_promo_image.png";
const promoImage6 = "./images/promo_image.png";

// PDF Download URL
const pdfDownloadLink = "https://drive.google.com/uc?export=download&id=1x9B1TF0NAHNZMXpAxkCOrh2xYik5Fw4M";

// Background image URL (local image)
const backgroundImage = "./images/background_image_blurred.png"; // Path to your local background image

// Function to update dynamic content on the page
function updatePageContent() {
    // Update the hero image
    document.getElementById('hero-image').src = heroImage;
    
    document.getElementById('promo-img-1').src = promoImage1;
    document.getElementById('promo-img-2').src = promoImage2;
    document.getElementById('promo-img-3').src = promoImage3;
    document.getElementById('promo-img-4').src = promoImage4;
    document.getElementById('promo-img-5').src = promoImage5;
    document.getElementById('promo-img-6').src = promoImage6;

    // Dynamically update the background image for the page
    document.body.style.backgroundImage = `url(${backgroundImage})`;

    // Update the page title
    document.getElementById('page-title').textContent = productName;

    // Update the logo in the navigation
    document.getElementById('product-name-logo').textContent = productName;

    // Update the main heading in the hero section
    document.getElementById('product-name').textContent = productName;

    // Update the hero section description and call-to-action
    document.getElementById('hero-description').textContent = heroDescription;
    document.getElementById('hero-cta').textContent = heroCTA;

    // Update the "About" section dynamically
    document.getElementById('about-text').textContent = aboutText;

    // Update promo image URLs
    document.getElementById('promo-img-1').src = promoImage1;
    document.getElementById('promo-img-2').src = promoImage2;
    document.getElementById('promo-img-3').src = promoImage3;
    document.getElementById('promo-img-4').src = promoImage4;
    document.getElementById('promo-img-5').src = promoImage5;
    document.getElementById('promo-img-6').src = promoImage6;

    // Update the download PDF link and CTA text
    document.getElementById('download-btn_1').href = pdfDownloadLink;
    document.getElementById('download-btn_1').innerHTML = `<i class="fas fa-download"></i> ${downloadCTA}`;
    document.getElementById('download-btn_2').href = pdfDownloadLink;
    document.getElementById('download-btn_2').innerHTML = `<i class="fas fa-download"></i> ${downloadCTA}`;
    document.getElementById('download-btn_3').href = pdfDownloadLink;
    document.getElementById('download-btn_3').innerHTML = `<i class="fas fa-download"></i> ${downloadCTA}`;

    // Update the call-to-action button in the hero section (Newsletter)
    document.getElementById('newsletter-btn_1').innerHTML = `<i class="fas fa-envelope"></i> ${newsletterCTA}`;
    // Update the second newsletter button
    document.getElementById('newsletter-btn_2').innerHTML = `<i class="fas fa-envelope"></i> ${newsletterCTA}`;

    // Update the footer text dynamically
    document.getElementById('footer-text').innerHTML = `&copy; 2024 ${productName}. All rights reserved.`;
}

// Call the function to update the content
updatePageContent();
