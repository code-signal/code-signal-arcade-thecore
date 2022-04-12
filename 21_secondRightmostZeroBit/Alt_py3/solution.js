def solution(n):
    return (((((n + 1) | n) + 1) | n) - n)

// Alt 2
def solution(n):
    return 2**([i for i, ltr in enumerate(bin(n)[:1:-1]) if ltr == '0'])[1];

// Alt 3
def solution(n):
    return ~(n|n+1) & -~(n|n+1)