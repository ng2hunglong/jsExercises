function telephoneCheck(str) {
    let regex = /^(((\d{3})|(\(\d{3}\)))([\s\-]?)\b(\d{3})([\s\-]?)\b(\d{4}))|\d{10}/
    let regex2 = /^1\s?((\d{3})|(\(\d{3}\)))([\s\-]?)\b(\d{3})([\s\-]?)\b(\d{4})/
    console.log(str)
    if (regex.test(str)) {
        console.log('true1');
        return true;
    }
    if (regex2.test(str)) {
        console.log('true2');
        return true;
    }
    console.log(false);
    return false;
}

// telephoneCheck("555-555-5555");
// telephoneCheck("555-555-5555");
// telephoneCheck("5555555555")
// telephoneCheck("1 (555) 555-5555")
// telephoneCheck("(555)555-5555") 
// telephoneCheck("(275)76227382")
telephoneCheck("5555555555")