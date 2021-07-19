from random import shuffle

SUITE = 'H D S C'.split()
RANK = '2 3 4 5 6 7 8 9 10 J Q K A'.split()

class Deck:
    def __init__(self):
        self.all_card = [(s,r) for s in SUITE for r in RANK]
    
    def shuffle(self):
        shuffle(self.all_card)

    def split_card_half(self):
        return self.all_card[:26], self.all_card[26:]

        
class Hand:
    def __init__(self, cards):
        self.cards = cards

    def __str__(self):
        print('Chứa {} lá bài.'.format(len(self.cards)))

    def add_card(self, added_cards):
        self.cards.extend(added_cards)

    def remove_card(self):
        return self.cards.pop()

class Player:
    def __init__(self, name, hand):
        self.name = name
        self.hand = hand

    def play_card(self):
        drawn_cards = self.hand.remove_card() # danh bai ra
        print('{} has placed: {}'.format(self.name, drawn_cards))
        return drawn_cards

    def remove_war_card(self):
        war_cards = []
        # nếu số là bài nhỏ hơn 3 thì trả về những lá bài đó
        if len(self.hand.cards) < 3:
            return self.hand.cards
        # ngược lại, lấy 3 lá bài ra từ mỗi người chơi
        else:
            for x in range(3):
                war_cards.append(self.hand.cards.pop())
            return war_cards

    def still_has_cards(self):
        '''
        Return True if player still has cards left
        '''
        return len(self.hand.cards) != 0
                
if __name__ == '__main__':
    # Tao bo bai 52 la va chia deu 2 ben
    deck =Deck()
    deck.shuffle()  # xáo bài
    half1, half2 = deck.split_card_half()   # chia bài 2 người chơi

    # tao 2 nguoi choi
    comp = Player('Computer', Hand(half1))
    name_person = input('What is your name?')
    pers = Player(name_person, Hand(half2))

    # Bat dau choi
    total_rounds = 0
    war_count = 0
    # Vòng lặp tiếp tục khi cả 2 người chơi còn bài
    while comp.still_has_cards() and pers.still_has_cards():
        total_rounds += 1
        print(pers.name + ' has the count: ' + str(len(pers.hand.cards)))
        print(comp.name + ' has the count: ' + str(len(comp.hand.cards)))
        print('\n')
        print('Play a card!')
        
        # them 2 la bai cua nguoi choi vo table_cards
        # tạo biến trung gian để lưu trữ những lá bài được đánh ra hoặc khi war xảy ra
        table_cards = []
        c_card = comp.play_card()
        p_card = pers.play_card()
        table_cards.append(c_card)
        table_cards.append(p_card)

        # War xảy ra
        if c_card[1] == p_card[1]:  # [1] is RANK [0] is SUITE
            war_count =+ 1
            print('War!')

            # lấy ra 3 lá úp của mỗi người chơi
            table_cards.extend(comp.remove_war_card())
            table_cards.extend(pers.remove_war_card())

            # lấy thêm 1 lá nữa cho để xét thắng thua
            c_card = comp.play_card()
            p_card = pers.play_card()
            
            # thêm mỗi người chơi 1 lá bài vô, ai thắng lấy hết
            table_cards.append(c_card)
            table_cards.append(p_card)

            # nếu lá bài của computer nhỏ hơn người chơi
            # Lấy index của list RANK so sánh
            # [1] is RANK [0] is SUITE
            if RANK.index(c_card[1]) < RANK.index(p_card[1]):
                pers.hand.add_card(table_cards)
            else:
                comp.hand.add_card(table_cards)
        
        # Khi WAR không xảy ra thì người chơi nào có bài lớn hơn thì thắng
        else:
            if RANK.index(c_card[1]) < RANK.index(p_card[1]):
                pers.hand.add_card(table_cards)
            else:
                comp.hand.add_card(table_cards)

    print('Game Over, number of rounds:' + str(total_rounds))
    print('A war happend ' + str(war_count) + ' times')

