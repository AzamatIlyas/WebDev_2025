n = int(input())

ok = False
i = 0
while n > i:
    if n == 2**i:
        print("Yes")
        ok = True
        break
    i += 1

if not ok:
    print("No")