DROP DATABASE IF EXISTS wiki_race;
CREATE DATABASE wiki_race;

\c wiki_race;

CREATE TABLE races (
  ID SERIAL PRIMARY KEY,
  player TEXT,
  start TEXT,
  finish TEXT,
  clicks INT,
  speed INT,
  raceDate TIMESTAMP NOT NULL DEFAULT(now())
);

INSERT INTO races (player, start, finish, clicks, speed)
  VALUES (
    'Tom',
    'Ficus_rubiginosa',
    'Payphone',
    10,
    30000);

INSERT INTO races (player, start, finish, clicks, speed)
  VALUES (
    'Tom',
    'California',
    'New_York_City',
    10,
    30000);
