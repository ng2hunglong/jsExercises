function convertToRoman(num) {
    let romanNum = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    let decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let result = '';

    for (let i = 12; i >=0;) {
        if (num >= decimal[i]) {
            result += romanNum[i];
            num -= decimal[i];
        } else {
            i--;
        }
    }
    return result;
}