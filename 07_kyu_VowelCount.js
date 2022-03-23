// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.


function list(names) {
  let newList = ""
  for (let key in names) {
    for (let n in names[key]) {
      newList += names[key][n];
      if (+key === names.length - 2) {
        newList += " & ";
      } else if (+key < names.length - 1) {
        newList += ", ";
      }
    }
  }
  return newList;
}