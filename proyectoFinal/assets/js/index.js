let divProductos = document.getElementById("categorias");

let urlFetchAll = "http://localhost:8084/apirest/categoria/todos";

fetch(urlFetchAll)
.then(res => res.json())
.then(categorias => {
    categorias.forEach(categoria => {
        let divCategoria = document.createElement("div");
        divCategoria.classList.add("section-categoria");
        let pID = document.createElement("p");
        pID.classList.add("categoria-nombre")
        let pDescripcion = document.createElement("p");
        pDescripcion.classList.add("categoria-descripcion")

        pID.innerHTML = categoria.nombre;
        pDescripcion.innerHTML = categoria.descripcion;

        divCategoria.appendChild(pID);
        divCategoria.appendChild(pDescripcion);

        divProductos.appendChild(divCategoria);
        });
})

function login(){
    window.location.href = 'login.html';
}

function registro(){
    window.location.href = 'registro.html';
}