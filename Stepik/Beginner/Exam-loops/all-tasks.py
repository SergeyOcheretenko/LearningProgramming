n = int(input())
last = n % 10
last_counter, counter_3, counter_even, sum_five, mult_seven, counter_0_and_5 = 0, 0, 0, 0, 1, 0
while n > 0:
    number = n % 10
    if number == last:
        last_counter += 1
    if number == 3:
        counter_3 += 1
    if number % 2 == 0:
        counter_even += 1
    if number > 5:
        sum_five += number
    if number > 7:
        mult_seven *= number
    if number == 0 or number == 5:
        counter_0_and_5 += 1
    n //= 10
print(counter_3, last_counter, counter_even, sum_five, mult_seven, counter_0_and_5, sep='\n')
