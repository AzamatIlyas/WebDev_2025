n = int(input('Enter a number: '))

i = 0
while n >= i:
    if n >= 2**i:
        print(2**i, end=" ")
    i += 1