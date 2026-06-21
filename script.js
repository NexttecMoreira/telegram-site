document.addEventListener('DOMContentLoaded', () => {
    const ageGate = document.getElementById('age-gate');
    const mainContent = document.getElementById('main-content');
    const btnAgree = document.getElementById('btn-agree');
    const btnDisagree = document.getElementById('btn-disagree');

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
});
