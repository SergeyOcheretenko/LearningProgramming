def palindrome(string, sensitive):
    if sensitive == False:
        return string.lower() == string.lower()[::-1]
    else:
        return string == string[::-1]

print(palindrome('Level', False))
print(palindrome('Level', True))
print(palindrome('Table', False))
print(palindrome('Table', True))
print(palindrome('racecar', False))
print(palindrome('racecar', True))
