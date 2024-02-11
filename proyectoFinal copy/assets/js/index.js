let divProductos = document.getElementById("categorias");
const urlParams = new URLSearchParams(window.location.search);
const idCategoria = urlParams.get("idCategoria");

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

        divProductos.appendChild(divCategoria);
        });
})

if (idCategoria) {
    let urlProductosPorFamilia = `http://localhost:8085/apirest/categorias/porCategoria/${idCategoria}`;
    let divProductos = document.getElementById("productosPorFamilia");

    fetch(urlProductosPorFamilia)
        .then((res) => res.json())
        .then((productos) => {
            productos.forEach((producto) => {
                let divProducto = document.createElement("div");
                let pDescripcion = document.createElement("p");
                let pMarca = document.createElement("p");
                let pPrecioUnitario = document.createElement("p");

                pDescripcion.innerHTML = `${producto.descripcion}`;
                pMarca.innerHTML = `Marca: ${producto.marca}`;
                pPrecioUnitario.innerHTML = `Precio: ${producto.precioUnitario}€`;

                divProducto.appendChild(pDescripcion);
                divProducto.appendChild(pMarca);
                divProducto.appendChild(pPrecioUnitario);
                divProducto.style.border = "solid black 2px";

                divProductos.appendChild(divProducto);
            });
        })
        .catch((error) => {
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