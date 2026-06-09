//Bruteforce method
function sqrt(x) {
  if (x < 0) {
    console.log(NaN);
    return false;
  }
  if (x === 0 || x === 1) console.log(x);
  let left = 1;
  let right = x;
  let result = 0;

  while (left <= right) {
    let m = Math.floor(left + (right - left) / 2);
    if (Math.pow(m, 2) > x) {
      right = m - 1;
    } else if (Math.pow(m, 2) < x) {
      left = m + 1;
      result = m;
    } else {
      console.log(m);
      return true;
    }
  }

  console.log(result);
  return true;
}

sqrt(10);
