CREATE TABLE users (
 id SERIAL CONSTRAINT pk_id_cliente PRIMARY KEY,
 id_google bigint not null,
 name varchar(150) NOT NULL, 
 email varchar(150) NOT NULL
);