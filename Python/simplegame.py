import random

# GET GUESS
def get_guess():
    return list(input('Hay nhap tien doan cua ban: '))

# GENERATE COMPUTER CODE 123
def generate_code():
    list_code = [str(num) for num in range(10)]
    random.shuffle(list_code)
    return list_code[:3] #chi lay 3 so dau thoi

# GENERATE THE CLUES      134 453
def generate_clues(your_guess, gen_code):

    if your_guess == gen_code:
        return 'CODE CRACKED!'
    
    clue = []

    for ind, num in enumerate(your_guess):
        if num == gen_code[ind]:
            clue.append('match')
            clue.append('close')
            
    if clue == []:
        return ['nope']
    else:
        return clue

    

# RUN GAME LOGIC
print('Chào mừng bạn đến trò chơi:')
# secret_code = generate_code()
secret_code = ['1', '2', '9']
clue_report = []
while clue_report != 'CODE CRACKED!':
    my_guess = get_guess()
    
    clue_report = generate_clues(my_guess,secret_code)
    for clue in clue_report:
        print(clue)


