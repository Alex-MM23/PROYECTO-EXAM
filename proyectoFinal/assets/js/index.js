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
                let pNombre = document.createElement("p");
                let pFecha = document.createElement("p");
                let pSalario = document.createElement("p");
                let pEstatus = document.createElement("p");
                let pImagen = document.createElement("p");
                let pDetalles = document.createElement("p");

                divProducto.addEventListener("click", () => {
                    cargarDetalleVacante(vacante.idVacante);
                });

                pNombre.innerHTML = `${vacante.nombre}`;
                pDescripcion.innerHTML = `${vacante.descripcion}`;
                pFecha.innerHTML = `${vacante.fecha}`;
                pSalario.innerHTML = `${vacante.salario}€`;
                pEstatus.innerHTML = `${vacante.estatus}`;
                pImagen.innerHTML = `${vacante.imagen}`;
                pDetalles.innerHTML = `${vacante.detalles}`;

                divProducto.appendChild(pNombre);
                divProducto.appendChild(pDescripcion);
                divProducto.appendChild(pFecha);
                divProducto.appendChild(pSalario);
                divProducto.appendChild(pEstatus);
                divProducto.appendChild(pImagen);
                divProducto.appendChild(pDetalles);
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

function cargarDetalleVacante(idVacante) {
    // Realizar redirección a la nueva página pasando el ID de la familia
    window.location.href = `Detalle.html?idVacante=${idVacante}`;
}

const idVacante = urlParams.get("idVacante");

if (idVacante) {
    let urlVacante = `http://localhost:8084/apirest/categoria/vacanteDetalle/${idVacante}`;
    let divProductos = document.getElementById("detalle");

    fetch(urlVacante)
        .then((res) => res.json())
        .then((vacantes) => {
            vacantes.forEach((vacante) => {
                let divProducto = document.createElement("div");
                let pDescripcion = document.createElement("p");
                let pNombre = document.createElement("p");
                let pFecha = document.createElement("p");
                let pSalario = document.createElement("p");
                let pEstatus = document.createElement("p");
                let pImagen = document.createElement("p");
                let pDetalles = document.createElement("p");

                pNombre.innerHTML = `${vacante.nombre}`;
                pDescripcion.innerHTML = `${vacante.descripcion}`;
                pFecha.innerHTML = `${vacante.fecha}`;
                pSalario.innerHTML = `${vacante.salario}€`;
                pEstatus.innerHTML = `${vacante.estatus}`;
                pImagen.innerHTML = `${vacante.imagen}`;
                pDetalles.innerHTML = `${vacante.detalles}`;

                divProducto.appendChild(pNombre);
                divProducto.appendChild(pDescripcion);
                divProducto.appendChild(pFecha);
                divProducto.appendChild(pSalario);
                divProducto.appendChild(pEstatus);
                divProducto.appendChild(pImagen);
                divProducto.appendChild(pDetalles);
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