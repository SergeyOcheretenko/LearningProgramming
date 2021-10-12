CREATE TABLE book(
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50),
    author VARCHAR(30),
    price DECIMAL(8, 2),
    amount INT
);

INSERT INTO book(title, author, price, amount)
VALUES ('Мастер и Маргарита', 'Булгаков М.А.', 670.99, 3);

/* INSERT INTO book(title, author, price, amount)
VALUES ('Белая гвардия', 'Булгаков М.А.', 540.50, 5);

INSERT INTO book(title, author, price, amount)
VALUES ('Идиот', 'Достоевский Ф.М.', 460, 10);

INSERT INTO book(title, author, price, amount)
VALUES ('Братья Карамазовы', 'Достоевский Ф.М.', 799.01, 2); */

INSERT INTO book(title, author, price, amount)
VALUES ('Белая гвардия', 'Булгаков М.А.', 540.50, 5), 
('Идиот', 'Достоевский Ф.М.', 460, 10),
('Братья Карамазовы', 'Достоевский Ф.М.', 799.01, 2);

SELECT author AS Автор, title as Название, price AS Цена
FROM book;

SELECT author, title, 
    ROUND(IF(author = 'Булгаков М.А.', price * 1.1, IF(author = 'Есенин С.А.', price * 1.05, price)), 2) as new_price
FROM book;

SELECT title, author
FROM book
WHERE (price BETWEEN 540.50 AND 800) AND amount IN (2, 3, 5, 7);

SELECT author,
    COUNT(title) AS Количество_произведений,
    MIN(price) AS Минимальная_цена,
    SUM(amount) AS Количество_книг
FROM book
WHERE amount > 1 AND price > 500
GROUP BY author
HAVING COUNT(title) > 1;

SELECT author, title
FROM book
WHERE amount BETWEEN 2 AND 14
ORDER BY author DESC, title ASC

SELECT title, author 
FROM book
WHERE title LIKE "_% _%" AND (author LIKE "% С._." OR author LIKE "% _.С.")
ORDER BY title ASC;

SELECT author AS Автор, COUNT(DISTINCT title) AS Различных_книг, SUM(amount) AS Количество_экземпляров
FROM book
GROUP BY author;

SELECT author, MIN(price) AS Минимальная_цена, MAX(price) AS Максимальная_цена, AVG(price) AS Средняя_цена
FROM book
GROUP BY author;

SELECT author, ROUND(SUM(price * amount), 2) as Стоимость,
    ROUND(SUM(price * amount) * 18 / 118, 2) as НДС,
    ROUND(SUM(price * amount) / 1.18, 2) as Стоимость_без_НДС
FROM book
GROUP BY author;

SELECT MIN(price) AS Минимальная_цена, MAX(price) AS Максимальная_цена, ROUND(AVG(price), 2) AS Средняя_цена
FROM book;

SELECT author, SUM(price * amount) AS Стоимость 
FROM book
WHERE title <> 'Идиот' AND title <> 'Белая гвардия'
GROUP BY author
HAVING SUM(price * amount) > 5000
ORDER BY Стоимость DESC

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
