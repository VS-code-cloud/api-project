
let joke = document.getElementById('joke');
let type = document.getElementById('joketype');
fetch('https://v2.jokeapi.dev/joke/Any?safe-mode').then(x => {
    return x.json()
}).then(data => {
    if (data.type == "single") {
        type.innerText += " "+data.type+" joke"
        joke.innerText = data.joke
    } else {
        type.innerText += " "+data.type+" joke"
        joke.innerText = `${data.setup}\n${data.delivery}`
    }
})
//https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Flaughing-emoji%2F&psig=AOvVaw1gOuDbU_DAHaBDEufJWXb-&ust=1691610449018000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIjvoJPqzYADFQAAAAAdAAAAABAE 