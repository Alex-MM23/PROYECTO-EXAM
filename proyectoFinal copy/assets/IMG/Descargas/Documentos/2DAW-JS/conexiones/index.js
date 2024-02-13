//192.168.129.15
// localhost
let divProductos = document.getElementById("productos");
let inputDescripcion = document.getElementById("descripcion");

let urlFetchAll = "http://192.168.129.15:8086/familias/";
let urlPost = "http://192.168.129.15:8086/familias/"

fetch(urlFetchAll)
.then(res => res.json())
.then(productos => {
    productos.forEach(producto => {
        let divProducto = document.createElement("div");
        let pID = document.createElement("p");
        let pDescripcion = document.createElement("p");

        pID.innerHTML = producto.idFamilia;
        pDescripcion.innerHTML = producto.descripcion;

        divProducto.appendChild(pID);
        divProducto.appendChild(pDescripcion);
        divProducto.style.border = "solid black 2px";

        divProductos.appendChild(divProducto);
        });
})

function addFamilia(){

    // El objeto nuevo a insertar en la BD
    let familia = {"descripcion": inputDescripcion.value};

    // Fetch con POST para enviar el objeto
    fetch(urlPost, {
        "headers": {
            "Accept": "aplication/json",
            "Content-type": "application/json"
        },
        "method": "POST",
        "body": JSON.stringify(familia)
    })
    .then(res => res.text())
    .then(textoRes => console.log(textoRes));

    // Vaciar el campo de texto
    inputDescripcion.value = "";
}