// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
//
// For example, a tower with 3 floors looks like this:
//
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]


function towerBuilder(nFloors) {
  let myArr = [];
  let myCh = "*";
  let space = " ";
  let spaceCount = nFloors - 1;
  let a = 1;
  let d = 2;
  let n = 1;

  while (n <= nFloors) {
    let stars = a + d * (n - 1);
    myArr.push(space.repeat(spaceCount) + myCh.repeat(stars) + space.repeat(spaceCount));
    n++
    spaceCount--
  }
  return myArr
}