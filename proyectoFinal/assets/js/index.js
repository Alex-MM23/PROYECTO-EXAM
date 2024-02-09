fetch(bbddJSON.json)
    .then((res) => res.json())
    .then((Categorias) => {
        Categorias.forEach((categoria) => {
            let divProducto = document.createElement("div");
            divProducto.classList.add("divProductos");
            let pID = document.createElement("p");
            let pDescripcion = document.createElement("p");

            divProducto.addEventListener("click", () => {
                cargarProductosPorFamilia(categoria.idFamilia);
            });

            pID.innerHTML = `${categoria.nombre}`;
            pDescripcion.innerHTML = categoria.descripcion;


            divProducto.appendChild(pDescripcion);
            divProducto.style.border = "solid black 2px";

            divFamilia.appendChild(divProducto);
        });
    });

function login(){
    window.location.href = 'login.html';
}

function registro(){
    window.location.href = 'registro.html';
}