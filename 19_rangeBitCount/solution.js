function solution(a, b) {
    var packed = "";
    while(a <= b){
        packed += a.toString(2);
        a++;
    }
    return packed.split('1').length-1;
}


