i=1
while True:
    if i%3==0:
        break
    print(i)

    i+=1

ppl=['john','rob','bob']
print(ppl[-1])
a=[1,2,3,4,5,6,7,8,9]
a[::2]=10,20,30,40,50
print(a)

res=lambda a:a*a
print(res(34))

isgreater=lambda a,b: a if a>b else b

print(isgreater(33,45))

def sq(n):
    return n*n

a=[2,3,5,6,7]

# result=map(sq,a)
# nums=list(result)
# print(nums)
import math
print(list(map(sq,a)))

b=['avi','sam','vish']
print(list(map(lambda b:'EVEN' if len(b)%2==0 else b[0] ,b)))