////TEXTS
const productName = "AMEN";

const newsletter_button_text = "Join the Newsletter";
const download_button_text = "Download the Rules";

//const youtubeVideoUrl = "https://www.youtube.com/embed/wDd_-Wi-rPs?autoplay=1&mute=1";

const section_1_button_text = "Introduction";
const section_2_button_text = "About";
const section_3_button_text = "More";
const section_4_button_text = "Newsletter";

const heading_1_1 = "AMEN"
const heading_2_1 = "Introduction"
const section_text_1 = `Amen is a horror tabletop RPG created by Konstantinos Klimantakis, where players 
take on roles like mediums, priests, paranormal investigators and more. 
Their goal is to identify and banish spirits haunting various 
locations by gathering clues and performing rituals. 
Players must cooperate, use their characters’ unique abilities, 
and engage in strategic storytelling to navigate supernatural encounters and complete their mission​`;

const heading_2_2 = "About"
const section_text_2 = `Enter the eerie world of AMEN, 
where you embody characters like the Ritualist, 
Medium, Priest, and more to confront the unknown.
Guided by the Game Master’s haunting narration, 
explore places like haunted manors or catacombs using items like Ouija boards, 
EMF detectors, and Tarot cards to communicate with restless spirits.
With the innovative dice-stacking ritual mechanic heightening the tension, 
delve deeper into the paranormal mysteries!`

const heading_2_3 = "More"
const section_text_3 = ""

const heading_2_4 = "Newsletter"
const section_text_4 = "We’d love to keep you updated with all the latest news and exciting developments!"

const footer_copyright = "AMEN - 2024 All rights reserved. v2024.10.01.10"   

////Image URLS

//const og_image = "./images/promo-material/qr_promo_image.png";
//const twitter_image = "./images/promo-material/qr_promo_image.png";

const backgroundImage = "./images/background_image_blurred.png";

const promo_image = "./images/promo-material/promo_image.png";

const promoImage1 = "./images/promo-material/promo_image (1).png";
const promoImage2 = "./images/promo-material/promo_image (2).png";
const promoImage3 = "./images/promo-material/promo_image (3).png";
const promoImage4 = "./images/promo-material/qr_promo_image.png";
const promoImage5 = "./images/promo-material/promo_image (5).png";
const promoImage6 = "./images/promo-material/promo_image (6).png";
const promoImage7 = "./images/promo-material/promo_image (7).png";
const promoImage8 = "./images/promo-material/promo_image (8).png";
const promoImage9 = "./images/promo-material/promo_image (9).png";

//URLS
const pdfDownloadLink = "https://drive.google.com/uc?export=download&id=1x9B1TF0NAHNZMXpAxkCOrh2xYik5Fw4M";


function updatePageContent() {
    ////IMAGES
    //document.querySelector('meta[property="og:image"]').setAttribute("content", og_image);
    //document.querySelector('meta[name="twitter:image"]').setAttribute("content", twitter_image);

    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    document.getElementById('intro-image').src = promo_image;
    
    document.getElementById('promo-img-1').src = promoImage1;
    document.getElementById('promo-img-2').src = promoImage2;
    document.getElementById('promo-img-3').src = promoImage3;
    document.getElementById('promo-img-4').src = promoImage4;
    document.getElementById('promo-img-5').src = promoImage5;
    document.getElementById('promo-img-6').src = promoImage6;
    document.getElementById('promo-img-7').src = promoImage7;
    document.getElementById('promo-img-8').src = promoImage8;
    document.getElementById('promo-img-9').src = promoImage9;

    ////TEXTS

    document.getElementById('page-title').textContent = productName;
    document.getElementById('header-title').textContent = productName;

    document.getElementById('heading-1-1').textContent = heading_1_1;

    //document.getElementById('heading-2-1').textContent = heading_2_1;
    document.getElementById('section-text-1').textContent = section_text_1;
    document.getElementById('heading-2-2').textContent = heading_2_2;
    document.getElementById('section-text-2').textContent = section_text_2;
    document.getElementById('heading-2-3').textContent = heading_2_3;
    //document.getElementById('section-text-3').textContent = section_text_3;
    document.getElementById('heading-2-4').textContent = heading_2_4;
    document.getElementById('section-text-4').textContent = section_text_4;

    document.getElementById('footer-copyright').textContent = footer_copyright;    
    
    ////BUTTONS
    
    document.getElementById('section-1-button').textContent = section_1_button_text;
    document.getElementById('section-2-button').textContent = section_2_button_text;
    document.getElementById('section-3-button').textContent = section_3_button_text;
    document.getElementById('section-4-button').textContent = section_4_button_text;

    document.getElementById('rules-download-button').innerHTML = `<i class="fas fa-download"></i> ${download_button_text}`;

    //document.getElementById('rules-download-button').href = pdfDownloadLink;
    document.getElementById('newsletter-button').innerHTML = `<i class="fas fa-envelope"></i> ${newsletter_button_text}`;

    ////URLS
    document.getElementById('rules-download-button').href = pdfDownloadLink;
    //document.getElementById('youtube-video-iframe').src = youtubeVideoUrl;

}

updatePageContent();
