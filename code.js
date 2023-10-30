function returnArray(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (i !== j && array[i] + array[j] === 0) {
                return true;
            }
        }
    }
    return false;
};
// Runtime complexity: O(n^2) This is because each for loop has a complexity of O(n), therefore the total runtime complexity becomes O(n^2).
// Space complexity: The space complexity is O(n) due to the function using only one array.


function hasUniqChars(word) {
    let hasUniqChars = new Set([]);
    for(let i = 0; i < word.length; i++) {
        hasUniqChars.add(word[i]);
    }
    return hasUniqChars.size === word.length; 
};
// Runtime complexity: The time complexity for adding to a set is O(1), and the for loop complexity is O(n). Therefore the worst case time complexity is O(n).
// Space complexity: The space complexity is O(n) where n is the length of the string. 


function isPangram(str) {
    let alphabet = ['abcdefghijklmnopqrstuvwxyz'];
    for(let i = 0; i < alphabet.length; i++) {
        if(!str.includes(alphabet[i])) {
            return false;
        }
    }
    return true;
};
// Runtime complexity: The runtime complexity of the for loop is O(26), and the complexity of the includes is O(n). Therefore making the total runtime complexity O(26n), which is equal to O(n).
// Space complexity: The space complexity is O(n), where n is equal to the length of the string. 

function find_longest_word(array) { 
    let max = array[0].length; 
    for(let i = 0; i < array.length; i++) {
        if (array[i].length > max) {
            max = array[i].length;
        }
    }
    return max;
};

console.log('longest-word:', find_longest_word(['the', 'a', 'horse']));

// Runtime complexity: The runtime complexity is O(n) because it is a for loop.   
// Space complexity: The space complexity is O(n) because of the total length of all of the strings.  