// Closure - function with preserved data

let score = function() {
  let points = 0;

  return function() {

    points++;
    return points; 
  }
}();

