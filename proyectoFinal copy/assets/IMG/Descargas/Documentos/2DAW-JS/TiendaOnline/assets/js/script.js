function fClick() {
    alert("¡Bienvenido a Gorilla Shop!");
    window.location.href = 'index.html';
}
let urlFetchAll = "http://localhost:8085/apirest/familias/productos/";
let urlPost = "http://localhost:8085/apirest/familias/productos/";

function fInicio() {
    fCargarTemas();
}

function fCargarTemas() {
    let html = "";
    fetch(urlFetchAll)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error de red: ${response.statusText}`);
            }
            return response.json();
        })
        .then((productos) => {
            productos.forEach(producto => {
                // Verificar si los campos necesarios están definidos
                const imagen = producto.imagen ? producto.imagen : 'assets/IMG/';
                const nombre = producto.nombre ? producto.nombre : 'Nombre no disponible';

                html += `<div>
                            <img src="${imagen}" alt="${nombre}">
                            <div class="informacion">
                                <p>${nombre}</p>
                            </div>
                        </div>`;
            });
            document.getElementById("nav").innerHTML = html;
        })
        .catch((error) => {
            console.error('Error al obtener datos:', error);
        });
}


function AgregarTema() {
    var nombre = document.getElementById("agregarTema_nombre").value;
    var marca = document.getElementById("agregarTema_marca").value;
    var stock = document.getElementById("agregarTema_stock").value;
    var precio = document.getElementById("agregarTema_precio").value;
    var fecha_de_alta = document.getElementById("agregarTema_fecha_de_alta").value;
    var id_familia = document.getElementById("agregarTema_id_familia").value;

    let producto = {
        "nombre": nombre,
        "marca": marca,
        "stock": stock,
        "precio": precio,
        "fecha_de_alta": fecha_de_alta,
        "id_familia": id_familia
    };

    // Fetch con POST para enviar el objeto
    fetch(urlPost, {
        "headers": {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        "method": "POST",
        "body": JSON.stringify(producto)
    })
    .then(res => res.json())
    .then(data => {
        if (data.length === 0) { 
            alert("No se pudo registrar el producto");
        } else {
            alert("Producto registrado");
            window.location.href = 'productosFamilia.html';
        }
    })
    .catch(() => {
        alert("Error al registrar el producto");
    });
}
