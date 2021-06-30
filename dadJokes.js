const jokes = document.querySelector("#jokes")
const button = document.querySelector('#jokebutton')

const addnewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('li')
    newLI.append(jokeText)
    jokes.append(newLI)
}


const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json'}}   //telling the API that we want the data to be in the JSON format
        const res = await axios.get('https://icanhazdadjoke.com', config)
        return res.data.joke 
    } catch(e) {
        return "No Jokes Available. Sorry! :("
    }
     
}

button.addEventListener('click', addnewJoke)