// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. 


// Attempt
function allUniqueChar(str){
    const obj = {};

    for (let i = 0; i < str.length; i++){
        if (!obj[str[i]]) obj[str[i]] = true
        else return false
    }
    return true
}


/* TESTS */
console.log(allUniqueChar('abcd'), 'true');
console.log(allUniqueChar('abccd'), 'false');
console.log(allUniqueChar('bhjjb'), 'false');
console.log(allUniqueChar('mdjq'), 'true');