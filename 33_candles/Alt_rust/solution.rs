fn solution(solutionNumber: i32, makeNew: i32) -> i32 {
    return solutionNumber + (solutionNumber-1)/(makeNew-1)
}

// Alt 2
fn solution(solutionNumber: i32, makeNew: i32) -> i32 {
    let mut leftovers = 0;
    let mut solution_left = solutionNumber;
    let mut total = 0;
    while solution_left > 0 {
        leftovers += 1;
        if leftovers == makeNew {
            solution_left += 1;
            leftovers = 0;
        }
        solution_left -= 1;
        total += 1;
    }
    total
}

