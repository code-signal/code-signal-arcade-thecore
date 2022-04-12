def solution(score1, score2):
    mins, maxs = (min(score1, score2), max(score1, score2))
    return (maxs == 6 and mins < 5) or (maxs == 7 and mins in (5,6))


// Alt 2
def solution(score1, score2):
    return sorted((score1, score2)) in ([6, 7], [5, 7], [4, 6], [3, 6], [2, 6], [1, 6], [0, 6])

// Alt 3
def solution(score1, score2):

    maxx = max(score1, score2)

    minn = min(score1, score2)


    if maxx == 6:
        if maxx - minn >= 2:
            return True
        else:
            return False
    elif maxx == 7:
        if maxx - minn > 2 or maxx == minn:
            return False
        else:
            return True
    else:
        return False
    

