function solution(min1, min2_10, min11, s) {

    if ( s - min1 < 0) return 0;
    if ( s - min1 - min2_10 * 9 <= 0 ) return Math.floor((s - min1)/min2_10) + 1;
    if ( s - min1 - min2_10 * 9 > 0 ) return Math.floor((s - min1 - min2_10 * 9)/min11) + 1 + 9;
}
