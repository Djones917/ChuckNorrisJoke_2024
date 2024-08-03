const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const getJoke = () => {
    const xhr = XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
}

jokeBtn.addEventListener('click', getJoke);