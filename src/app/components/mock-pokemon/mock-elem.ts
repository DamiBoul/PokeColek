import { ElementCollek } from "../element-collek/element-collek.component";
import { POKEMONS } from "./mock-pokemon";
import { LIEUX } from "./mock-lieu";
import { OBJETS } from "./mock-objet";

export const ELEMS: ElementCollek[] = (POKEMONS as ElementCollek[]).concat(OBJETS,LIEUX);