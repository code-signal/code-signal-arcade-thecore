def solution(n, l, r):
    return sum(1 for a in range(l, r+1) if l <= a <= n - a <= r)


// Alt 2
def solution(n, l, r):
    if l+r < n:
        l = n-r 
    else:
        r = n -l 
    if l > r:
        return 0
    return (r-l)//2 + 1


// Alt 3
def solution(n, l, r):
    return sum(1 for i in range(l, r+1) if l<=i<=n-i<=r)    

// Alt 4    
def solution(n, l, r):
    return math.floor(min(n/2-l,r-n/2)+1) if 2*l <= n <= 2*r else 0

// Alt 5
def solution(n, l, r):
    return sum(map(lambda x: r >= n - x >= x, range(l, r + 1)))    

// Alt 6
def solution(n, l, r):
    c = 0
    
    for a in range(l, r + 1):
        b = n - a
        
        if b >= a and l <= b <= r:
            c += 1
                
    return c