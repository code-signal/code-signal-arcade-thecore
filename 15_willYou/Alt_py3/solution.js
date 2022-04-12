def solution(young, beautiful, loved):
    return loved != (young and beautiful)

// Alt 2
def solution(young, beautiful, loved):

    return not loved == (beautiful and young)    

// Alt 3
def solution(young, beautiful, loved):
    y = young
    b = beautiful
    l = loved
    
    if y and b and not l:
        return True
    
    if l and (not y or not b):
        return True
    
    return False    