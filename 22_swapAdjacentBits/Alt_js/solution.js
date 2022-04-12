function swapAdjacentBits(n) {
    return parseInt(
      ((n.toString(2).length % 2 ? "0" : "") + n.toString(2))
        .match(/\d{2}/g)
        .map(el =>
          el
            .split("")
            .reverse()
            .join("")
        )
        .join(""),
      2
    );
  }

  
// Alt 2
function solution(n) {
    return parseInt(n.toString(2).padStart(32, `0`).replace(/(.)(.)/g, `$2$1`), 2);
  }  

// Alt 3
function solution(n) {
    return (function(n){
        function dec2bin(n) {
            var bin = [];
            while( n>0 ) {
                bin.push(n%2);
                n = Math.floor(n/2);
            }
            return bin;
        }
        
        function bin2dec(bin) {
            var dec = 0;
            var pow = 1;
            for( var i=0; i<bin.length; i++ ) {
                dec += pow * bin[i];
                pow *= 2;
            }
            return dec;
        }
        
        var bin = dec2bin(n);
        if( bin.length % 2 == 1 ) {
            bin.push(0);
        }
        
        for( var i=0; i<bin.length-1; i+=2 ) {
            var temp = bin[i];
            bin[i] = bin[i+1];
            bin[i+1] = temp;
        }
        
        return bin2dec(bin);
    })(n);
  }
  