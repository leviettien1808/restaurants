-- MySQL
CREATE TABLE bookings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    booking_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    num_guests INT NOT NULL CHECK (num_guests > 0),
    amount_billed NUMERIC(5, 2) NOT NULL,
    amount_tipped NUMERIC(4, 2),
    payment_id INT,
    table_id INT,
    FOREIGN KEY (payment_id) REFERENCES payment_methods (id) ON DELETE SET NULL,
    FOREIGN KEY (table_id) REFERENCES tables (id) ON DELETE SET NULL
);

-- Postgres
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    booking_date DATE DEFAULT CURRENT_DATE,
    num_guests INT NOT NULL CHECK (num_guests > 0),
    amount_billed NUMERIC(5, 2) NOT NULL,
    amount_tipped NUMERIC(4, 2),
    payment_id INT,
    table_id INT,
    FOREIGN KEY (payment_id) REFERENCES payment_methods (id) ON DELETE SET NULL,
    FOREIGN KEY (table_id) REFERENCES tables (id) ON DELETE SET NULL
);

-- SQLite
CREATE TABLE bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    booking_date TEXT DEFAULT (datetime('now', 'localtime')),
    num_guests INTEGER NOT NULL CHECK (num_guests > 0),
    amount_billed NUMERIC NOT NULL,
    amount_tipped NUMERIC,
    payment_id INTEGER,
    table_id INTEGER,
    FOREIGN KEY (payment_id) REFERENCES payment_methods ON DELETE SET NULL,
    FOREIGN KEY (table_id) REFERENCES payment_methods ON DELETE SET NULL
)