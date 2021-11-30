create database usuarios;

use usuarios;

create table pessoas(
	id int,
    nome varchar(30) not null,
    email varchar(30) null,
    PRIMARY KEY(id)
);

Alter table pessoas

modify column id int AUTO_INCREMENT,

modify column nome varchar(30) not null,

modify column email varchar(30) null;

insert into pessoas values
(Default, 'Amanda', 'amanda@email.com'), 
(Default, 'Paulo', null), 
(3, 'Joana', 'joana@email.com');

UPDATE pessoas SET nome='Joana Souza' where id=3;

select * from pessoas;