/*
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true

Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

Example 2:

Input: s = "tab a cat"

Output: false

Explanation: "tabacat" is not a palindrome.

Constraints:

    1 <= s.length <= 1000
    s is made up of only printable ASCII characters.
*/

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // left pointer at the start of string
        let l = 0;
        // Right pointer pointing to the final index of string.
        let r = s.length - 1;
        // make sure string is all lower case
        const lowerCase = s.toLowerCase();

        // will loop until l == r
        while (l < r) {
            // while it is not alphanumeric then increment pointer to move to next character.
            // also added check to make sure pointer does not go out of bound or past right pointer.
            while (l < r && !this.alphaNum(lowerCase[l])) {
                l++;
            }
            while (r > l && !this.alphaNum(lowerCase[r])) {
                r--;
            }
            // if left pointer is not equal to right pointer then string is not palindrome.
            if (lowerCase[l] != lowerCase[r]) {
                return false;
            }
            // update pointers to compare next positions.
            l++;
            r--;
        }
        // if the loop stops that means we have a palindrome!
        return true;
    }

    // Method to check if character is alphanumeric.
    alphaNum(c) {
        return (c >= 'A' && c <= 'Z' || 
                c >= 'a' && c <= 'z' || 
                c >= '0' && c <= '9');
    }
}

// Time complexity: O(n)
// Space complexity: O(1)
