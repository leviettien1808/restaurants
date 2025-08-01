SELECT SUM(amount_billed) FROM bookings;

SELECT AVG(num_guests) FROM bookings;

SELECT ROUND(AVG(num_guests)) FROM bookings;

SELECT ROUND(AVG(num_guests), 2) FROM bookings;

SELECT ROUND(AVG(amount_tipped), 2) FROM bookings;

SELECT ROUND(AVG(amount_tipped), 4) FROM bookings;