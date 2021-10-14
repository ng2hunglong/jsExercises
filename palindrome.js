function palindrome(str) {
  let regex = /\W|\_/g;
  str = str.replace(regex, '').toLowerCase();
  for (let i = 0; i < Math.floor(str.length/2); i++) {
    if (str[i] != str[str.length-i-1]) {
        return false;
    }
  }
  return true;
}



palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
