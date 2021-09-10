a, b = int(input()), int(input())
mx, sm = 0, 0
for i in range(a, b + 1):
    for j in range(1, i + 1):
        if i % j == 0:
            sm += j
    if sm >= mx:
        mx = sm
        number = i
    sm = 0
print(number, mx)
