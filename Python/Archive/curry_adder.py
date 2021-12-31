def adder(x, y, z):
  return x + y + z

print(adder(3, 4, 5))

def new_adder(x):
  def new_adder_y(y):
    def new_adder_z(z):
      return x + y + z
    return new_adder_z
  return new_adder_y
print(new_adder(3)(4)(5))

lambda_adder = lambda x: lambda y: lambda z: x + y + z
print(lambda_adder(3)(4)(5))


new = lambda_adder(9)(20)
print(new(10))
