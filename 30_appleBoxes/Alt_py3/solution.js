def solution(n):
    return ((-1)**n)*n*(n+1)/2

// Alt 2
def solution(k):
    yellow = sum(x*x for x in range(1,k+1,2))
    red = sum(x*x for x in range(0,k+1,2))
    return red - yellow   