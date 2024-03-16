import { Pokemon } from "../pokemon/pokemon.component";

export const POKEMONS: Pokemon[] = [
    {
        id: 1,
        name: "Bulbizarre",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        type1: "plante",
        type2: "poison",
        gen: 1,
        stade: 1,
        taille: 0.5,
        poids: 12,
        talent: ["Engrais", "Chlorophylle"]
    },
    {
        id: 2,
        name: "Herbizarre",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        type1: "plante",
        type2: "poison",
        gen: 1,
        stade: 2,
        taille: 0.7,
        poids: 15,
        talent: ["Engrais", "Chlorophylle"]
    },
    {
        id: 3,
        name: "Florizarre",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        type1: "plante",
        type2: "poison",
        gen: 1,
        stade: 3,
        taille: 1.7,
        poids: 150,
        talent: ["Engrais", "Chlorophylle"]
    },
    {
        id: 4,
        name: "Salamèche",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        type1: "feu",
        type2: "null",
        gen: 1,
        stade: 1,
        taille: 0.4,
        poids: 7,
        talent: ["Brasier", "ForceSoleil"]
    }
];