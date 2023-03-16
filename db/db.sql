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
  
insert into workout (title, description, set, user_id) values ('chest and shoulders', 'chest focused day with a focus on pressing to work on front delts with individual shoulder exercises for other shoulder heads', 'dumbell bench for 4 x 12, dumbell incline bench 4 x 8, Shoulder Shrugs 3 x 10, Lateral Raises 3 x 12, Reverse Cable Flys 3 x 12, Low Cable Flys 3 x 8, Chest Press 3 x 12', '3');

insert into workout (title, description, set, user_id) values ('back', 'back day with a focus on high volume', 'Lat pulldowns 4x10+partials, t-bar rows 3x10 + drop set, 4 x midrows, Chest supported cable row 3x10, Rope pullodwn 3x12', '3');

insert into workout (title, description, set) values ('', '', '');

select * from users
inner join workout
On workout.user_id = users.id;


select * from workout
inner join users
on workout.user_id = users.id
where workout.id = $1;

select * from users where username ilike '%jrh%';

select * from users;