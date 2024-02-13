<?php
    echo "Nombre: " . $_REQUEST['nombre'] . "<br>";

    echo "Archivo: " . $_REQUEST['archivo']['name'] . "<br>";
    echo "Tipo: " . $_REQUEST['archivo']['type' ]. "<br>";
    echo "Tamaño: " . $_FILES['archivo']['size']. "<br>";
?>