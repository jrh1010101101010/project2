create database collectiveworkout;

create table workout(
    id serial primary key,
    title text,
    description text, 
    set text,
    user_id integer
);

create table users (
    id serial primary key,
    username text,
    bio text,
    password_digest text
);
  