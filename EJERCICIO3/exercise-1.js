/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countryList = document.createElement("ul");
for (country of countries){
    const li = document.createElement("li");
    li.textContent = country;
    countryList.appendChild(li);
}
document.body.appendChild(countryList);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementosEliminar = document.querySelectorAll(".fn-remove-me");
for (elemento of elementosEliminar){
    elemento.remove();
}

/*
1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const carsList = document.createElement("ul");
for (car of cars){
    const li = document.createElement("li");
    li.textContent = car;
    carsList.appendChild(li);
}
document.querySelector('[data-function="printHere"]').appendChild(carsList);

/*
1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
*/
const randomElements = [
	{title: 'Random title1', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const listaElementos = document.createElement("div");
document.body.appendChild(listaElementos);

for (element of randomElements){
    const div = document.createElement("div");
    div.innerHTML = `
    <h4>${element.title}</h4>
    <img src=${element.imgUrl}></img>
    `
    listaElementos.appendChild(div);

        const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar este elemento";
    btnEliminar.addEventListener("click", () => {
        listaElementos.removeChild(div);
    });

    div.appendChild(btnEliminar);
    listaElementos.appendChild(div);
}

/*
1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.
*/

console.log(listaElementos);
const btnEliminarUltimo = document.createElement("button");
btnEliminarUltimo.innerText = "Eliminar Ultimo"
document.body.appendChild(btnEliminarUltimo);

btnEliminarUltimo.addEventListener("click", (ev) => {
    listaElementos.removeChild(listaElementos.lastChild)
})


/*
1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.
*/

/* Se añade este bloque de codigo en el apartado anterior, para crear el boton dentro de cada elemento div.

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar este elemento";
    btnEliminar.addEventListener("click", () => {
        listaElementos.removeChild(div);
    });

    div.appendChild(btnEliminar);
    listaElementos.appendChild(div);
*/
