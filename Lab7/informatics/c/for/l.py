n = input("Enter a number: ")

dec = 0

for i in range(len(n)):
    a = int(n[i])
    dec += a*(2**i)

print(dec)