def solution(n):
    return '0' in str(n).rstrip('0')

// Alt 2
def solution(n):
    return str(n).find("0")<len(str(n))-str(n).count("0") and str(n).count("0")>0
    
// Alt 3
def solution(n):
    import re
    return re.search('0[1-9]+', str(n)) is not None