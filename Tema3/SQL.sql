create database pruebaphpsergio;
use pruebaphpsergio;
create table usuario (
	id int auto_increment primary key,
    dni varchar(9) not null,
    nombre varchar(50) not null,
    apellidos varchar(80) not null,
    contraseña varchar(100) not null,
    email varchar(100),
    ciudad varchar(50)
    );
    

