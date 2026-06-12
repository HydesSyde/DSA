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
    let middle = Math.floor(left + (right - left) / 2);
    if (Math.pow(middle, 2) > x) {
      right = middle - 1;
    } else if (Math.pow(middle, 2) < x) {
      left = middle + 1;
      result = middle;
    } else {
      console.log(middle);
      return true;
    }
  }

  console.log(result);
  return true;
}

sqrt(10);
