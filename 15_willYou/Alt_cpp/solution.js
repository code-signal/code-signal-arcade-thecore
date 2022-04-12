bool solution(bool young, bool beautiful, bool loved) {
    return loved ^ young & beautiful;
}

// Alt 2
bool solution(bool young, bool beautiful, bool loved) {
    return (young * beautiful != loved);
}
