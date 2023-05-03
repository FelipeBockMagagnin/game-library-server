CREATE TABLE users (
 id SERIAL CONSTRAINT pk_id_users PRIMARY KEY,
 id_google varchar(150) not null,
 name varchar(150) NOT NULL, 
 email varchar(150) NOT NULL
);

CREATE TABLE games (
 id SERIAL CONSTRAINT pk_id_games PRIMARY KEY,
 current_status int not null, -- 0: completed, 1: playing, 2: want
 game_id  bigint not null,
 user_id int not null,
 CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);
