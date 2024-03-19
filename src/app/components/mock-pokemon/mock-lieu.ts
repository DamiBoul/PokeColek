import { Lieu } from '../lieu/lieu.component'
import { Pokemon } from '../pokemon/pokemon.component';
import { POKEMONS } from './mock-pokemon'

export const LIEUX: Lieu[] = [
    {

        id: 13,
        idLieu: 1,
        cat: "lieu",
        name: "Joliberges",
        image: "",
        region: "Sinnoh",
        type: "city",
        pokemon: [POKEMONS[0], POKEMONS[3]],
        encounter: ["old-rod", "grass"]
    },
    {
        id: 14,
        idLieu: 2,
        cat: "lieu",
        name: "Vestigion",
        image: "",
        region: "Sinnoh",
        type: "city",
        pokemon: [POKEMONS[0], POKEMONS[2]],
        encounter: ["grass"]
    },
    {
        id: 15,
        idLieu: 3,
        cat: "lieu",
        name: "Verchamps",
        image: "",
        region: "Sinnoh",
        type: "city",
        pokemon: [POKEMONS[1]],
        encounter: ["old-rod", "grass"]
    },
    {
        id: 16,
        idLieu: 4,
        cat: "lieu",
        name: "Rivamar",
        image: "",
        region: "Sinnoh",
        type: "city",
        pokemon: [POKEMONS[1]],
        encounter: ["old-rod", "grass"]
    }
];