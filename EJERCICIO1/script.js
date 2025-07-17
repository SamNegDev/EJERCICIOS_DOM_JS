//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

let showMe = document.querySelector(".showme");
console.log(showMe);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

let pillado = document.querySelector("#pillado");
console.log(pillado);


//1.3 Usa querySelector para mostrar por consola todos los p
const parrafos = document.querySelectorAll("p");
for (parrafo of parrafos){
    console.log(parrafo);
}

/*1.4 Usa querySelector para mostrar por consola todos los elementos con 
	la clase.pokemon
*/
const pokemons = document.querySelectorAll(".pokemon");
for (pokemon of pokemons){
    console.log(pokemon);
}

/*1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".
*/
const tests = document.querySelectorAll('[data-function="testMe"]');
for (test of tests){
    console.log(test);
}
/*
1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".
*/
console.log(tests[2])