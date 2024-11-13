// Carousel functionality
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselItems.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });
}

// Automatically change the image every 3 seconds
setInterval(showNextImage, 3000);

// Joke functionality
document.getElementById('fetch-joke-btn').addEventListener('click', fetchJoke);

function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            const joke = `${data.setup} - ${data.punchline}`;
            document.getElementById('joke-display').textContent = joke;
        })
        .catch(error => {
            document.getElementById('joke-display').textContent = "Oops! Something went wrong!";
        });
}

// Quiz functionality
document.getElementById('quiz-button').addEventListener('click', loadQuiz);

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h3>What is your favorite makeup product?</h3>
        <button onclick="showAnswer('Lipstick')">Lipstick</button>
        <button onclick="showAnswer('Mascara')">Mascara</button>
        <button onclick="showAnswer('Foundation')">Foundation</button>
        <button onclick="showAnswer('Blush')">Blush</button>
    `;
}

function showAnswer(product) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<p>You chose: ${product}. Great choice!</p>`;
}
