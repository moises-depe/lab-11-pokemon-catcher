//pokemon that were seen to display on chart
import { findById } from '../utils.js';
import { pokemon } from '../data.js';

export function pokeSeenArray(arrayObjects) {

    const seenArray = [];

    for (let item of arrayObjects) {

        seenArray.push(item.seen);
    }

    return seenArray;
}

export function pokeCaughtArray(arrayObjects) {

    const caughtArray = [];

    for (let item of arrayObjects) {

        caughtArray.push(item.caught);

    }

    return caughtArray;
}


export function pokeLabelArray(arrayObjects) {

    const pokeNameArray = [];

    for (let item of arrayObjects) {


        const matchingPokemon = findById(pokemon, item._id);

        pokeNameArray.push(matchingPokemon.pokebase);
        // goes threw local storage to match to pokemon database to get name 
    }

    return pokeNameArray;
}
