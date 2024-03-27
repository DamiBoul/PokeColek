import { ElementCollek } from "../element-collek/element-collek.component";
import { POKEMONS } from "./mock-pokemon";
import { LIEUX } from "./mock-lieu";
import { CAPS } from "./mock-cap";
import { OBJETS } from "./mock-objet";
import { POKEMONSCOLLEC } from "./mock-poke-collec";

export const ELEMS: ElementCollek[] = (POKEMONSCOLLEC as ElementCollek[]).concat(OBJETS,LIEUX,CAPS);