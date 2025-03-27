n = int(input())

i = 0
while n >= i:
    if n <= 2**i:
        print(i, end=" ")
        break
    i += 1