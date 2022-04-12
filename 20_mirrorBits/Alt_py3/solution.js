def solution(a):
    return int(bin(a)[2:][::-1],2)

// Alt 2
def solution(a):
    y = '{0:b}'.format(a)[::-1]
    return int(y,2)

// Alt 3
def solution(a):
    res = 0
    while a != 0:
        res = res << 1
        res += (a & 1)
        a = a >> 1
    return res
        