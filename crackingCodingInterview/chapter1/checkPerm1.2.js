// 1.2 Given two strings,write a method to decide if one is a permutation of the other.

// Attempt
// ex. ('abc', 'bca') => true  ('aa', 'ab') => false ('abce', 'bcad') => false
const checkPermute = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  function countChars(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      obj[char] = (obj[char] || 0) + 1;
    }
    return obj;
  }

  const obj1 = countChars(str1),
    obj2 = countChars(str2);
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};



// Tests
console.log(checkPermute('aba', 'aab'), true);

console.log(checkPermute('aba', 'aaba'), false);

console.log(checkPermute('aba', 'aa'), false);