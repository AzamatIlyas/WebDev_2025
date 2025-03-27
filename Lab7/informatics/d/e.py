n = int(input())
array = list(map(int, input().split()))

ok = False
for i in range(1, n):
    if array[i] > 0 and array[i-1] > 0 or array[i] <= 0 and array[i-1] <= 0:
        print("Yes")
        ok = True
        break
if not ok:
    print("No")