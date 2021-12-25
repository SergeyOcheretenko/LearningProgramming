count = 0
maximum = (-10) ** 9
for _ in range(4):
    x = int(input())
    if x % 2 == 1:
        count += 1
        if x > maximum:
            maximum = x
if count > 0:
    print(count)
    print(maximum)
else:
    print('NO')
