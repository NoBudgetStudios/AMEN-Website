// Load the Google Tag Manager script
/*(function() {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-SYVPP6RPJC';
  document.head.appendChild(script);
})();*/

// Initialize Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Configure the tag
gtag('js', new Date());
gtag('config', 'G-SYVPP6RPJC');
