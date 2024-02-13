create database vacantes_BBDD_2024_EXA;
use vacantes_BBDD_2024_EXA;

CREATE TABLE `Categorias` (
  id_categoria int NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  descripcion varchar(2000),
  PRIMARY KEY (id_categoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- DROP TABLE IF EXISTS `Perfiles`;
CREATE TABLE `Perfiles` (
  id_perfil int NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  PRIMARY KEY (id_perfil)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- DROP TABLE IF EXISTS `Usuarios`;
CREATE TABLE `Usuarios` (
  username varchar(45) NOT NULL PRIMARY KEY,
  nombre varchar(45) NOT NULL,
  apellidos varchar(100) not null,
  email varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  enabled int NOT NULL DEFAULT 1,
  fecha_Registro date,
  UNIQUE (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- DROP TABLE IF EXISTS `Vacantes`;
CREATE TABLE `Vacantes` (
  id_vacante int NOT NULL AUTO_INCREMENT,
  nombre varchar(200) NOT NULL,
  descripcion text NOT NULL,
  fecha date NOT NULL,
  salario double NOT NULL,
  estatus enum('CREADA','CUBIERTA','CANCELADA') NOT NULL,
  destacado tinyint NOT NULL,
  imagen varchar(250) NOT NULL,
  detalles text NOT NULL,
  id_Categoria int NOT NULL,
  PRIMARY KEY (id_vacante),
  FOREIGN KEY (id_categoria) REFERENCES `Categorias` (id_categoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- DROP TABLE IF EXISTS `Solicitudes`;
CREATE TABLE `Solicitudes` (
  id_solicitud int NOT NULL AUTO_INCREMENT,
  fecha date NOT NULL,
  archivo varchar(250) NOT NULL,
  comentarios varchar(2000),
  estado  tinyint NOT NULL default 0,
  -- 0 presentada, 1 adjudicada
  id_Vacante int NOT NULL,
  username varchar(45) NOT NULL,
  PRIMARY KEY (id_solicitud),
  UNIQUE(id_Vacante,username),
  FOREIGN KEY (username) REFERENCES `Usuarios` (username),
  FOREIGN KEY (id_Vacante) REFERENCES `Vacantes` (id_vacante)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- DROP TABLE IF EXISTS `UsuarioPerfil`;
CREATE TABLE `UsuarioPerfil` (
  username varchar(45) NOT NULL,
  id_Perfil int NOT NULL,
  PRIMARY KEY(username,id_Perfil),
 FOREIGN KEY (username) REFERENCES `Usuarios` (username),
  FOREIGN KEY (id_Perfil) REFERENCES `Perfiles` (id_perfil)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


