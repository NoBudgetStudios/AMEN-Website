// Load the Google Tag Manager script
(function() {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-SYVPP6RPJC';
  document.head.appendChild(script);
})();

// Initialize Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Configure the tag
gtag('js', new Date());
gtag('config', 'G-SYVPP6RPJC');


////button tracking

// Add event listener for the button click event
document.getElementById('newsletter-button').addEventListener('click', function() {
  gtag('event', 'join_newsletter', {
    'event_category': 'Button',
    'event_label': 'Join Newsletter'
  });
});

// Add event listener for the button click event
document.getElementById('rules-download-button').addEventListener('click', function() {
  gtag('event', 'download_rulebook', {
    'event_category': 'Button',
    'event_label': 'Download Rulebook'
  });
});