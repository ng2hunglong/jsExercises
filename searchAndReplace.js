function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase()) {
      console.log('here')
    let modAfter = after.split('');
    modAfter[0] = modAfter[0].toUpperCase();
    after = modAfter.join('');
  } else {
      let modAfter = after.split('');
      modAfter[0] = modAfter[0].toLowerCase();
      after = modAfter.join('');
  }
  console.log(before);
  console.log(after);
  str = str.replace(before, after);
  console.log(str);
  return str;
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")