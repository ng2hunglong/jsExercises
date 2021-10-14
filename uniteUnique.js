function uniteUnique(arr) {
  let arg = Object.values(arguments);
//   console.log(arg);
  let result = [];
  for (let subArr of arg) {
    // console.log(subArr);
    for (let item of subArr) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
  }
  console.log(result);
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);