def solution(n):
    d = [sum(i%j==0 for j in range(1,i+1)) for i in range(1,n+1)]
    w = [sum(j>m for j in d[:i]) for i,m in enumerate(d)]
    return [max(w),w.count(max(w))]


def solution(n):
    import functools
    @functools.lru_cache(maxsize=None)

    def get_div_cnt(n):
        return sum(n%d==0 for d in range(1,n))
    def get_weakness(n):
        return sum(get_div_cnt(i) > get_div_cnt(n) for i in range(1,n))

    x = sorted(map(get_weakness, range(1, n+1)))
    return [x[-1], x.count(x[-1])]