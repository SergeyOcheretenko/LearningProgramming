def max_elem(array):
  result = array[0][0]
  for numbers in array:
    for number in numbers:
      if number > result:
        result = number
  return result

print(max_elem([[1, 2, 21], [4, 5, 6], [7, 10, 9]]))
