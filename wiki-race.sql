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
    'TOM',
    'Ficus_rubiginosa',
    'Payphone',
    10,
    30000);

INSERT INTO races (player, start, finish, clicks, speed)
  VALUES (
    'TOM',
    'California',
    'New_York_City',
    10,
    30000);

INSERT INTO races (player, start, finish, clicks, speed)
  VALUES (
    'MAC',
    'California',
    'New_York_City',
    10,
    30000);

INSERT INTO races (player, start, finish, clicks, speed)
  VALUES (
    'BEY',
    'California',
    'New_York_City',
    10,
    30000);

INSERT INTO races (player, start, finish, clicks, speed)
  VALUES (
    'PAC',
    'California',
    'New_York_City',
    10,
    30000);

INSERT INTO races (player, start, finish, clicks, speed)
  VALUES (
    'MNM',
    'California',
    'New_York_City',
    10,
    30000);
