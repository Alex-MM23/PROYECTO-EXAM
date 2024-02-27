let divFCategoria = document.getElementById("categoriasA");

let urlFetchAll = "http://localhost:8084/apirest/categoria/todos";

function cargarVacantesPorCategoria(idCategoria) {
  // Realizar redirección a la nueva página pasando el ID de la familia
  window.location.href = `categoriasA.html?idCategoria=${idCategoria}`;
}

fetch(urlFetchAll)
  .then((res) => res.json())
  .then((categorias) => {
    categorias.forEach((categoria) => {
      let pImagen = document.createElement("img");
      pImagen.src = "assets/IMG/" + categoria.imagen;
      pImagen.classList.add("section-imagen");
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
  let divProductos = document.getElementById("vacantesA");

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
  window.location.href = `DetalleA.html?idVacante=${idVacante}`;
}

const idVacante = urlParams.get("idVacante");

if (idVacante) {
  let urlVacante = `http://localhost:8084/apirest/categoria/vacanteDetalle/${idVacante}`;
  let divProductos = document.getElementById("detalleA");

  fetch(urlVacante)
    .then((res) => res.json())
    .then((vacantes) => {
      vacantes.forEach((vacante) => {
        let pImagen = document.createElement("img");
        pImagen.src = "assets/IMG/" + vacante.imagen;
        pImagen.classList.add("section-imagen");
        let divProducto = document.createElement("div");
        divProducto.classList.add("section-vacante");
        let pNombre = document.createElement("p");
        pNombre.classList.add("section-nombre");
        let pDescripcion = document.createElement("p");
        pDescripcion.classList.add("section-descripcion");
        let pFecha = document.createElement("p");
        pFecha.classList.add("section-fecha");
        let pSalario = document.createElement("p");
        pSalario.classList.add("section-salario");
        let pEstatus = document.createElement("p");
        pEstatus.classList.add("section-estatus");

        document.getElementById("editIdCategoria").value = vacante.idCategoria;
        document.getElementById("editNombreInput").value = vacante.nombre;
        document.getElementById("editDescripcionInput").value = vacante.descripcion;
        document.getElementById("editDetalleInput").value = vacante.detalles;
        document.getElementById("editSalarioInput").value = vacante.salario;
        document.getElementById("editImagenInput").value = vacante.imagen;
        document.getElementById("editIdVacante").value = vacante.idVacante;

        pImagen.innerHTML = `${vacante.imagen}`;
        pNombre.innerHTML = `${vacante.nombre}`;
        pDescripcion.innerHTML = `${vacante.descripcion}`;
        pFecha.innerHTML = `Fecha de publicación: ${vacante.fecha}`;
        pSalario.innerHTML = `Salario Anual: ${vacante.salario}€`;
        pEstatus.innerHTML = `${vacante.estatus}`;

        divProducto.appendChild(pImagen);
        divProducto.appendChild(pNombre);
        divProducto.appendChild(pDescripcion);
        divProducto.appendChild(pFecha);
        divProducto.appendChild(pSalario);
        divProducto.appendChild(pEstatus);

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
let divVacantesTodos = document.getElementById("vacantesTodosA");

fetch(urlVacante)
  .then((res) => res.json())
  .then((vacantes) => {
    vacantes.forEach((vacante) => {
      let pImagen = document.createElement("img");
      pImagen.src = "assets/IMG/" + vacante.imagen;
      pImagen.classList.add("section-imagen");
      let divProducto = document.createElement("div");
      divProducto.classList.add("section-vacante");
      let pNombre = document.createElement("p");
      pNombre.classList.add("section-nombre");
      let pDescripcion = document.createElement("p");
      pDescripcion.classList.add("section-descripcion");
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

      divVacantesTodos.appendChild(divProducto);
    });
  });

function modal() {
  document.getElementById('solicitar-btn').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'flex';
  });

  document.getElementById('cerrarModal').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
  });

  // Cerrar el modal si se hace clic fuera de él
  window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });
}
let urlAgregarV = "http://localhost:8084/vacantes/agregarVacante";

function AgregarV() {
  let idCategoria = document.getElementById("idCategoria");
  let nombreInput = document.getElementById("nombreInput");
  let descripcionInput = document.getElementById("descripcionInput");
  let detallesInput = document.getElementById("detalleInput");
  let salarioInput = document.getElementById("salarioInput");
  let imagenInput = document.getElementById("imagenInput");

  let nuevaV = {
    "idCategoria": idCategoria.value,
    "nombre": nombreInput.value,
    "descripcion": descripcionInput.value,
    "detalles": detallesInput.value,
    "salario": salarioInput.value,
    "imagen": imagenInput.value
  
  }

  // Limpiar los campos del formulario después de agregar la vacante
  idCategoria.value = "";
  nombreInput.value = "";
  descripcionInput.value = "";
  detallesInput.value = "";
  salarioInput.value = "";
  imagenInput.value = "";
  
  console.log(nuevaV);

  fetch(urlAgregarV, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(nuevaV)
  })
  .then(response => response.text())
  .then(textoResponse => console.log(textoResponse));
}

const IDVacante = document.getElementById("editIdVacante").value;
const IDCategoria = document.getElementById("editIdCategoria").value;
const Nombre = document.getElementById("editNombreInput").value;
const Descripcion = document.getElementById("editDescripcionInput").value;
const Detalle = document.getElementById("editDetalleInput").value;
const Salario = document.getElementById("editSalarioInput").value;
const Imagen = document.getElementById("editImagenInput").value;

function editarVacante() {

  let urlEditarVacante = `http://localhost:8084/apirest/categoria/editarVacante/${IDVacante}`;

  const datosVacante = {
    idVacante: IDVacante, // Corregir aquí
    nombre: Nombre,
    descripcion: Descripcion,
    salario: Salario,
    detalles: Detalle,
    imagen: Imagen
  };

  let requestOptions = {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify(datosVacante)
  };

// Realizar la solicitud para editar la vacante
fetch(urlEditarVacante, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error al editar la vacante. Código de estado: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Vacante editada exitosamente:', data);
        alert('Vacante editada exitosamente');
    })
    .catch(error => {
        console.error('Error en la solicitud:', error.message); 
    });

}

