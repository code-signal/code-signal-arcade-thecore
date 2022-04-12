fn solution(n: i32) -> bool {
    let s = format!("{}", n);
    s
       .trim_right_matches('0')
       .chars()
       .filter(|&e| e == '0')
       .count() > 0
}

// Alt 2
fn solution(n: i32) -> bool {
    n.to_string().chars().rev().skip_while(|&x| x == '0').any(|x| x == '0')
}

// Alt 3
fn solution(mut n: i32) -> bool {
    let mut contains_non_zero = false;
    while n > 0 {
        let x = n % 10;
        if x != 0 {
            contains_non_zero = true;
        } else if contains_non_zero {
            return true;
        }
        n /= 10;
    }
    false
}



