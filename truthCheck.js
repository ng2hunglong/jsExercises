function truthCheck(collection, pre) {
    for (let obj of collection) {
        if (Boolean(obj[pre]) === false) {
            console.log(obj);
            console.log('false')
            return false;
        }
    }
    console.log('true')
    return true;
    // for( let [key, value] of Object.entries(collection)) {
    //     if ()
    // }
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");