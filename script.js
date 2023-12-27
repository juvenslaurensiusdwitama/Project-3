const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'
const jokes = document.querySelector('.container p')
const btn = document.querySelector('.container button')

fetch(url)
 .then(data => data.json())
 .then(result => {
    jokes.innerHTML = result.joke
 })

