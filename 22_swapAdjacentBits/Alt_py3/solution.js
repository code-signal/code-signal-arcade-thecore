def solution(n):
    return ((n & 0b10101010101010101010101010101010) >> 1) | ((n & 0b01010101010101010101010101010101) << 1);

// Alt 2     
def solution(n):
    return int(swappedBits(n), 2)

def swappedBits(n):
    n_bin = '{0:032b}'.format(n)
    result = ''

    for i in range(16):
        first_bit = n_bin[i * 2]
        second_bit = n_bin[(i * 2) + 1]
        result = result + second_bit + first_bit
        
    return result