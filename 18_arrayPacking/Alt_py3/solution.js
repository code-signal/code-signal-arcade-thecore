def solution(a):
    return sum([a[i] << i*8 for i in range(len(a))])

// Alt 2    
def solution(a):
    return int.from_bytes(a, 'little')

// Alt 3
def solution(a):
    res = 0
    for i in range(len(a)):
        res += a[i] << 8*i
    return res    