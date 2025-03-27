n = int(input())
array = list(map(int, input().split()))

count = 0
for i in range(n):
    if array[i] > 0:
        count += 1

print(count)