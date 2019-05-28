function isPalindrome(str) {
  //your code here
  const casedStr = str.toLowerCase();
  const spacedCasedStr = casedStr.split(' ').join('');
  if (spacedCasedStr.length <= 1) {
    return true;
  } else if (
    spacedCasedStr.length > 1 &&
    spacedCasedStr[0] !== spacedCasedStr[spacedCasedStr.length - 1]
  ) {
    return false;
  } else {
    return isPalindrome(spacedCasedStr.slice(1, -1));
  }
}
