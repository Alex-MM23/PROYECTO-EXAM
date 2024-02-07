var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'vacantes_BBDD_2024_EXA',
    user: 'uvariantes',
    password: 'uvariantes'
});

conexion.connect(function(error){
    if (error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA');
    }
});
conexion.end();