#my_name = "Ahmed"
#print(f"Hello {my_name}")


i1 = 0
i2 = 0
i3 = 0

op = ['+', '-', '*']
nums = [100, 30, 20, 1]
y = 0

while (i1 < 3):
    while (i2 < 3):
        while (i3 < 3):
            exec(
                f'y = {nums[0]} {op[i1]} {nums[1]} {op[i2]} {nums[2]} {op[i3]} {nums[3]}')
            print(y)
            i3 += 1
        i3 = 0
        i2 += 1
    i2 = 0
    i1 += 1

xxx = 546589
for i in range(1000000):
    if i == xxx:
        print(i)
