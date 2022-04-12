function appleBoxes(k) {
    var i = (k + (k % 2)) / 2;
    return i * (2 * i + 1) - (k % 2) * (4 * i * i);
  }

//  Alt 2  
function solution(k) {
    return k * (k + 1) / (k % 2 ? -2 : 2);
  }
  
// Alt 3
function solution(k) {
    const cache = {};    
    return f(k, cache);
}

function f (n, cache) {
    if ( n === 1 ) return -1;
    if ( n === 2 ) return 3;
    
    let result = 0;
    if ( n in cache ) {
        result = cache[n];    
    }else  {
        n%2 == 0 ? result = n*(n+1)/2 : result = - n*(n+1)/2;  
    }  
    cache[n] = result;
    return result;
}

// Alt 3
// even - odd
/*
11 121 -66
10 100  55
9 81   -45
8 64    36
7 49   -28
6 36    21
5 25   -15
4 16    10
3  9    -6
2  4     3
1  1    -1
*/

const solution = k => ((k & 1) ? -k : k) * (k + 1) / 2;
