// Set your dynamic content here
const productName = "AMEN"; // Change this for different products

// Text content for the hero section and CTA
const heroDescription = "An exciting and immersive horror experience for all TTRPG fans.";
const heroCTA = "Join the Newsletter";
const downloadCTA = "Download TTRPG Rules"; // Text for the download button

// Image URLs
const heroImage = "./images/cover.png";

const promoImage1 = "./images/example_scene.png";
const promoImage2 = "./images/introduction.png";
const promoImage3 = "./images/items.png";
const promoImage4 = "./images/character_sheet.png";
const promoImage5 = "./images/spirit_sheet.png";
const promoImage6 = "./images/cover.png";

// PDF Download URL
const pdfDownloadLink = "https://drive.google.com/file/d/1x9B1TF0NAHNZMXpAxkCOrh2xYik5Fw4M/view?usp=sharing"; // Path to your TTRPG rules PDF file

// Background image URL (local image)
const backgroundImage = "./images/background_image.png"; // Path to your local background image

// Function to update dynamic content on the page
function updatePageContent() {
    // Update the hero image
    document.getElementById('hero-image').src = heroImage;

    // Update the page title
    document.getElementById('page-title').textContent = productName;

    // Update the logo in the navigation
    document.getElementById('product-name-logo').textContent = productName;

    // Update the main heading in the hero section
    document.getElementById('product-name').textContent = productName;

    // Update the hero section description and call-to-action
    document.getElementById('hero-description').textContent = heroDescription;
    document.getElementById('hero-cta').textContent = heroCTA;

    // Dynamically update the background image for the page
    document.body.style.backgroundImage = `url(${backgroundImage})`;

    // Update promo image URLs
    document.getElementById('promo-img-1').src = promoImage1;
    document.getElementById('promo-img-2').src = promoImage2;
    document.getElementById('promo-img-3').src = promoImage3;
    document.getElementById('promo-img-4').src = promoImage4;
    document.getElementById('promo-img-5').src = promoImage5;
    document.getElementById('promo-img-6').src = promoImage6;

    // Update the download PDF link and CTA text
    document.getElementById('download-btn').href = pdfDownloadLink;
    document.getElementById('download-btn').textContent = downloadCTA;

    // Update the footer text dynamically
    document.getElementById('footer-text').innerHTML = `&copy; 2024 ${productName}. All rights reserved.`;
}

// Call the function to update the content
updatePageContent();
