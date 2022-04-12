function rounders(value) {
    var l = Math.floor(Math.log10(value));
    var m = 10;
    for (i = 0; i < l; i++) {
      var r = (10 * (value % m)) / m;
      if (r < 5) {
        value -= (m * r) / 10;
      } else {
        value += (m * (10 - r)) / 10;
      }
      m *= 10;
    }
    return value;
  }

  
// Alt 2
function solution(value) {
    let power = 10 ** Math.floor(Math.log10(value));
    let other = value % power;
    let leading = Math.floor(value / power);
    
    return power * (other / power > 4 / 9 ? leading + 1 : leading);
}

// Alt 3
const solution = (value, n = 0) =>
  value < 10 ? value * 10 ** n : solution(Math.round(value / 10), ++n);