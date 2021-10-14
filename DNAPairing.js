function pairElement(str) {
  let pairObj = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  };
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let pair = [str[i], pairObj[str[i]]];
    console.log(pair);
    result.push(pair);
  }
  console.log(result);
  return result;
}

pairElement("ATCGA")