text = input()
result = ''
results = []

words = text.split(' ')

for word in words:
    counter = 0
    for letter in word:
        if letter.isalpha():
            counter += 1
    for letter in word:
        if not(letter.lower() in 'abcdefghijklmnopqrstuvwxyz'):
            result += letter
            continue
        if letter.isupper():
            flag = True
        else:
            flag = False
        
        if ord(letter.lower()) > 122 - counter:
            new_letter = chr(ord(letter.lower()) + counter - 26)
        else:
            new_letter = chr(ord(letter.lower()) + counter)
        
        if flag == True:
            result += new_letter.upper()
        else:
            result += new_letter

    results.append(result)
    result = ''

print((' ').join(results))
