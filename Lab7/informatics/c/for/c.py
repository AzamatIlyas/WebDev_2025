a = int(input())
b = int(input())

for i in range(a,b+1):
    if i*i < b:
        print(i*i, end=" ")