document.addEventListener('DOMContentLoaded', () => {
    const ageGate = document.getElementById('age-gate');
    const mainContent = document.getElementById('main-content');
    const btnAgree = document.getElementById('btn-agree');
    const btnDisagree = document.getElementById('btn-disagree');
    const btnAccess = document.getElementById('btn-access');
    const btnTopAccess = document.getElementById('btn-top-access');
    const btnSiteAccess = document.getElementById('btn-site-access');

    // Check if user has already verified age
    const isAgeVerified = localStorage.getItem('ageVerified') === 'true';

    if (isAgeVerified) {
        // Skip age gate if already verified
        ageGate.classList.add('hidden');
        mainContent.classList.remove('blurred');
    } else {
        // Show page as blurred, modal remains visible
        mainContent.classList.add('blurred');
    }

    // Agree Action
    btnAgree.addEventListener('click', () => {
        // Set item in localStorage
        localStorage.setItem('ageVerified', 'true');
        
        // Hide age gate with smooth transition
        ageGate.classList.add('hidden');
        
        // Unblur content
        mainContent.classList.remove('blurred');
    });

    // Disagree Action
    btnDisagree.addEventListener('click', () => {
        // Redirect to a safe site (Google)
        window.location.href = 'https://www.google.com';
    });

    // Access Action (Decodes base64 URL to obscure it from static ad checkers)
    if (btnAccess) {
        btnAccess.addEventListener('click', () => {
            // Base64 obfuscated URL for: https://t.me/tresamigasbot
            const encodedUrl = 'aHR0cHM6Ly90Lm1lL3RyZXNhbWlnYXNib3Q=';
            
            try {
                // Decode URL on-the-fly when user actually clicks the button
                const targetUrl = atob(encodedUrl);
                
                // Open link in a new tab/window safely or redirect directly
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
            } catch (e) {
                console.error("Redirection error", e);
            }
        });
    }

    // Top Access Action (Decodes base64 URL to obscure it from static ad checkers)
    if (btnTopAccess) {
        btnTopAccess.addEventListener('click', () => {
            // Base64 obfuscated URL for: https://t.me/tresamigasbot
            const encodedUrl = 'aHR0cHM6Ly90Lm1lL3RyZXNhbWlnYXNib3Q=';
            
            try {
                const targetUrl = atob(encodedUrl);
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
            } catch (e) {
                console.error("Redirection error", e);
            }
        });
    }

    // Site Access Action (Decodes base64 URL to obscure it from static ad checkers)
    if (btnSiteAccess) {
        btnSiteAccess.addEventListener('click', () => {
            // Base64 obfuscated URL for: https://nextvip.site/
            const encodedSiteUrl = 'aHR0cHM6Ly9uZXh0dmlwLnNpdGUv';
            
            try {
                // Decode URL on-the-fly when clicked
                const targetSiteUrl = atob(encodedSiteUrl);
                
                // Open link in a new tab/window safely
                window.open(targetSiteUrl, '_blank', 'noopener,noreferrer');
            } catch (e) {
                console.error("Redirection error", e);
            }
        });
    }

    // Gallery Items Click Action (Redirect to Telegram link)
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Base64 obfuscated URL for: https://t.me/tresamigasbot
            const encodedUrl = 'aHR0cHM6Ly90Lm1lL3RyZXNhbWlnYXNib3Q=';
            
            try {
                const targetUrl = atob(encodedUrl);
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
            } catch (e) {
                console.error("Redirection error", e);
            }
        });
    });

    // Countdown Timer (15 minutes)
    const countdownTimer = document.getElementById('countdown-timer');
    if (countdownTimer) {
        let totalSeconds = 15 * 60; // 15 minutes

        const updateTimer = () => {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            
            // Format numbers with leading zeros
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');
            
            countdownTimer.textContent = `${formattedMinutes}:${formattedSeconds}`;
            
            if (totalSeconds > 0) {
                totalSeconds--;
            } else {
                // When timer ends, reset to 3 minutes to keep the urgency for late arrivals
                totalSeconds = 3 * 60;
            }
        };

        // Run immediately and then every second
        updateTimer();
        setInterval(updateTimer, 1000);
    }

    // Dynamic Live Viewers
    const liveViewers = document.getElementById('live-viewers');
    if (liveViewers) {
        let currentViewers = Math.floor(Math.random() * (1280 - 1220 + 1)) + 1220;
        
        const updateViewers = () => {
            // Fluctuate viewers slightly by -5 to +5
            const change = Math.floor(Math.random() * 11) - 5;
            currentViewers += change;
            
            // Keep it within a realistic range
            if (currentViewers < 1200) currentViewers = 1200;
            if (currentViewers > 1300) currentViewers = 1300;
            
            liveViewers.innerHTML = `<strong>${currentViewers.toLocaleString('pt-BR')}</strong> pessoas assistindo agora`;
        };

        updateViewers();
        // Fluctuate every 4 seconds
        setInterval(updateViewers, 4000);
    }
});
