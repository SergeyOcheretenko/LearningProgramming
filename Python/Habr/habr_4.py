a = int(input())
b = int(input())
c = int(input())

p = (a + b + c) / 2
square = (p * (p - a) * (p - b) * (p - c)) ** 0.5

print(f'Площадь треугольника со сторонами {a}, {b} и {c} равна {round(square, 2)}')
