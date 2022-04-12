fn solution(a: i32, b: i32) -> i32 {
    let h = a as f64 / 2.0 / std::f64::consts::SQRT_2;
    let w = b as f64 / 2.0 / std::f64::consts::SQRT_2;
    let big = (h as i32 * 2 + 1) * (w as i32 * 2 + 1);
    let small = (h + 0.5) as i32 * 2 * (w + 0.5) as i32 * 2;
    big + small
}