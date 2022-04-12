def solution(solutionNumber, makeNew):
    return solutionNumber + (solutionNumber - 1) // (makeNew - 1)

// Alt 2
def solution(solutionNumber, makeNew):
    burned = parts = 0
    available = solutionNumber
    while available > 0:
        burned += 1
        available -= 1
        parts += 1
        if parts == makeNew:
            parts = 0
            available +=1
    return burned

//  Alt 3
def solution(solution, makeNew):
    return 1 + (solution - 1) * makeNew //  (makeNew - 1)

// Alt 4
solution = (c, m) => c + Math.floor(--c / --m)
