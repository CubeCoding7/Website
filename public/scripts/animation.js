const dynamicText = document.getElementById('fancy_text');

// Define the words array for each page
const wordsByPath = {
    '/': ["_front-end developer", "_back-end developer", "_full-stack engineer", "_web designer"],
    '/about': ["_about_me"],
    '/projects': ["_my_projects"],
    '/contact': ["_contact_me"]
};

const path = window.location.pathname;
const words = wordsByPath[path] || ["_default_word"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        document.documentElement.style.setProperty('--before-right', '-8px');
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        if (isDeleting == true) {
            document.documentElement.style.setProperty('--before-right', '10px');
        }
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1000);
    }
};

typeEffect();