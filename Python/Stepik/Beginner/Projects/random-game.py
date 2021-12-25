from random import randint

def is_valid(number, right_limit):
    if not(number.isdigit()):
        return 'not_number'

    if not(1 <= int(number) <= right_limit):
        return 'not_in_range'
    return True

def start_game():
    print('Игра началась!')
    right_limit = int(input('Загадываем число! Будем загадывать от 1 до ...?\n'))
    print('\nТеперь попробуйте отгадать число\n')
    random_number = randint(1, right_limit)
    return right_limit, random_number

right_limit, random_number = start_game()

left, right, counter = 1, right_limit, 0

while True:
    user_number = input('Введите ваш вариант ответа:\n')
    if is_valid(user_number, right_limit) == 'not_number':
        print('\nВведите пожалуйста число\n')
        continue

    if is_valid(user_number, right_limit) == 'not_in_range':
        print(f'\nВведите число от 1 до {right_limit}\n')
        continue

    user_number = int(user_number)
    
    counter += 1

    if user_number > random_number:
        print('\nСлишком много. Попробуйте ещё раз\n')
        continue

    if user_number < random_number:
        print('\nСлишком мало. Попробуйте ещё раз\n')
        continue

    if user_number == random_number:
        print(f'\nВы угадали! Вам понадобилось {counter} попыток\n')
        
        game_process = input('Хотите сыграть ещё раз? (Да/Нет)\n')
        print()

        if game_process.lower() == 'да':
            counter = 0
            right_limit, random_number = start_game()
        else:
            print('Спасибо за игру!')
            break
