// COOKIE CONSENT
document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const cookieOverlay = document.getElementById('cookieOverlay');
    const changeSettingsBtn = document.getElementById('cookie-change-settings');
    const acceptCookiesBtn = document.getElementById('cookie-accept');
    const body = document.body;

    function showCookiePopup() {
        cookieOverlay.style.display = 'block';
        cookieConsent.style.display = 'block';
        body.style.overflow = 'hidden'; // Disable scrolling
    }

    function hideCookiePopup() {
        cookieOverlay.style.display = 'none';
        cookieConsent.style.display = 'none';
        body.style.overflow = 'auto'; // Re-enable scrolling
    }

    function acceptCookies() {
        localStorage.setItem('cookieConsent', 'true');
        setTimeout(function() {
            localStorage.removeItem('cookieConsent');
        }, 60000); // Remove after 1 minute (60000 milliseconds)
        hideCookiePopup();
    }

    acceptCookiesBtn.addEventListener('click', function() {
        acceptCookies();
    });

    const hasConsent = localStorage.getItem('cookieConsent');
    if (hasConsent === 'true') {
        hideCookiePopup();
    } else {
        showCookiePopup();
    }
});
//////////////////////////////////////
/// Burger button


function show() {
  document.querySelectorAll('#main-container,#sidebar, #hamburger, #hamburger-low').forEach(function(element) {
    element.classList.toggle('active');
  });
}

//////////////////////////////////////
/// sidebar 


/////////////////////////////////////
// NAV BAR - STICKY
var prevScrollPos = window.pageYOffset;
var header = document.querySelector('.header');

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
    header.style.position = "sticky"
  } else {
    header.style.top = "-100%";
  }
  prevScrollPos = currentScrollPos;
}

////////////////////////////////////
// affiliation banner test
$(document).ready(function(){
    $('affiliation-banner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    });