/*!
* Start Bootstrap - Simple Sidebar v6.0.6 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

var baseRequest = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000";

const call = async () => {
    let response = await fetch(baseRequest);
    let res = await response.json(); //extract JSON from the http response
    // do something with myJson

    let pokemon = res.results[Math.floor(Math.random() * res.results.length)];

    response = await fetch(pokemon.url);
    pokemon = await response.json();

    response = await fetch(pokemon.species.url);
    let espece = await response.json();

    let fr;

    espece.names.forEach(element =>{
        if(element.language.name == "fr")
            fr = element.name;
    });

    let yes;
    var stringTypes = "";

    for(let a of pokemon.types){
        response = await fetch(a.type.url);
        yes = await response.json();

        yes.names.forEach(element =>{
            if(element.language.name == "fr")
                stringTypes = stringTypes.concat(element.name, " ");
        });
    }

    var stringTalents = "";

    for(let a of pokemon.abilities){
        response = await fetch(a.ability.url);
        yes = await response.json();
        
        yes.names.forEach(element =>{
            if(element.language.name == "fr"){
                stringTalents = stringTalents.concat(element.name, " ");
            }
        });
    }

    document.body.querySelector("#Nom").innerHTML = fr;
    document.body.querySelector("#Types").innerHTML = stringTypes;
    document.body.querySelector("#Talents").innerHTML = stringTalents;
}