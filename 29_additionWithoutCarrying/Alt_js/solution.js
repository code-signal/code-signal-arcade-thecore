function additionWithoutCarrying(param1, param2) {
    param1 = String(param1);
    param2 = String(param2);
    var a = param1.length > param2.length ? param1 : param2;
    var b = param1.length > param2.length ? param2 : param1;
  
    b = ("00000" + b)
      .slice(-a.length)
      .split("")
      .map(Number);
    a = a.split("").map(Number);
  
    var c = a.map((el, i) => (el + b[i]) % 10);
    return Number(c.join(""));
  }

// Alt 2
function solution(p1,p2) {
    p1 = (p1+10**5).toString().substr(1);
    p2 = (p2+10**5).toString().substr(1);
    p3 = '';
    for(i in p1) p3 += ( +p1[i] + +p2[i] ) % 10;
    return +p3;
}  

// Alt 3
function solution(a, b) {
    let count = 0, output = 0;
    while (a > 0 && b > 0){
        output += (a + b) % 10 * 10 ** count;
        count++;
        a = Math.floor(a/10);
        b = Math.floor(b/10);
    }
    return output + (a + b) * 10 ** count;
}


// Alt 4
function solution(param1, param2) {
    if (param1 == 0 || param2 == 0) {return param1+param2}
    return solution(Math.floor(param1/10),Math.floor(param2/10))*10 + (param1+param2)%10}

// Alt 5
function solution(a, b) {
    r=0;
    p=1
    while(a>0 ||b>0){
        
        r+=((a%10 +b%10)%10)*p
        a= parseInt(a/10)
        b= parseInt(b/10)
        p*=10
    }
    return r
}

// Alt 6
const solution = (p1, p2) => {
    const a = String(p1).padStart(5, 0);
    const b = String(p2).padStart(5, 0);
    
    return +a.replace(/./g, (e, i) => (+e + +b[i]) % 10);
}

// Alt 7
const solution = (a, b) =>
  +[...`${a}`.padStart(5)].map((val, idx) => (+val + +`${b}`.padStart(5)[idx]) % 10).join(``);

// Alt 8
function solution(p1, p2) {
    var arr = [Math.min(p1, p2), Math.max(p1,p2)];
    p1 = [...String(arr[0])].reverse().map(x => Number(x));
    p2 = [...String(arr[1])].reverse().map(x => Number(x));
    var result = p1.map((x, i) => Number(String(x + p2[i]).slice(-1))).concat(p2.slice(p1.length)).reverse();
    return Number(result.join(""));
} 