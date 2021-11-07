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
('Братья Карамазовы', 'Достоевский Ф.М.', 799.01, 2),
('Игрок', 'Достоевский Ф.М.', 480.50, 10),
('Стихотворения и поэмы', 'Есенин С.А.', 650, 15);

SELECT author, title, price
FROM book
WHERE price <= (SELECT AVG(price) FROM book)
ORDER BY price DESC;

SELECT author, title, price
FROM book
WHERE price - (SELECT MIN(price) FROM book) <= 150
ORDER BY price ASC;

SELECT author, title, amount
FROM book
WHERE amount IN (
    SELECT amount
    FROM book
    GROUP BY amount
    HAVING COUNT(amount) = 1
    );
 
SELECT author, title, price
FROM book
WHERE price < ANY(
    SELECT MIN(price)
    FROM book
    GROUP BY author
);

SELECT title, author, amount, (SELECT MAX(amount) FROM book) - amount AS Заказ
FROM book
WHERE amount <> (SELECT MAX(amount) FROM book);

SELECT author, title, price, amount, ROUND(
    price * amount * 100 / (
    SELECT SUM(price * amount)
    FROM book
    ), 2) AS Выручка_в_процентах
FROM book
ORDER BY Выручка_в_процентах DESC;
