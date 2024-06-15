window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    document.body.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`; // Ajusta el factor multiplicador para modificar la velocidad del desplazamiento
});

document.addEventListener('DOMContentLoaded', function() {
    const typedTextElement = document.getElementById('typed-text');
    const textArray = ["Bienvenid@ a mi porfolio.", "Welcome to my portfolio."];
    const typingDelay = 100;
    const erasingDelay = 60;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    setTimeout(type, newTextDelay + 250);
});


const elements = document.querySelectorAll('.fade-in');

function checkVisibility() {
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

// Check visibility on page load
document.addEventListener('DOMContentLoaded', checkVisibility);
