/* 
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at 
the end to hold the additional characters,and that you are given the "true" length of the string. 
(Note: If implementing in Java,please use a character array so that you can perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith" */

// utilizing JavaScript split()/join()/trim() methods
//  O(N) time complexity
const URLify = (str) => {
  return str.trim().split(" ").join("%20");
};

console.log("With JavaScript methods: ", URLify("Mr John Smith     "));

// without JavaScript built-in methods
//O(N) time complexity
const URLify2 = (str) => {
  const trim = (str) => {
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === " ") count++;
      else break;
    }
    str = str.substr(0, str.length - count);
    count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") count++;
      else break;
    }
    str = str.substr(count);
    return str;
  };

  str = trim(str);
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") newStr += str[i];
    else newStr += "%20";
  }

  return newStr;
};

console.log("Without JavaScript methods: ", URLify2("Mr John Smith     "));
