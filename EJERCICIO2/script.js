//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const divEmpty = document.createElement("div");
document.body.appendChild(divEmpty)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divP = document.createElement("div");
const p = document.createElement("p");

divP.appendChild(p);
document.body.appendChild(divP);

/*
2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
loop con javascript.
*/
const divSixP = document.createElement("div");
for(let i=0; i < 6; i++){
    let p = document.createElement("p");
    divSixP.appendChild(p);
}
document.body.appendChild(divSixP);

/*
2.4 Inserta dinamicamente con javascript en un html una p con el 
texto 'Soy dinámico!'.
*/
const soyDinamico = document.createElement("p");
soyDinamico.innerText = "Soy dinámico!";
document.body.appendChild(soyDinamico);


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here");
h2.innerText = "Wubba Lubba dub dub";


/*
2.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const socialMedia = document.createElement("ul");
for (app of apps){
    const li = document.createElement("li");
    li.textContent = app;
    socialMedia.appendChild(li);
}
document.body.appendChild(socialMedia);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminar = document.querySelectorAll(".fn-remove-me");

for (elemento of eliminar){
elemento.remove();
}

/*
2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
Recuerda que no solo puedes insertar elementos con .appendChild.
*/

const padre = divP.parentNode;
const parrafoMedio = document.createElement('p');
parrafoMedio.textContent = "Voy en medio";

padre.insertBefore(parrafoMedio, divP);


/*
2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
.fn-insert-here
*/

const inserts = document.querySelectorAll("div.fn-insert-here");


for (element of inserts){
    const textoDentro = document.createElement("p");
textoDentro.textContent = "Voy dentro!";
    element.appendChild(textoDentro);
}