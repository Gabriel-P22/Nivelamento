create database usuarios;

use usuario;

create table pessoas(
	id int  primary key(id),
    nome varchar(30) not null,
    email varchar(30) null
);

insert to pessoas values
('Amanda', 'amanda@email.com'), 
('Paulo'), 
('Joana', 'joana@email.com');