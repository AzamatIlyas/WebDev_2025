x = int(input())
d = int(input())

a = x
count = 0

for i in range(0, x):
    if a % 10 == d:
        count += 1
    a //= 10

print(count)