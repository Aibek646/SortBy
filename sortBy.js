var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

arr1 = [5, 4, 1, 2, 3];
arr2 = [{ x: -1 }, { x: 0 }, { x: 1 }];
arr3 = [
  [3, 4],
  [5, 2],
  [10, 1],
];

const fn1 = function (x) {
  return x;
};
const fn2 = function (obj) {
  return obj.x;
};

const fn3 = function (x) {
  return x[1];
};

const res = sortBy(arr3, fn3);
console.log(res);
