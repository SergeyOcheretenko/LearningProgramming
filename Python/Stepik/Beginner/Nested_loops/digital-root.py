n = int(input())
sm = 0
while True:
    while n != 0:
        sm += n % 10
        n //= 10
    if sm > 9:
        n = sm
        sm = 0
    else:
        print(sm)
        break
