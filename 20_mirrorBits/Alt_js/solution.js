function mirrorBits(a) {
    var ret = 0;
    var m = Math.floor(Math.log2(a));
    var i = m + 1;
    while (i--) {
      ret = ret | (((a & (1 << i)) >> i) << (m - i));
    }
    return ret;
  }

// Alt 2
function solution(a) {
    return parseInt([...a.toString(2)].reverse().join(''), 2);
}

