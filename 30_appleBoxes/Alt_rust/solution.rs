fn solution(k: i32) -> i32 {
    (1..(k+1)).fold(0, |acc, bx| {
        if bx % 2 == 0 { return acc + bx * bx } else { return acc - bx * bx };
    }) as i32
}

// Alt 2
fn solution(k: i32) -> i32 {

    let mut yellow_apples = 0;
    let mut red_apples = 0;
    
    for i in 1..k+1 {    
        if i % 2 == 0 {       
            yellow_apples += i*i;       
        } else {      
            red_apples += i*i;      
        }   
    }    
    yellow_apples-red_apples 
}