let divFCategoria = document.getElementById("categorias");

let urlFetchAll = "http://localhost:8084/apirest/categoria/todos";

function cargarVacantesPorCategoria(idCategoria) {
    // Realizar redirección a la nueva página pasando el ID de la familia
    window.location.href = `categorias.html?idCategoria=${idCategoria}`;
}

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

        divCategoria.addEventListener("click", () => {
            cargarVacantesPorCategoria(categoria.idCategoria);
        });

        pID.innerHTML = categoria.nombre;
        pDescripcion.innerHTML = categoria.descripcion;

        divCategoria.appendChild(pID);
        divCategoria.appendChild(pDescripcion);

        divFCategoria.appendChild(divCategoria);
        });
})

const urlParams = new URLSearchParams(window.location.search);
const idCategoria = urlParams.get("idCategoria");

if (idCategoria) {
    let urlProductosPorFamilia = `http://localhost:8084/apirest/categoria/porCategoria/${idCategoria}`;
    let divProductos = document.getElementById("vacantes");

    fetch(urlProductosPorFamilia)
        .then((res) => res.json())
        .then((vacantes) => {
            vacantes.forEach((vacante) => {
                let divProducto = document.createElement("div");
                let pDescripcion = document.createElement("p");

                pDescripcion.innerHTML = `${vacante.nombre}`;

                divProducto.appendChild(pDescripcion);
                divProducto.style.border = "solid black 2px";

                divProductos.appendChild(divProducto);
            });
        }).catch((error) => {
            console.error(
                "Hubo un error al obtener los productos por familia:",
                error
            );
        });
} else {
    console.error("No se proporcionó un ID de familia en la URL.");
}


function login(){
    window.location.href = 'login.html';
}

function registro(){
    window.location.href = 'registro.html';
}

function categorias(){
    window.location.href = 'index.html';
}
