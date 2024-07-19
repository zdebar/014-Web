// Promises

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));



// URL (required), options (optional)

fetch('https://url.com/some/url')
  .then(function(response) {
  })
  .catch(function(err) {
  });
  

const img = document.querySelector('img')

fetch('https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=cat', {mode: 'cors'})
  .then(function(response) {
    return response.json()
  })
  .then(function(response) {
    img.src = response.data.images.original.url
  })
  .catch(e => {
    console.log(e)
  })



// Async and await

async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}


const img = document.querySelector('img');

async function getCats() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'});
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}
getCats();