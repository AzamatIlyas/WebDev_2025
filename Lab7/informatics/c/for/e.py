x = int(input())

a = x
sum = 0

for i in range(0, x):
    sum += a % 10
    a //= 10

print(sum)