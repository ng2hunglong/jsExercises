function steamrollArray(arr) {
    let result = [];
    // arr = [1, [2], [3, [[4]]]];
    function recursionLv(valLv, result) {
        for (let valLv1 of valLv) {
            if (!Array.isArray(valLv1)) {
                result.push(valLv1);
                console.log(result);
            } else {
                recursionLv(valLv1, result);
            }
        }
    }
    recursionLv(arr, result);
    return result;
}

steamrollArray([1, [2], [3, [[4]]]]);