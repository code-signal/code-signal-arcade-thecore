bool solution(int A, int B, int C) {
    return A + B == C || A - B == C || A * B == C || B * C == A;
}
