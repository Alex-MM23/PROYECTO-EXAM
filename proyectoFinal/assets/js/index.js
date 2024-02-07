let urlFetchAll = "http://localhost:8085/apirest/categorias/todas";
let divCategorias = "";

fetch(urlFetchAll)
    .then((res) => res.json())
    .then((categorias) => {
        categorias.forEach((categoria) => {
            let divProducto = document.createElement("div");
            divProducto.classList.add("divProductos");
            let pID = document.createElement("p");
            let pDescripcion = document.createElement("p");

            divProducto.addEventListener("click", () => {
                cargarProductosPorFamilia(familia.idFamilia);
            });

            pID.innerHTML = `${categoria.idFamilia}`;
            pDescripcion.innerHTML = categoria.descripcion;


            divProducto.appendChild(pDescripcion);
            divProducto.style.border = "solid black 2px";

            divFamilia.appendChild(divProducto);
        });
    });