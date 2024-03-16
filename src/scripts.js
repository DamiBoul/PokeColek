/*!
* Start Bootstrap - Simple Sidebar v6.0.6 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

var baseRequest = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000";
var sprite = document.getElementById("Sprite");

const call = async () => {
    let response = await fetch(baseRequest); //Appel de la requête passée en paramètre
    let res = await response.json(); //Extraction de la réponse en format json
    
    //----------Utilisation du json----------

    //Sélection d'un pokemon aléatoire
    let pokemon = res.results[Math.floor(Math.random() * res.results.length)];

    //Récupération du json de ce pokemon
    response = await fetch(pokemon.url);
    pokemon = await response.json();

    //Récupération du json de l'espèce de ce pokemon
    response = await fetch(pokemon.species.url);
    let espece = await response.json();

    //Variable pour stocker le nom français du pokemon
    let fr;

    //Recherche du nom français du pokemon parmis toutes les langues
    espece.names.forEach(element =>{
        if(element.language.name == "fr")
            fr = element.name;
    });

    let yes;

    //Variable pour stocker tous les types du pokemon
    var stringTypes = "";

    //Pour chaque type du pokemon
    for(let a of pokemon.types){
        //Récupération du json du type
        response = await fetch(a.type.url);
        yes = await response.json();

        //Recherche du type en français et concaténation dans la variable de stockage
        yes.names.forEach(element =>{
            if(element.language.name == "fr")
                stringTypes = stringTypes.concat(element.name, " ");
        });
    }

    //Variable pour stocker tous les talents du pokemon
    var stringTalents = "";

    //Pour chaque talent du pokemon
    for(let a of pokemon.abilities){
        //Récupération du json du talent
        response = await fetch(a.ability.url);
        yes = await response.json();
        
        //Recherche du talent en français et concaténation dans la variable de stockage
        yes.names.forEach(element =>{
            if(element.language.name == "fr"){
                stringTalents = stringTalents.concat(element.name, " ");
            }
        });
    }

    //Affectation des différents éléments du pokemon dans les balises HTML
    document.body.querySelector("#Nom").innerHTML = fr;
    document.body.querySelector("#Types").innerHTML = stringTypes;
    document.body.querySelector("#Talents").innerHTML = stringTalents;
    
    //Affectation du src et de la caption de l'image de sprite
    sprite.src = pokemon.sprites.front_default;
    sprite.alt = sprite.alt.concat(fr);
}

async function search(name){
    let response = await fetch("https://pokeapi.co/api/v2/"+name);
    let pokemon = await response.json();

    response = await fetch(pokemon.species.url);
    let espece = await response.json();

    //Variable pour stocker le nom français du pokemon
    var fr;

    //Recherche du nom français du pokemon parmis toutes les langues
    espece.names.forEach(element =>{
        if(element.language.name == "fr")
            fr = element.name;
    });

    let yes;

    //Variable pour stocker tous les types du pokemon
    var stringTypes = "";

    //Pour chaque type du pokemon
    for(let a of pokemon.types){
        //Récupération du json du type
        response = await fetch(a.type.url);
        yes = await response.json();

        //Recherche du type en français et concaténation dans la variable de stockage
        yes.names.forEach(element =>{
            if(element.language.name == "fr")
                stringTypes = stringTypes.concat(element.name, " ");
        });
    }

    //Variable pour stocker tous les talents du pokemon
    var stringTalents = "";

    //Pour chaque talent du pokemon
    for(let a of pokemon.abilities){
        //Récupération du json du talent
        response = await fetch(a.ability.url);
        yes = await response.json();
        
        //Recherche du talent en français et concaténation dans la variable de stockage
        yes.names.forEach(element =>{
            if(element.language.name == "fr"){
                stringTalents = stringTalents.concat(element.name, " ");
            }
        });
    }

    //Affectation des différents éléments du pokemon dans les balises HTML
    document.body.querySelector("#Nom").innerHTML = fr;
    document.body.querySelector("#Types").innerHTML = stringTypes;
    document.body.querySelector("#Talents").innerHTML = stringTalents;

    //Affectation du src et de la caption de l'image de sprite
    sprite.src = pokemon.sprites.front_default;
    sprite.alt = sprite.alt.concat(fr);
}