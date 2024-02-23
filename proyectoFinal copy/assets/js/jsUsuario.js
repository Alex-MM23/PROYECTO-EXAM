let divFCategoria = document.getElementById("categoriasU");

let urlFetchAll = "http://localhost:8084/apirest/categoria/todos";

function cargarVacantesPorCategoria(idCategoria) {
  // Realizar redirección a la nueva página pasando el ID de la familia
  window.location.href = `categoriasU.html?idCategoria=${idCategoria}`;
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
  let divProductos = document.getElementById("vacantesU");

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
  window.location.href = `DetalleU.html?idVacante=${idVacante}`;
}

const idVacante = urlParams.get("idVacante");

if (idVacante) {
  let urlVacante = `http://localhost:8084/apirest/categoria/vacanteDetalle/${idVacante}`;
  let divProductos = document.getElementById("detalleU");

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

        pImagen.innerHTML = `${vacante.imagen}`;
        pNombre.innerHTML = `${vacante.nombre}`;
        pDescripcion.innerHTML = `${vacante.descripcion}`;
        pFecha.innerHTML = `Fecha de publicación: ${vacante.fecha}`;
        pSalario.innerHTML = `Salario Anual: ${vacante.salario}€`;
        pEstatus.innerHTML = `${vacante.estatus}`;

        document.getElementById("idVacante").value = vacante.idVacante;
        document.getElementById("nombreVacante").value = vacante.nombre;
        document.getElementById("descripcionVacante").value = vacante.descripcion;
        document.getElementById("fechaVacante").value = vacante.fecha;
        document.getElementById("salarioVacante").value = vacante.salario;
        document.getElementById("estatusVacante").value = vacante.estatus;
        document.getElementById("destacadoVacante").value = vacante.destacado;
        document.getElementById("imagenVacante").value = vacante.imagen;
        document.getElementById("detalleVacante").value = vacante.detalles;

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
let divVacantesTodos = document.getElementById("vacantesTodosU");

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

const urlSolicitud = "http://localhost:8084/vacantes/solicitudes";

function formSolicitud() {
  let userData = JSON.parse(localStorage.getItem('userData'));

  // Obtener los valores de los campos del formulario
  const comentario = document.getElementById("comentario").value;
  const archivo = document.getElementById("archivo").value;
  const idVacante = document.getElementById("idVacante").value;
  const nombreVacante = document.getElementById("nombreVacante").value;
  const descripcionVacante = document.getElementById("descripcionVacante").value;
  const fecha = document.getElementById("fechaVacante").value;
  const salario = document.getElementById("salarioVacante").value;
  const estatus = document.getElementById("estatusVacante").value;
  const destacado = document.getElementById("destacadoVacante").value;
  const imagen = document.getElementById("imagenVacante").value;
  const detalle = document.getElementById("detalleVacante").value;

  const solicitud = {
    "archivo": archivo,
    "comentarios": comentario,
    "usuario": {
      "username": userData.username,
        "apellidos": userData.apellidos,
        "email": userData.email,
        "enabled": userData.enabled,
        "fecha_Registro": userData.fecha_Registro,
        "nombre": userData.nombre,
        "password": userData.password,
        "perfiles": null
      },
      "vacante": {
        "idVacante": idVacante,
      "descripcion": descripcionVacante,
      "destacado": destacado,
      "detalles": detalle,
      "estatus": estatus,
      "fecha": fecha,
      "imagen": imagen,
      "nombre": nombreVacante,
      "salario": salario,
        "categoria": null
      }
  };
 
  fetch("http://localhost:8084/vacantes/solicitudes", {
    "headers": {
      "Accept": "applicaton/json",
      "Content-Type": "application/json"
    },
    "method": "POST",
    "body": JSON.stringify(solicitud)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error("Error al enviar la solicitud");
      }
      return response.json();
  })
  .then(data => {
      // Manejar la respuesta del servidor si es necesario
      console.log("Solicitud enviada con éxito:", data);
  })
  .catch(error => {
      console.error("Error al enviar la solicitud:", error);
  });
};


function cerrar() {
  window.location.href = "index.html";
}

function homeU() {
  window.location.href = "indexU.html";
}

function homeA() {
  window.location.href = "indexA.html";
}

let userData = JSON.parse(localStorage.getItem('userData'));
const username = userData.username;
let urlSolicitudPorID = `http://localhost:8084/vacantes/BuscarSolicitudes?username=${encodeURIComponent(username)}`;
let divFSolicitud = document.getElementById("divSolicitudes");

fetch(urlSolicitudPorID)
  .then((res) => res.json())
  .then((solicitudes) => {
    solicitudes.forEach((solicitud) => {
      let divSolicitud = document.createElement("div");
      let sID = document.createElement("p");
      let sFecha = document.createElement("p");
      let sArchivo = document.createElement("p");
      let sComentario = document.createElement("p");
      let sNombreVacante = document.createElement("p");
      let sUsername = document.createElement("p");

      divSolicitud.addEventListener("click", () => {
        cargarVacantesPorCategoria(solicitud.idSolictud);
      });

      sID.innerHTML = `${solicitud.idSolicitud}`;
      sFecha.innerHTML = solicitud.fecha;
      sArchivo.innerHTML = solicitud.archivo;
      sComentario.innerHTML = solicitud.comentarios;
      sNombreVacante.innerHTML = solicitud.vacante.nombre;
      sUsername.innerHTML = solicitud.username;

      divSolicitud.appendChild(sID);
      divSolicitud.appendChild(sFecha);
      divSolicitud.appendChild(sArchivo);
      divSolicitud.appendChild(sComentario);
      divSolicitud.appendChild(sNombreVacante);
      divSolicitud.appendChild(sUsername);

      divFSolicitud.appendChild(divSolicitud);
    });
  });

  let urlSolicitudes = `http://localhost:8084/vacantes/todasSolicitudes`;
let divGSolicitud = document.getElementById("divS");

fetch(urlSolicitudes)
  .then((res) => res.json())
  .then((solicitudes) => {
    solicitudes.forEach((solicitud) => {
      let divSolicitud = document.createElement("div");
      let sID = document.createElement("p");
      let sFecha = document.createElement("p");
      let sArchivo = document.createElement("p");
      let sComentario = document.createElement("p");
      let sNombreVacante = document.createElement("p");
      let sUsername = document.createElement("p");

      divSolicitud.addEventListener("click", () => {
        cargarVacantesPorCategoria(solicitud.idSolictud);
      });

      sID.innerHTML = `${solicitud.idSolicitud}`;
      sFecha.innerHTML = solicitud.fecha;
      sArchivo.innerHTML = solicitud.archivo;
      sComentario.innerHTML = solicitud.comentarios;
      sNombreVacante.innerHTML = solicitud.vacante.nombre;
      sUsername.innerHTML = solicitud.username;

      divSolicitud.appendChild(sID);
      divSolicitud.appendChild(sFecha);
      divSolicitud.appendChild(sArchivo);
      divSolicitud.appendChild(sComentario);
      divSolicitud.appendChild(sNombreVacante);
      divSolicitud.appendChild(sUsername);

      divGSolicitud.appendChild(divSolicitud);
    });
  });