a = int(input())
b = int(input())

n = a
count = 0

while a > 0:
    count += a%10
    count *= 10
    a //= 10

count /= 10

if count == n and b == 1 or count != n and b == -1:
    print("Yes")
else:
    print("No")
