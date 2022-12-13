const str = 'racecaR';
/**
 * first approach - naive approach using built in functions.
 * time efficiency of O(n) + O(n) + O(n) which is approx O(n)
 * where n is the length of the string
 * easy to understand 
 * 
 * if empty string returns false
 * single alphabet is a palindrome of itself
 * case insensitive
 **/

function palindrome1(str){
  //handling empty string
  if(!str.trim())
    return false
  return (str.toLowerCase().split('').reverse().join('') === str.toLowerCase());
}

console.log(palindrome1('racecar'));


/**
 * 2nd approach - Half-indexing (len/2) efficient with longer strings
 * Check the end from each part and divide the number of iterations inside the for loop by two.
 * 
 * */

function isPalindrome(str) {
  //handling empty string
  if(!str.trim())
    return false;

 let re = /[^A-Za-z0-9]/g; 
 str = str.toLowerCase().replace(re, '');

 //Create the FOR loop
 let len = str.length; // va
 
 for (let i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
       return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
   }
 }
 return true; // Both parts are strictly equal, it returns true => The string is a palindrome
}

console.log(isPalindrome("A man a plan a canal Panama"));
