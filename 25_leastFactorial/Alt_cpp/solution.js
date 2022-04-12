int solution(int n) {
    int f = 1;
    for(int k = 0; ; ++k, f *= k)
        if (n <= f)
            return f;
}


//  Alt 2
int solution(int n) {
    int m = 1;
    for (int k = 2; m < n; k++) m *= k;
    return m;
  }

//  Alt 3
function solution(n) {
    cache = {};    
    let k = 1;
    while ( f(k, cache) < n ) {
        k++;
    }
    
    return f(k, cache);
}

function f(m, cache) {
    if ( m === 1) return 1;
    let result;
    if ( m in cache) result = cache[m];
    else result = f(m-1, cache) * m;
    cache[m] = result;
    return result;
}

