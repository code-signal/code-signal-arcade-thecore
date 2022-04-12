def solution(a, b):
    return sum(bin(x).count('1') for x in range(a, b+1))


// Alt 2
def solution(a, b):
    c=0
    for x in range(a, b+1):
        c+=bin(x).count('1')
    return c
    

// Alt 3
def solution(a, b):
    numsAtoB = []
    
    for i in range(a,b+1):
        numsAtoB.append(i)
    
    numsAtoBBin = []
    
    for i in range(0,len(numsAtoB)):
        num = bin(numsAtoB[i])[2:]
        numsAtoBBin += list(num)
    
    counter = 0
    
    for num in numsAtoBBin:
        if num == '1':
            counter += 1
    
    return counter
    