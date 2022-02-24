function reverse(str) {
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr = str[i] + reversedStr;
  }
  return reversedStr;
}

function palindrome(str) {
  str = str.toLowerCase(); //makes function case-insensitive
  if (str === reverse(str)) {
    return true;
  }

  return false;
}

function anagrams1(str1, str2) {
  //Using RegEx, this sanitizes the string of whites spaces and special characters
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[\W_]+/g, "");
  if (str1.length !== str2.length) {
    return false;
  }

  const str1CharCount = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    str1CharCount[char1] = str1CharCount[char1] + 1 || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const char2 = str2[i];

    if (!str1CharCount[char2]) {
      return false;
    } else {
      str1CharCount[char2]--;
    }
  }

  return true;
}

function anagrams2(str1, str2) {
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[\W_]+/g, "");

  const str1Sorted = str1.split("").sort().join("");
  const str2Sorted = str2.split("").sort().join("");

  return str1Sorted === str2Sorted;
}

//console.log(palindrome("Wow"));
console.log(anagrams1("Wow%  ", "wow"));
console.log(anagrams2("Wow%  ", "wow"));
