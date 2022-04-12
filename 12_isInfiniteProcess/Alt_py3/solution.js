def solution(a, b):
    if a > b:
        return True
    return (b - a) % 2 == 1