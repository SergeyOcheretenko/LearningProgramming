CREATE TABLE supply(
    supply_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50),
    author VARCHAR(30),
    price DECIMAL(8, 2),
    amount INT
);

INSERT INTO supply(title, author, price, amount)
VALUES ('Лирика', 'Пастернак Б.Л.', 518.99, 2), 
    ('Черный человек', 'Есенин С.А.', 570.20, 6),
    ('Белая гвардия', 'Булгаков М.А.', 540.50, 7),
    ('Идиот','Достоевский Ф.М.', 360.80, 3);

INSERT INTO book(title, author, price, amount)
SELECT title, author, price, amount
FROM supply 
WHERE author <> 'Булгаков М.А.' AND author <> 'Достоевский Ф.М.';

INSERT INTO book(title, author, price, amount)
SELECT title, author, price, amount
FROM supply
WHERE author NOT IN (
    SELECT author
    FROM book
);
    
UPDATE book
SET price = 0.9 * price
WHERE amount BETWEEN 5 AND 10;

UPDATE book
SET buy = IF(buy > amount, amount, buy), 
    price = IF(buy = 0, 0.9 * price, price);

UPDATE book, supply
SET book.amount = book.amount + supply.amount,
    book.price = ROUND((book.price + supply.price) / 2, 2)
WHERE book.title = supply.title AND book.author = supply.author;
    
SELECT * FROM book;
