def solution(lastNumberOfDays):
    if lastNumberOfDays == 31:
        return [28, 30, 31]
    return [31]

// Alt 2
def solution(lastNumberOfDays):
    return {28: [31], 30: [31], 31: [28, 30, 31]}[lastNumberOfDays]    