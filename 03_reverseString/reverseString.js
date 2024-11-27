const reverseString = function(str) {
    newStr = str.split("");
    revStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revStr = revStr.concat(newStr[i]);
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
