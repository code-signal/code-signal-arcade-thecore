def solution(param1, param2):
    result = 0
    tenPower = 1
    while param1 > 0 or param2 > 0:
        result += tenPower * ((param1 + param2) % 10)
        param1 //= 10
        param2 //= 10
        tenPower *= 10
    return result

//  Alty 2
def solution(param1, param2):
    p1 = [int(n) for n in list(str(param1))]
    p2 = [int(n) for n in list(str(param2))]
    
    if len(p1) < len(p2):
        p1 = abs(len(p1) - len(p2))*[0] + p1
    else:
        p2 = abs(len(p1) - len(p2))*[0] + p2
    
    return int(''.join([str(sum(p)%10) for p in zip(p1, p2)]))    