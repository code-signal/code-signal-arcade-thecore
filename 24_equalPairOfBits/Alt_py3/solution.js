def solution(n, m):
    return ~(n^m) & ((n^m) + 1)

// Alt 2
def solution(n, m):
    return n + m + 1 & ~m - n
    
// Alt 3
def solution(n, m):
    return 2 ** equalBitsIndex(n, m)

// Alt 4    
def equalBitsIndex(n, m):
    n_bin_rev = '{0:032b}'.format(n)[::-1]
    m_bin_rev = '{0:032b}'.format(m)[::-1]
    index = -1

    for i in range(32):
        if n_bin_rev[i] == m_bin_rev[i]:
            index = i
            break
            
    return index


// Alt 5
def solution(n, m):
    return (lambda x: x & (-x))(~(n ^ m))    

// Alt 6
def solution(n, m):
    return -~((n^m)^((n^m)+1))/2

# step 1:
# * x = n ^ m, the first 0s from right is first equal
# step 2: find pos of right most 0s
# * x1 = x XNOR (x+1)
# * explain:
# * x+1: make all bits to first 0s to 0s
# *     ex: 0b10111 + 1 = 0b11000
# * x1 = -~(x ^ (x+1))/2, result    