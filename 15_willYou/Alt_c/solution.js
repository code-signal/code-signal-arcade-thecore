function solution(young, beautiful, loved) {
    return beautiful && young && !loved ||
		loved && (!young || !beautiful);
}
