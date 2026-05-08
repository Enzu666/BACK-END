show databases;
use db_filmes_20261_a;
show tables;
select * from tbl_filme;
create table tbl_diretor (
	id int primary key not null auto_increment,
    nome varchar(45),
    data_nascimento date,
    data_inicio_carreira date,
    data_fim_carreira date,
    data_falescimento date
);
create table tbl_ator (
	id int primary key not null auto_increment,
    nome varchar(45),
    data_nascimento date,
    data_inicio_carreira date,
    data_fim_carreira date,
    data_falescimento date
);
create table tbl_genero(
	id int primary key not null auto_increment,
    nome varchar(45)
);
create table tbl_classificacao_indicativa(
	id int primary key not null auto_increment,
    classificacao varchar(45)
);
create table tbl_atividade(
	id int primary key not null auto_increment,
    nome_atividade varchar(45)
);
create table tbl_nacionalidade(
	id int primary key not null auto_increment,
    nacionalidade varchar(80)
);