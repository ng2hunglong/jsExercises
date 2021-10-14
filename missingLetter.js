function fearNotLetter(str) {
    let arr = str.split('')
    let fullStr = 'abcdefghijklmnopqrstuvwxyz';
    let fullArr = fullStr.split('');
    let subArr = fullArr.slice(fullArr.indexOf(arr[0]), fullArr.indexOf(arr[arr.length-1]) + 1);
    // console.log(subArr);
    // console.log(arr[arr.length-1])
    // let regex = new RegExp(`${str[0]}-${str[str.length-1]}`);
    // console.log(regex);

    let missingChar = subArr.filter(char => {return !arr.includes(char)});
    console.log(missingChar.join('') || undefined)
    return missingChar.join('') || undefined;
  }
  
fearNotLetter("abcdefghijklmnopqrstuvwxyz");