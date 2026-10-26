create database pruebaphpsergio;
use pruebaphpsergio;
create table usuario (
	id int auto_increment primary key,
    dni varchar(9) not null,
    nombre varchar(50) not null,
    apellidos varchar(80) not null,
    contrasena varchar(100) not null,
    email varchar(100),
    ciudad varchar(50)
    );
    
    insert into usuario (dni, nombre, apellido, contrasena, email, ciudad) values
    ('12345678Z', 'Lucia', 'Moreno Ortega', '1234', 'lucia@davante.org', 'Jaen'),
	('25446678F', 'Hugo', 'Ortega Ramos', 'Medac@d', 'hugo@davante.org', 'Madrid');

