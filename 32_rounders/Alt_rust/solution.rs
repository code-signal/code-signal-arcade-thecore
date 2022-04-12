fn solution(mut n: i32) -> i32 {
    let mut exp = 1;
    while n > 10 {
        if n % 10 < 5 {
            n /= 10;
        } else {
            n /= 10;
            n += 1;
        }
        exp *= 10;
    }
    n * exp
}
