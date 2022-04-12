def solution(n):
    f=i=1
    while f<n:
        f*=i
        i+=1
    return f

// Alt 2
def solution(n):
    if(n<=1): return 1
    facts = [factorial(x+1) for x in range(n) if(factorial(x)<n)]
    print(facts)
    return max(facts)

def factorial(n):
    if(n<=1): return 1
    return n*factorial(n-1)
