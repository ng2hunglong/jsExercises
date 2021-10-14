function translatePigLatin(str) {
    let startWithVowelRegex = /^[aeiou]/g
    let isStartWithVowel = startWithVowelRegex.test(str);
    if (isStartWithVowel) {
        return str + 'way';
    }
    
    let vowelRegex = /[aeiou]/g
    let hasNoVowelRegex = !vowelRegex.test(str);
    if (hasNoVowelRegex) {
        return str + 'ay';
    }

    let regex = /^([^aeiou]+)([aeiou])(.*)/g;
    let result = str.replace(regex, '$2$3$1') + 'ay';
    return result;
}
  
translatePigLatin("consonant");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");
translatePigLatin("rhythm");