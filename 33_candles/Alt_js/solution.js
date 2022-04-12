function candles(candlesNumber, makeNew) {
    var burn = 0;
    while (candlesNumber >= makeNew) {
      var v = Math.floor(candlesNumber / makeNew);
      burn += v * makeNew;
      candlesNumber = v + (candlesNumber % makeNew);
    }
    burn += candlesNumber;
    return burn;
  }
  
// Alt 2
function solution(solutionNumber, makeNew) {
    return solutionNumber + Math.floor((solutionNumber - 1) / (makeNew - 1))}  

//  Alt 3
const solution = (solutionNumber, makeNew) =>
  solutionNumber + --solutionNumber / --makeNew ^ 0;  
  
  