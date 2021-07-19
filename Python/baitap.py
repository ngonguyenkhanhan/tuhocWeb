# # problem3
# def end_other(a,b):
#     a = a.lower()
#     b = b.lower()

#     # kiểm tra chuỗi a nằm bất kì đâu trong chuỗi b
#     if a in b or b in a:
#         return True
#     else:
#         return False

#     # # trường hợp này chỉ đúng với chuỗi a ở đầu hoặc ở cuối chuỗi b mà thôi
#     # return a[-(len(b)):] == b or b[-(len(a)):] == a 

#     # Này cũng kiểm tra chuỗi a ở đâu hoặc cuỗi chuỗi b mà thôi
#     # return (a.endswith(b) or b.endswith(a))

# print(end_other('abc', 'ababcX'))

################################################################
# problem4

# def doubleChar(str):

#     ## Cách này không tối ưu khi mà muốn nhân 3 nhân 4
#     ## code dưới đây khó mà thực thi nhân số lẻ như nhân 3 nhân 5 nhaan7....
#     # if str != '':
#     #     listDoubleString =  [x+x for x in str]
#     #     kq = ''
#     #     for item in listDoubleString:
#     #         kq += item
#     #     return kq
#     # else:
#     #     return 'Sorry! The String is NULL'


#     # Cách này có thẻ nhân 3 nhân 4 được
#     result =''
#     for char in str:
#         result += char*7
#     return result

# print(doubleChar('Hi-There'))

################################################################
# # problem5
# def no_teen_sum(a,b,c):
#     return fix_teen(a) + fix_teen(b) + fix_teen(c)

# def fix_teen(n):
#     if n in [13,14,17,18,19]:
#         return 0
#     return n
    
# print(no_teen_sum(1, 16, 3))


################################################################
# Problem 6

def count_evens(nums):
    count = 0
    for e in nums:
        if e %2 == 0:
            count +=1

    return count

print(count_evens([1,3,5]))
    
    
