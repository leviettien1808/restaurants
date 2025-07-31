-- MySQL
CREATE TABLE payment_methods (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200)
);

CREATE TABLE tables (
    id INT PRIMARY KEY AUTO_INCREMENT,
    num_seats INT,
    category VARCHAR(200)
);

-- Postgres
CREATE TABLE payment_methods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200)
);

CREATE TABLE tables (
    id SERIAL PRIMARY KEY,
    num_seats INT,
    category VARCHAR(200)
);

-- SQLite
CREATE TABLE payment_methods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

CREATE TABLE tables (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    num_seats INTEGER,
    category TEXT
);