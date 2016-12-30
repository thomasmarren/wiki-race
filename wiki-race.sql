DROP DATABASE IF EXISTS wiki_race;
CREATE DATABASE wiki_race;

\c wiki_race;

CREATE TABLE races (
  ID SERIAL PRIMARY KEY,
  player TEXT,
  start TEXT,
  finish TEXT,
  clicks INT,
  speed INT
);

INSERT INTO races (player, start, finish, clicks, speed)
  VALUES ('Tom', 'Ficus rubiginosa', 'Payphone', 10, 30000);
