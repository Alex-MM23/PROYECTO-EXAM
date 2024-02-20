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

  let urlLogin = "http://localhost:8084/apirest/categoria/login";

  function procLogin(username, password) {
    let urlWithParams = `${urlLogin}?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
  
    fetch(urlWithParams, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud de login");
        }
        return response.json();
      })
      .then((data) => {
        if (data.message === "Login correcto") {
          // Guardar el nombre de usuario en el localStorage
          localStorage.setItem('username', username);
  
          let tipoUsuario = data.tipoUsuario;
          if (tipoUsuario === "admin") {
            window.location.href = "indexA.html";
          } else if (tipoUsuario === "cliente") {
            window.location.href = "indexU.html";
          } else {
            alert("Error: tipo de usuario desconocido");
          }
        } else {
          console.error("Error de login:", data.message);
          alert("Error en el login. " + data.message);
        }
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

let urlRegistro = "http://localhost:8084/apirest/categoria/registro";

function procRegistro() {
  let registroUsername = document.getElementById("registro_username");
  let registroNombre = document.getElementById("registro_nombre");
  let registroApellidos = document.getElementById("registro_apellidos");
  let registroEmail = document.getElementById("registro_email");
  let registroPassword = document.getElementById("registro_password");

  let usuario = {
    "username": registroUsername.value,
    "nombre": registroNombre.value,
    "apellidos": registroApellidos.value,
    "email": registroEmail.value,
    "password": registroPassword.value,
  }
  
  console.log(usuario);

  fetch(urlRegistro, {
    "headers": {
      "Accept": "applicaton/json",
      "Content-Type": "application/json"
    },
    "method": "POST",
    "body": JSON.stringify(usuario)
  })

    .then(response => response.json())
    .then(textoResponse => console.log(textoResponse));

  //Vaciar el campo de texto al registrar
  registroUsername.value = "";
  registroNombre.value = "";
  registroApellidos = "";
  registroEmail.value = "";

  registroPassword.value = "";
  window.location = "index.html";
}


const urlAltaCategoria =
  "http://localhost:8084/apirest/categoria/altaCategoria";

function agregarCategoria() {
  let nombre = document.getElementById("Categoria_nombre").value;
  let descripcion = document.getElementById("Categoria_descripcion").value;
  alert(nombre);
  alert(descripcion);

  let categoria = {
    nombre: nombre,
    descripcion: descripcion,
  };

  fetch(urlAltaCategoria, {
    method: "POST",
    headers: {
      Accept: "aplication/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoria),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al dar de alta la categoría");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Categoría creada exitosamente:", data);
    })
    .catch((error) => {
      console.error("Error al dar de alta la categoría:", error);
      alert(
        "Error al dar de alta la categoría. Por favor, intenta nuevamente."
      );
    });
}

const urlSolicitud = "";

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

function login() {
  window.location.href = "login.html";
}

function registro() {
  window.location.href = "registro.html";
}

function home() {
  window.location.href = "index.html";
}

function cerrar() {
  window.location.href = "index.html";
}
