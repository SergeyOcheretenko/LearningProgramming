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
('Игрко, 'Достоевский Ф.М.', 480.50, 10),
('Стихотворения и поэмы', 'Есенин С.А.', 650, 15);

SELECT DISTINCT amount
FROM book;

SELECT DISTINCT amount
FROM book;

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
SELECT ROUND(AVG(price), 2) AS Средняя_цена, SUM(price * amount) AS Стоимость
FROM book
WHERE amount BETWEEN 5 AND 14;

SELECT author,
    COUNT(title) AS Количество_произведений,
    MIN(price) AS Минимальная_цена,
    SUM(amount) AS Количество_книг
FROM book
WHERE amount > 1 AND price > 500
GROUP BY author
HAVING COUNT(title) > 1;
