def palind(sensitive):
    def check(string):
        if sensitive == False:
            return string.lower() == string.lower()[::-1]
        else:
            return string == string[::-1]
    return check

print(palind(True)('Level'))
print(palind(False)('Level'))
