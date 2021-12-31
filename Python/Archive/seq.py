def seq(*args):
  array = list(args)
  for i in range(len(array) - 1, 0, -1):
    array[i - 1] = array[i - 1](array[i])
  return array[0]

result1 = seq(lambda x: x * 2, lambda x: x + 7, 9)
result2 = seq(5)
result3 = seq(lambda x: x, 8)
result4 = seq(lambda x: x + 1, \
lambda x: x * 2, \
lambda x: x / 3, \
lambda x: x - 4, 7)
print(result1, result2, result3, result4, sep='\n')
print(result1)
