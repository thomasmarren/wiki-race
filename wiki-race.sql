DROP DATABASE IF EXISTS wiki_race;
CREATE DATABASE wiki_race;

\c wiki_race;

CREATE TABLE races (
  ID SERIAL PRIMARY KEY,
  contest_id INT,
  player TEXT,
  clicks INT,
  speed INT,
  raceDate TIMESTAMP NOT NULL DEFAULT(now())
);

CREATE TABLE contests (
  ID SERIAL PRIMARY KEY,
  start TEXT,
  finish TEXT
);

INSERT INTO contests (start, finish)
  VALUES (
    'Ficus_rubiginosa',
    'Payphone'
  );

INSERT INTO contests (start, finish)
  VALUES (
    'New_York_City',
    'California'
  );

INSERT INTO contests (start, finish)
  VALUES (
    'Warner_Bros._Records',
    'Pac-Man'
  );

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'TOM',
    1,
    10,
    30000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'TOM',
    2,
    10,
    30000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'MAC',
    3,
    10,
    30000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'BEY',
    1,
    10,
    30000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'PAC',
    2,
    10,
    30000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'MNM',
    3,
    10,
    30000);
