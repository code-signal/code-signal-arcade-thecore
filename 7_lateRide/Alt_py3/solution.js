def solution(n):
    return sum(map(int, str(n // 60 * 100 + n % 60)))