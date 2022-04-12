function arithmeticExpression(a, b, c) {
	var ops = [
		(d, e) => d + e,
		(d, e) => d - e,
		(d, e) => d * e,
		(d, e) => d / e
	];
	return ops.some(f => f(a, b) === c);
}


// Alt 2
function solution(a, b, c) {
    return [a + b, a - b, a * b, a / b].includes(c);
  }