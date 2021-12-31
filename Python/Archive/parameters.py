from inspect import signature

def adder(object):
  result = []
  for name in object:
    result.append([name, len(signature(object[name]).parameters)])
  return result

object = {
  'm1': lambda x: [x],
  'm2': lambda x, y: [x, y],
  'm3': lambda x, y, z: [x, y, z],
  'm5': lambda x, y, z, array, object: [x, y, z, array, object]
}

print(adder(object))
