def solution(n):
    x = 1
    while n > 10:
        n = (n + 5) // 10
        x *= 10
    return x * n

//  Alt 2
def solution(value):
    valueS = str(value)
    if len(valueS) == 1:
        return value
    last = int(valueS[-1])
    if last <= 4:
        return 10 * solution(value // 10)
    else:
        return 10 * solution(value // 10 + 1)
