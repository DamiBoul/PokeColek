import { Lieu } from '../lieu/lieu.component'
import { Pokemon } from '../pokemon/pokemon.component';
import { POKEMONS } from './mock-pokemon'

export const LIEUX: Lieu[] = [
    {

        id: 1,
        name: "Joliberges",
        region: "Sinnoh",
        gen: 4,
        pokemon: [POKEMONS[0], POKEMONS[3]],
        encounter: ["old-rod", "grass"]
    },
    {
        id: 2,
        name: "Vestigion",
        region: "Sinnoh",
        gen: 4,
        pokemon: [POKEMONS[0], POKEMONS[2]],
        encounter: ["grass"]
    },
    {
        id: 3,
        name: "Verchamps",
        region: "Sinnoh",
        gen: 4,
        pokemon: [POKEMONS[1]],
        encounter: ["old-rod", "grass"]
    },
    {
        id: 4,
        name: "Rivamar",
        region: "Sinnoh",
        gen: 4,
        pokemon: [POKEMONS[1]],
        encounter: ["old-rod", "grass"]
    }
];