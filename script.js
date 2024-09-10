document.addEventListener('DOMContentLoaded', function () {
    const titleText = "LPG Detection and Prevention System";
    const words = titleText.split(" ");
    const animatedTitleElement = document.getElementById('animated-title');
    let wordIndex = 0;

    function typeWriterEffect() {
        if (wordIndex < words.length) {
            animatedTitleElement.innerHTML += words[wordIndex] + " ";
            wordIndex++;
            setTimeout(typeWriterEffect, 700); // Adjust speed between words
        }
    }

    typeWriterEffect();
});
