const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');


const getJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
         if (this.status === 200) {
            //console.log(JSON.parse(this.responseText).value);
            jokeEl.innerHTML = JSON.parse(this.responseText).value;
         } else {
            jokeEl.innerHTML = 'Chuck is not feeling well!';
         }
      }
    }
   xhr.send();
};


jokeBtn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', generateJoke);