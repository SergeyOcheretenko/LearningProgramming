for i in range(1, 35000):
    counter = 0
    for j in range(1, int(i ** (1 / 3)) + 2):
        for k in range(1, int(i ** (1 / 3)) + 2):
            if j ** 3 + k ** 3 == i:
                counter += 1
    if counter > 2:
        print(i)
    counter = 0
