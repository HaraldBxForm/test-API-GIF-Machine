const displayedGIFS = document.querySelector(`.data`);
const generateButton = document.querySelector(`.generate-gif`)

// Inputs
const searchInput = document.querySelector(`.search-input`);
const numberInput = document.querySelector(`.number-input`);

async function getGif() {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${(searchInput.value)}&api_key=GEmjEES5bxqnnyJA6fETMXMRRlq8ssOX&limit=${numberInput.value}`);
    const data = await response.json();
    console.log(data);
    
    return data.data.map(gif => gif.images.fixed_height.url); 
  } catch (error) {
    console.error("Erreur :", error);
  }
}

async function displayGIF() {
  const imagesList = await getGif();
    displayedGIFS.innerHTML = ``;

    imagesList.forEach(element => {
        displayedGIFS.innerHTML += `<div class="data-element"><img src="${element}" alt="Random Fox"></div>`;
    });
}


generateButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  displayGIF();
});