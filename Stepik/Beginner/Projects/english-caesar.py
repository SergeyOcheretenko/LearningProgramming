text = input()
result = ''

for letter in text:
    if not(letter.lower() in 'abcdefghijklmnopqrstuvwxyz'):
        result += letter
        continue
    if letter.isupper():
        flag = True
    else:
        flag = False
    
    if ord(letter.lower()) > 121:
        new_letter = chr(ord(letter.lower()) + 1 - 26)
    else:
        new_letter = chr(ord(letter.lower()) + 1)
    
    if flag == True:
        result += new_letter.upper()
    else:
        result += new_letter

    print(result)

print(result)
