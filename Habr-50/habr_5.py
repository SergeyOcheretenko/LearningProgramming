a = int(input())
b = int(input())

# С помощью дополнительной переменной
t = a
a = b
b = t

# С помощью сложения и вычитания
a = a + b
b = a - b
a = a - b

# С помощью двух дополнительных переменных
a, b = b, a
