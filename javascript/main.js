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

    changeSettingsBtn.addEventListener('click', function() {
        acceptCookies();
        // Add your logic for changing settings here
    });

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
