// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N. Write a method that takes the
// array as an argument and returns this "outlier" N.


function findOutlier(integers) {
  let eCount = 0;
  let oCount = 0;
  let e = 0;
  let o = 0;

  for (let i in integers) {
    if (integers[i] % 2 === 0) {
      eCount += 1;
      e = integers[i];
    }
    if (integers[i] % 2 !== 0) {
      oCount += 1;
      o = integers[i];
    }
    if (eCount > 1 && oCount === 1) {
      break
    }
    if (oCount > 1 && eCount === 1) {
      break
    }
  }
  return (eCount < oCount ? e : o)
}