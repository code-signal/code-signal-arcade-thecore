def solution(n, k):
    return n & ~(1<<k-1)


// Alt 2
def solution(n, k):
    return killBit(n,k)

def killBit(n, k):
    binary = [i for i in format(n, 'b')]

    try:
        binary[-k] = '0'
    except:
        return n

    result = ''.join(binary)

    return int(result, 2)    