from fractions import gcd
def solution(n, m):
    return m+n+gcd(m,n)-2
    #if n == m:
    #    if n <3:
    #        return n * m
    #    else:
    #        return (n-2) * 3 + 4
    #elif n == 1 or m == 1:
    #    return n*m
    #else:
    #    return m+n+gcd(m,n)-2
#

// Alt 2
def gcd(a, b):
    while b:
        a, b = b, a%b
    return a

def solution(n, m):
    return n + m + gcd(n,m) - 2

//  Alt 3
import math
def x(y,a,b):
    return a*(1 - y/b)

def solution(n, m):
    d = math.gcd(m,n)
    if d == 1:
        count = 0
        a = max(m,n)
        b = min(m,n)
        for j in range(b,0,-1):
            count += math.ceil(x(j-1,a,b)) - math.floor(x(j,a,b))
        return count
    return d*solution(n//d,m//d) + (d-1)*2
    # d = math.gcd(m,n)
    # if d == 1:
    #     if m == 1: return n
    #     if n == 1: return m
    #     a = max(m,n)
    #     b = min(m,n)
    #     p = math.ceil(a/b)
    #     if b == 2:
    #         return 2*p
    #     if a-b == 1:
    #         return b*p
    #     else:
    #         return b*p + (a-b-1)
    # return d*solution(n//d,m//d) + (d-1)*2    