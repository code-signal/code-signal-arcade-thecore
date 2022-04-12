def solution(a, b, n):
    return sum([(a + i) * (b + i) for i in range(n)])

// Alt 2
def solution(a, b, n):
    return a*b*n + (a + b)*n*(n-1)/2 + n*(n+1)*(2*n + 1)/6 - n**2

//  Alt 3
def solution(a, b, n):
    moneymoneymoney=0
    for x in range(n):
        moneymoneymoney+=a*b
        a+=1
        b+=1
    return moneymoneymoney

// Alt 4
def solution(a, b, n):
 t=0
 while n!=0:
  n-=1
  t=t+a*b
  a+=1
  b+=1
 return t 
