import { pokemon } from './data.js';
import { incrementCaught, incrementSeen } from './localstorage.js';

let numberOfTurns = 0;

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
} 

export function setThreePokemon() { 
    numberOfTurns++;

    let randomPokeOne = getRandomPokemon();
    let randomPokeTwo = getRandomPokemon();
    let randomPokeThree = getRandomPokemon();


    while (randomPokeOne._id === randomPokeTwo._id || randomPokeOne._id === randomPokeThree._id || randomPokeTwo._id === randomPokeThree._id) {
        randomPokeOne = getRandomPokemon();
        randomPokeTwo = getRandomPokemon();
        randomPokeThree = getRandomPokemon();  
    }

    const img1 = renderPokeImage(randomPokeOne);
    const img2 = renderPokeImage(randomPokeTwo);
    const img3 = renderPokeImage(randomPokeThree);

    incrementSeen(randomPokeOne._id);
    incrementSeen(randomPokeTwo._id);
    incrementSeen(randomPokeThree._id);

    const div = document.getElementById('pokemon');

    div.textContent = '';

    div.append(img1, img2, img3);
}

export function renderPokeImage(pokemonItem) {
    const image = document.createElement('img');

    image.src = pokemonItem.url_image;

    image.classList.add('poke-img');
    image.addEventListener('click', () => {
        incrementCaught(pokemonItem._id);

        if (numberOfTurns < 10) {
            setThreePokemon();
        } else {
            window.location = 'results';
        }
    });

    return image;
    
}