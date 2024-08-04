const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');


const getJoke = () => {
    const xhr = XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
         if (this.status === 200) {
            console.log(this.responseText);
            //jokeEl.innerHTML = JSON.parse(this.responseText);
         } else {

         }
      }
    }
   xhr.send();
};


jokeBtn.addEventListener('click', getJoke);