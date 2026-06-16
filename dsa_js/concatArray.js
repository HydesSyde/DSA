//using js concat
function concat(arr) {
  let ans = arr.concat(arr);
  console.log(ans);
}

concat([1, 2, 3]);

////using spread operator
function concat(arr) {
  let ans = [...arr, ...arr];
  console.log(ans);
}

concat([1, 2, 3]);

//looping twice
function concat(arr) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i]);
  }

  console.log(ans);
}

concat([1, 2, 1]);