function modal() {
  let modalContainer = document.getElementById("modal");
  modalContainer.style.display = (modalContainer.style.display === "block") ? "none" : "block";
}

// Evento para cerrar el modal al hacer clic en la 'x'
let cerrarModalBtn = document.getElementById("cerrarModal");
cerrarModalBtn.addEventListener("click", modal);

function fUsuario(){
  // Recuperar el nombre de usuario del localStorage
  const username = localStorage.getItem('username');
  
  // Mostrar el nombre de usuario en un párrafo
  const usernameDElement = document.getElementById('usernameD');
  if (username) {
    usernameDElement.textContent = `Usuario: ${username}`;
    console.log(username);
  } else {
    usernameDElement.textContent = 'Usuario no encontrado';
  }
}
function cerrar() {
  window.location.href = "index.html";
}

function homeU() {
  window.location.href = "indexU.html";
}

function homeA() {
  window.location.href = "indexA.html";
}

function barraBusqueda() {
  let inputBusqueda = document.getElementById("search").value;
  window.location.href = `busquedaA.html?keyword=${inputBusqueda}`;
}

const keyword = urlParams.get("keyword");

if (keyword) {
  let divBusqueda = document.getElementById("divBusqueda");
  let urlBusqueda = `http://localhost:8084/vacantes/barraBusqueda?keyword=${keyword}`;

  fetch(urlBusqueda)
    .then((res) => res.json())
    .then((vacantes) => {
      vacantes.forEach((vacante) => {
        let pImagen = document.createElement("img");
        pImagen.src = "assets/IMG/" + vacante.imagen;
        pImagen.classList.add("section-imagen");
        let divProducto = document.createElement("div");
        divProducto.classList.add("section-vacante");
        let pNombre = document.createElement("p");
        pNombre.classList.add("section-nombre");
        let pDescripcion = document.createElement("p");
        pDescripcion.classList.add("section-descripcion");
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

        divBusqueda.appendChild(divProducto);
      });
    });
}