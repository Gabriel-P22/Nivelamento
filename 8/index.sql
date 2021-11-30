create database usuarios;

use usuario;

create table pessoas(
	id int  primary key,
    nome varchar(30) not null,
    email varchar(30) null
);