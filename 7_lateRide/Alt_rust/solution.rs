fn solution(n: i32) -> i32 {
    let hrs = n/60;
    let mins = n%60;
    hrs/10 + hrs%10 + mins/10 + mins%10
}
