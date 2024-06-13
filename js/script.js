window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

