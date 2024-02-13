let divFCategoria = document.getElementById("categorias");

let urlFetchAll = "http://localhost:8084/apirest/categoria/todos";

function cargarVacantesPorCategoria(idCategoria) {
  // Realizar redirección a la nueva página pasando el ID de la familia
  window.location.href = `categorias.html?idCategoria=${idCategoria}`;
}

fetch(urlFetchAll)
  .then((res) => res.json())
  .then((categorias) => {
    categorias.forEach((categoria) => {
      let divCategoria = document.createElement("div");
      divCategoria.classList.add("section-categoria");
      let pID = document.createElement("p");
      pID.classList.add("categoria-nombre");
      let pDescripcion = document.createElement("p");
      pDescripcion.classList.add("categoria-descripcion");

      divCategoria.addEventListener("click", () => {
        cargarVacantesPorCategoria(categoria.idCategoria);
      });

      pID.innerHTML = categoria.nombre;
      pDescripcion.innerHTML = categoria.descripcion;

      divCategoria.appendChild(pID);
      divCategoria.appendChild(pDescripcion);

      divFCategoria.appendChild(divCategoria);
    });
  });

const urlParams = new URLSearchParams(window.location.search);
const idCategoria = urlParams.get("idCategoria");

if (idCategoria) {
  let urlProductosPorFamilia = `http://localhost:8084/apirest/categoria/porCategoria/${idCategoria}`;
  let divProductos = document.getElementById("vacantes");

  fetch(urlProductosPorFamilia)
    .then((res) => res.json())
    .then((vacantes) => {
      vacantes.forEach((vacante) => {
        let pImagen = document.createElement("img");
        pImagen.src = "assets/IMG/" + vacante.imagen;
        pImagen.classList.add("section-imagen");
        let divProducto = document.createElement("div");
        divProducto.classList.add("section-vacante");
        let pDescripcion = document.createElement("p");
        pDescripcion.classList.add("section-descripcion");
        let pNombre = document.createElement("p");
        pNombre.classList.add("section-nombre");
        let pFecha = document.createElement("p");
        pFecha.classList.add("section-fecha");
        let pSalario = document.createElement("p");
        pSalario.classList.add("section-salario");
        let pEstatus = document.createElement("p");
        pEstatus.classList.add("section-estatus");
        let pDetalles = document.createElement("p");
        pDetalles.classList.add("section-detalles");

        divProducto.addEventListener("click", () => {
          cargarDetalleVacante(vacante.idVacante);
        });
        pImagen.innerHTML = `${vacante.imagen}`;
        pNombre.innerHTML = `${vacante.nombre}`;
        pDescripcion.innerHTML = `${vacante.descripcion}`;
        pFecha.innerHTML = `Fecha de publicación: ${vacante.fecha}`;
        pSalario.innerHTML = `Salario Anual: ${vacante.salario}€`;
        pEstatus.innerHTML = `${vacante.estatus}`;

        pDetalles.innerHTML = `${vacante.detalles}`;

        divProducto.appendChild(pImagen);
        divProducto.appendChild(pNombre);
        divProducto.appendChild(pDescripcion);
        divProducto.appendChild(pFecha);
        divProducto.appendChild(pSalario);
        divProducto.appendChild(pEstatus);
        divProducto.appendChild(pDetalles);
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

let urlVacante = `http://localhost:8084/apirest/categoria/todosVacantes`;
let divVacantesTodos = document.getElementById("vacantesTodos");

fetch(urlVacante)
  .then((res) => res.json())
  .then((vacantes) => {
    vacantes.forEach((vacante) => {
      let pImagen = document.createElement("img");
      pImagen.src = "assets/IMG/" + vacante.imagen;
      pImagen.classList.add("section-imagen");
      let divProducto = document.createElement("div");
      divProducto.classList.add("section-vacante");
      let pDescripcion = document.createElement("p");
      pDescripcion.classList.add("section-descripcion");
      let pNombre = document.createElement("p");
      pNombre.classList.add("section-nombre");
      let pFecha = document.createElement("p");
      pFecha.classList.add("section-fecha");
      let pSalario = document.createElement("p");
      pSalario.classList.add("section-salario");
      let pEstatus = document.createElement("p");
      pEstatus.classList.add("section-estatus");
      let pDetalles = document.createElement("p");
      pDetalles.classList.add("section-detalles");

      divProducto.addEventListener("click", () => {
        cargarDetalleVacante(vacante.idVacante);
      });
      pImagen.innerHTML = `${vacante.imagen}`;
      pNombre.innerHTML = `${vacante.nombre}`;
      pDescripcion.innerHTML = `${vacante.descripcion}`;
      pFecha.innerHTML = `Fecha de publicación: ${vacante.fecha}`;
      pSalario.innerHTML = `Salario Anual: ${vacante.salario}€`;
      pEstatus.innerHTML = `${vacante.estatus}`;

      pDetalles.innerHTML = `${vacante.detalles}`;

      divProducto.appendChild(pImagen);
      divProducto.appendChild(pNombre);
      divProducto.appendChild(pDescripcion);
      divProducto.appendChild(pFecha);
      divProducto.appendChild(pSalario);
      divProducto.appendChild(pEstatus);
      divProducto.appendChild(pDetalles);
      divProducto.style.border = "solid black 2px";

      divVacantesTodos.appendChild(divProducto);
    });
  });

let urlLogin = `http://localhost:8084/apirest/categoria/login`;

function procLogin(username, password) {
  let datosUsuario = {
    username: username,
    password: password,
  };

  fetch(urlLogin, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datosUsuario),
  })
    .then((data) => {
      localStorage.setItem("token", data.token);
      window.location.href = "inicioUsuario.html";
    })
    .catch((error) => {
      console.error("Error de login:", error);
      alert("Error en el login. Verifica tus credenciales e intenta de nuevo.");
    });
}

document
  .getElementById("formulario-login")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    procLogin(username, password);
  });

function login() {
  window.location.href = "login.html";
}

function registro() {
  window.location.href = "registro.html";
}

function categorias() {
  window.location.href = "index.html";
}

function volver() {
  window.location.href = "candidatos.html";
}

function volverC() {
  window.location.href = "index.html";
}
