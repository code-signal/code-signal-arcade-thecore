function solution(n) {
    let result = 0;
    let str = String(Math.floor(n/60)) + n%60
    console.log(str)
     for (let i = 0; i < str.length; i++){
       result += Number(str[i]);
     }
     return result;
}
