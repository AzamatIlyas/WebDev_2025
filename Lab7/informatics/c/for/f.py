a = int(input())

n = a
count = 0

while a > 0:
    count += a%10
    count *= 10
    a //= 10

print(count / 10)