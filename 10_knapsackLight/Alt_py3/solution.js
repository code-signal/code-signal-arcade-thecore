def solution(value1, weight1, value2, weight2, maxW):
    if weight1 + weight2 <= maxW:
        return value1 + value2
    else:
        return max(value1 if weight1 <= maxW else 0, value2 if weight2 <= maxW else 0)


// Alt 2
def solution(value1, weight1, value2, weight2, maxW):

    return max((weight1 + weight2 <=maxW) * (value1 + value2), (weight1 <=maxW) * value1, (weight2 <=maxW) * value2)
