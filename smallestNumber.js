function smallestCommons(arr) {
    arr.sort((a, b) => a > b);
    let range = [];
    for (let i = arr[0]; i <= arr[arr.length-1]; i++) {
        range.push(i);
    }
    let result = range[range.length-1];
    let i = range.length - 2;
    while (i >= 0) {
        if (result % range[i] != 0) {
            result += range[range.length-1];
            i = range.length - 2;
        } else {
            i--;
        }
    }
    console.log(result);
    return result;
}

smallestCommons([1,5]);