function rot13(str) {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let arr = str.split("");
    for (let i in arr) {
        if (alphabet.includes(arr[i])) {
            if (alphabet.indexOf(arr[i]) + 13 > alphabet.length - 1) {
                let newIndex = alphabet.indexOf(arr[i]) + 13 - alphabet.length;
                arr[i] = alphabet[newIndex];
            } else {
                arr[i] = alphabet[alphabet.indexOf(arr[i]) + 13];
            }
        }
    }
    return arr.join('');
}

rot13("SERR PBQR PNZC");