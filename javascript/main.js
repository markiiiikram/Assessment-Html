// COOKIE CONSENT
document.addEventListener("DOMContentLoaded", function() {
  const cookieConsent = document.getElementById('cookieConsent');
  const cookieOverlay = document.getElementById('cookieOverlay');
  const changeSettingsBtn = document.getElementById('cookie-change-settings');
  const acceptCookiesBtn = document.getElementById('cookie-accept');
  const body = document.body;

  // Function to show the cookie popup
  function showCookiePopup() {
      cookieOverlay.style.display = 'block';
      cookieConsent.style.display = 'block';
      body.style.overflow = 'hidden'; // Disable scrolling
  }

  // Function to hide the cookie popup
  function hideCookiePopup() {
      cookieOverlay.style.display = 'none';
      cookieConsent.style.display = 'none';
      body.style.overflow = 'auto'; // Re-enable scrolling
  }

  // Function to accept cookies
  function acceptCookies() {
      localStorage.setItem('cookieConsent', 'true');
      setTimeout(function() {
          localStorage.removeItem('cookieConsent');
      }, 60000); // Remove after 1 minute (60000 milliseconds)
      hideCookiePopup();
  }

  // Event listener for accepting cookies
  acceptCookiesBtn.addEventListener('click', function() {
      acceptCookies();
  });

  // Event listener for clicks on the footer cookie element
  document.getElementById('footer-cookie').addEventListener('click', function(event) {
      // Show the cookie popup when the footer cookie element is clicked
      showCookiePopup();
  });

  // Check if the user has already accepted cookies
  const hasConsent = localStorage.getItem('cookieConsent');
  if (hasConsent === 'true') {
      hideCookiePopup();
  } else {
      showCookiePopup();
  }
});
//////////////////////////////////////
/// Burger button
// Function to toggle the sidebar
function toggleSidebar() {
  document.querySelectorAll('#main-container, #sidebar, #hamburger, #hamburger-low').forEach(function(element) {
    element.classList.toggle('active');
  });

  // Toggle the 'active' class on the body
  document.body.classList.toggle('active');

  // Check if the sidebar is active
  if (document.getElementById('sidebar').classList.contains('active')) {
    // Prevent scrolling on the main container when sidebar is active
    document.getElementById('main-container').addEventListener('scroll', preventScroll);
  } else {
    // Remove scroll prevention when sidebar is inactive
    document.getElementById('main-container').removeEventListener('scroll', preventScroll);
  }
}

// Function to prevent scrolling on the main container
function preventScroll(event) {
  event.preventDefault();
}

// Event listener to toggle the sidebar when the burger buttons are clicked
document.getElementById('hamburger').addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent the event from propagating to the body
  toggleSidebar();
});

document.getElementById('hamburger-low').addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent the event from propagating to the body
  toggleSidebar();
});

// Function to close the sidebar and remove 'active' class from other elements
function closeSidebar() {
  document.querySelectorAll('#main-container, #sidebar, #hamburger, #hamburger-low').forEach(function(element) {
    element.classList.remove('active');
  });

  // Remove the 'active' class from the body
  document.body.classList.remove('active');
}

// Event listener for clicks on the document body to close the sidebar
document.body.addEventListener('click', function(event) {
  // Check if the click target is outside of the sidebar
  if (!event.target.closest('#sidebar')) {
    // Close the sidebar and remove 'active' class from other elements
    closeSidebar();
    // Remove scroll prevention when sidebar is inactive
    document.getElementById('main-container').removeEventListener('scroll', preventScroll);
  }
});

// Event listener to prevent the sidebar from closing when a click occurs within the sidebar
document.getElementById('sidebar').addEventListener('click', function(event) {
  event.stopPropagation();
});

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

