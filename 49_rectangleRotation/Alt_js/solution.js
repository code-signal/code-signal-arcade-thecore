function rectangleRotation(a, b) {
    var ld = (a / Math.sqrt(2)) / 2;
    var sd = (b / Math.sqrt(2)) / 2;
    var rectExt = [2 * Math.floor(ld) + 1, 2 * Math.floor(sd) + 1]
    var rectInt = [2 * Math.floor(ld) + (ld % 1 < 0.5 ? 0 : 2), 2 * Math.floor(sd) + (sd % 1 < 0.5 ? 0 : 2)]
    return rectExt[0] * rectExt[1] + rectInt[0] * rectInt[1]
  }

// Alt 2
function solution(a, b) {
    var pointsA = Math.floor(Math.sqrt(a * a / 2)),
        pointsB = Math.floor(Math.sqrt(b * b / 2));
    return (pointsA * pointsB + Math.floor((pointsA + pointsB) / 2)) * 2 + 1;
}

//  Alt 3
const solution = (a, b) =>
  (fn => (fn(a) * fn(b) + (fn(a) + fn(b)) / 2 ^ 0) * 2 + 1)
  (val => val / Math.SQRT2 ^ 0);

//  Alt 4
function solution(a, b) {
    var CORDS = cords(a, b)
    console.log(CORDS)
  
    var count = 0;
    for (var x = -60; x < 60; x++) {
      for (var y = -60; y < 60; y++) {
        (pointInRectangle({ x: x, y: y }, CORDS)) ? count++ : 0
      }
    }
    return count
  }
  
  function pointInRectangle(m, r) {
    var AB = vector(r.A, r.B);
    var AM = vector(r.A, m);
    var BC = vector(r.B, r.C);
    var BM = vector(r.B, m);
    var dotABAM = dot(AB, AM);
    var dotABAB = dot(AB, AB);
    var dotBCBM = dot(BC, BM);
    var dotBCBC = dot(BC, BC);
    return 0 <= dotABAM && dotABAM <= dotABAB && 0 <= dotBCBM && dotBCBM <= dotBCBC;
  }
  
  function vector(p1, p2) {
    return {
      x: (p2.x - p1.x),
      y: (p2.y - p1.y)
    };
  }
  
  function dot(u, v) {
    return u.x * v.x + u.y * v.y;
  }
  
  function cords(a, b) {
    var angle = 45
    var A = rotate(a / 2, b / 2, angle); // top right
    var B = rotate(a / 2, b / 2 * -1, angle); // bottom right 
    var C = rotate(a / 2 * -1, b / 2 * -1, angle); // bottom left
    var D = rotate(a / 2 * -1, b / 2, angle); // top left
  
    return { A, B, C, D }
  }
  
  function degrees_to_radians(degrees) {
    return degrees * (Math.PI / 180);
  }
  
  function rotate(x, y, angle) {
    var a = degrees_to_radians(angle)
    X = x * Math.cos(a) - y * Math.sin(a)
    Y = x * Math.sin(a) + y * Math.cos(a)
    return { x: round(X), y: round(Y) }
  }
  
  function round(n) {
    return Math.round(n * 100) / 100
  }
  
