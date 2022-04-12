function countSumOfTwoRepresentations2(n, l, r) {
    if (2 * r < n || 2 * l > n) return 0;
    var min = Math.max(l, n - r);
    var max = Math.min(r, n - l);
    var mid = Math.floor((max + min) / 2);
    return mid - min + 1;
  }

// Alt 2
function solution(n, l, r) {
    const middle = n/2;
        
        if ( middle < l || r < middle) return 0;
        
        return 1 + Math.floor(Math.min(middle - l, r - middle));
    }

// Alt 3
const solution = (n, l, r) =>
  Math.max((Math.min(r, n - l) - Math.max(l, n - r)) / 2 + 1 ^ 0, 0);