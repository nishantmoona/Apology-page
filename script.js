const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const cta = document.querySelector('.buttons');
const gifContainer = document.getElementById('gif-container');
const yesSound = new Audio('wake-me-up-piano-230272.mp3');

yesButton.addEventListener('click', (event) => {
    event.preventDefault();

    gifContainer.style.display = 'block';
    yesSound.play();
    gifContainer.style.opacity = '0';

    setTimeout(() => {
        gifContainer.style.opacity = '1';
    }, 100);
    gifContainer.innerHTML = `<img src="smiling-dog-golden-retriever-twb3hce5d8nwo8lb.gif" alt="Happy GIF">`;

});

noButton.addEventListener('mouseenter', () =>{
    const buttons = document.querySelector('.buttons');
    const yesIndex = Array.from(cta.children).indexOf(yesButton);
    const noIndex = Array.from(cta.children).indexOf(noButton);

    if (yesIndex < noIndex) {
        cta.insertBefore(noButton, yesButton);
    } else {
        cta.insertBefore(yesButton, noButton);
    }
})