create database vacantes_BBDD_2024_EXA;
use vacantes_BBDD_2024_EXA;

CREATE TABLE `Categorias` (
  id_categoria int NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  descripcion varchar(2000),
  PRIMARY KEY (id_categoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO Categorias (nombre, descripcion)
VALUES ('Desarrollo de software', 'Categoría relacionada con la creación y mantenimiento de software.'),
       ('Diseño gráfico', 'Categoría relacionada con la creación de elementos visuales y gráficos.'),
       ('Marketing digital', 'Categoría relacionada con estrategias de marketing en medios digitales.');

-- DROP TABLE IF EXISTS `Perfiles`;
CREATE TABLE `Perfiles` (
  id_perfil int NOT NULL AUTO_INCREMENT,
  perfil varchar(100) NOT NULL,
  PRIMARY KEY (id_perfil)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO Perfiles (perfil)
VALUES ('USU_ADMIN');
INSERT INTO Perfiles (perfil)
VALUES ('USU_CLIENTE');

-- DROP TABLE IF EXISTS `Usuarios`;
CREATE TABLE `Usuarios` (
  id_usuario int NOT NULL AUTO_INCREMENT,
  nombre varchar(45) NOT NULL,
  email varchar(100) NOT NULL,
  username varchar(45) NOT NULL,
  password varchar(100) NOT NULL,
  enabled int NOT NULL DEFAULT 1,
  fecha_Registro date,
  PRIMARY KEY (id_usuario),
  UNIQUE (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO Usuarios (nombre, email, username, password, enabled, fecha_Registro) 
VALUES ("tomas", "tomas@ifp.es", "tomas", "tomasin", 1, "2024-02-06");
INSERT INTO Usuarios (nombre, email, username, password, enabled, fecha_Registro)
VALUES ('juan', 'juan@ifp.es', 'juan', 'juanin', 1, '2024-02-02');
INSERT INTO Usuarios (nombre, email, username, password, enabled, fecha_Registro)
VALUES ('alex', 'alex@ifp.es', 'alex', 'alexin', 1, '2024-01-01');

-- DROP TABLE IF EXISTS `Vacantes`;
CREATE TABLE `Vacantes` (
  id_vacante int NOT NULL AUTO_INCREMENT,
  nombre varchar(200) NOT NULL,
  descripcion varchar(2000) NOT NULL,
  fecha date NOT NULL,
  salario double NOT NULL,
  estatus enum('Creada','Aprobada','Eliminada') NOT NULL,
  destacado int NOT NULL,
  imagen varchar(250) NOT NULL,
  detalles varchar(2000),
  id_Categoria int NOT NULL,
  PRIMARY KEY (id_vacante),
  FOREIGN KEY (id_categoria) REFERENCES `Categorias` (id_categoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO Vacantes (nombre, descripcion, fecha, salario, estatus, destacado, imagen, detalles, id_Categoria)
VALUES ('Desarrollador Full Stack', 'Se busca desarrollador con experiencia en tecnologías web.', '2024-02-06', 50000.00, 'Aprobada', 0, 'imagen1.jpg', 'Detalles adicionales sobre la vacante.', 1),
       ('Diseñador Gráfico Senior', 'Se requiere un diseñador con experiencia en diseño editorial.', '2024-02-06', 60000.00, 'Creada', 1, 'imagen2.jpg', 'Detalles adicionales sobre la vacante.', 2),
       ('Especialista en Marketing Digital', 'Buscamos un experto en estrategias de marketing online.', '2024-02-06', 70000.00, 'Aprobada', 1, 'imagen3.jpg', 'Detalles adicionales sobre la vacante.', 3),
       ('Ingeniero de Software', 'Se busca ingeniero de software para trabajar en proyectos de desarrollo.', '2024-02-06', 55000.00, 'Creada', 0, 'imagen4.jpg', 'Detalles adicionales sobre la vacante.', 1),
       ('Community Manager', 'Se necesita un experto en redes sociales para gestionar la comunidad en línea.', '2024-02-06', 45000.00, 'Aprobada', 0, 'imagen5.jpg', 'Detalles adicionales sobre la vacante.', 3),
       ('Diseñador UX/UI', 'Buscamos un diseñador especializado en experiencia de usuario e interfaz.', '2024-02-06', 58000.00, 'Creada', 1, 'imagen6.jpg', 'Detalles adicionales sobre la vacante.', 2);

-- DROP TABLE IF EXISTS `Solicitudes`;
CREATE TABLE `Solicitudes` (
  id_solicitud int NOT NULL AUTO_INCREMENT,
  fecha date NOT NULL,
  archivo varchar(250) NOT NULL,
  comentarios varchar(2000),
  id_Vacante int NOT NULL,
  id_Usuario int NOT NULL,
  PRIMARY KEY (id_solicitud),
  UNIQUE(id_Vacante,id_Usuario),
  FOREIGN KEY (id_Usuario) REFERENCES `Usuarios` (id_usuario),
  FOREIGN KEY (id_Vacante) REFERENCES `Vacantes` (id_vacante)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO Solicitudes (fecha, archivo, comentarios, id_Vacante, id_Usuario)
VALUES ('2024-02-06', 'archivo1.pdf', 'Comentarios adicionales sobre la solicitud.', 1, 1),
       ('2024-02-06', 'archivo2.pdf', 'Comentarios adicionales sobre la solicitud.', 2, 2),
       ('2024-02-06', 'archivo3.pdf', 'Comentarios adicionales sobre la solicitud.', 3, 3),
       ('2024-02-06', 'archivo4.pdf', 'Comentarios adicionales sobre la solicitud.', 4, 1),
       ('2024-02-06', 'archivo5.pdf', 'Comentarios adicionales sobre la solicitud.', 5, 2),
       ('2024-02-06', 'archivo6.pdf', 'Comentarios adicionales sobre la solicitud.', 6, 3);

-- DROP TABLE IF EXISTS `UsuarioPerfil`;
CREATE TABLE `UsuarioPerfil` (
  id_Usuario int NOT NULL,
  id_Perfil int NOT NULL,
  PRIMARY KEY(id_Usuario,id_Perfil),
 FOREIGN KEY (id_Usuario) REFERENCES `Usuarios` (id_usuario),
  FOREIGN KEY (id_Perfil) REFERENCES `Perfiles` (id_perfil)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO UsuarioPerfil (id_Usuario, id_Perfil)
VALUES (1, 1);
INSERT INTO UsuarioPerfil (id_Usuario, id_Perfil)
VALUES (2, 2);
INSERT INTO UsuarioPerfil (id_Usuario, id_Perfil)
VALUES (3, 2);