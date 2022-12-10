const jokeBtn = document.getElementById('jokeBtn');
const jokeArea = document.getElementById('joke');

jokeBtn.addEventListener('click', (e)=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => jokeArea.innerText = data.value);
})
