n = int(input())
total = 0
while n > 0:
    if n % 2 == 0:
        total += n % 10
    n //= 10
print(total)
