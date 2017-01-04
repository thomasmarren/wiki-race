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

INSERT INTO contests (start, finish)
  VALUES (
    'Metal',
    'Javelin_throw'
  );

INSERT INTO contests (start, finish)
  VALUES (
    'MiniDisc',
    'Kenya'
  );

INSERT INTO contests (start, finish)
  VALUES (
    'Tourism',
    'Cryptography'
  );

INSERT INTO contests (start, finish)
  VALUES (
    'Copyright_infringement',
    'Amazon_rainforest'
  );

INSERT INTO contests (start, finish)
  VALUES (
    'Thriller_film',
    'Human_Rights_Watch'
  );

INSERT INTO contests (start, finish)
  VALUES (
    'War_crime',
    'Billboard_(magazine)'
  );

INSERT INTO contests (start, finish)
  VALUES (
    'Nick_Jonas',
    'Preakness_Stakes'
  );

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'TOM',
    1,
    23,
    4530000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'BFS',
    2,
    45,
    5430000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'ASD',
    4,
    31,
    3430000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'VAR',
    6,
    43,
    430000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'ARG',
    4,
    21,
    430000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'VEV',
    7,
    32,
    1230000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'AER',
    4,
    43,
    330000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'THB',
    2,
    23,
    340000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'ABR',
    4,
    32,
    3320000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'SSE',
    2,
    43,
    330000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'YBW',
    9,
    23,
    3230000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'AST',
    8,
    34,
    320000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'WRT',
    5,
    43,
    330000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'BWR',
    3,
    23,
    330000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'YTE',
    2,
    43,
    320000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'NRW',
    4,
    12,
    310000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'MNS',
    4,
    32,
    430000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'RTE',
    7,
    32,
    230000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'BWR',
    5,
    32,
    330000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'NHD',
    4,
    43,
    230000);

INSERT INTO races (player, contest_id, clicks, speed)
  VALUES (
    'WER',
    7,
    32,
    330000);
