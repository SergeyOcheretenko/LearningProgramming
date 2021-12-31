class Object:
  x = 5
  y = 7
  def adder(self, x, y):
    self.x += x
    self.y += y
  def toString(self):
    return [self.x, self.y]
  def return_name(self):
    try:
      return self.name
    except:
      return 'Not name'


object = Object()
print(object.toString())
object.adder(3, 4)
print(object.toString())
print(object.return_name())
object.name = 'New name'
print(object.return_name())
