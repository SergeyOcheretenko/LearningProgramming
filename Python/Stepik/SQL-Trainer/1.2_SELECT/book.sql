CREATE TABLE book(
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50),
    author VARCHAR(30),
    price DECIMAL(8, 2),
    amount INT
);

INSERT INTO book(title, author, price, amount)
VALUES ('Мастер и Маргарита', 'Булгаков М.А.', 670.99, 3),
('Белая гвардия', 'Булгаков М.А.', 540.50, 5), 
('Идиот', 'Достоевский Ф.М.', 460, 10),
('Братья Карамазовы', 'Достоевский Ф.М.', 799.01, 2);

SELECT * FROM book;

SELECT author, title, price
FROM book;

SELECT title AS Название, author AS Автор
FROM book;

SELECT title, amount, amount * 1.65 as pack
from book;

SELECT title, author, amount, ROUND(price * 0.7, 2) AS new_price
FROM book;

SELECT author, title, 
    ROUND(IF(author = 'Булгаков М.А.', price * 1.1, IF(author = 'Есенин С.А.', price * 1.05, price)), 2) as new_price
FROM book;

SELECT author, title, price
FROM book
WHERE amount < 10;

SELECT author, title
FROM book
WHERE amount BETWEEN 2 AND 14
ORDER BY author DESC, title ASC

SELECT title, author, price, amount
FROM book
WHERE (price < 500 OR price > 600) AND price * amount >= 5000;

SELECT title, author
FROM book
WHERE (price BETWEEN 540.50 AND 800) AND amount IN (2, 3, 5, 7);

SELECT title, author 
FROM book
WHERE title LIKE "_% _%" AND (author LIKE "% С._." OR author LIKE "% _.С.")
ORDER BY title ASC;

SELECT 'Дарья Донцова' as author, 
    CONCAT('Евлампия Романова и ', title) AS title,
    ROUND(price * 1.42, 2) AS price
FROM book
ORDER BY price DESC