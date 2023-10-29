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
// Runtime complexity: O(n^2)
// Space complexity: 


function hasUniqChars(word) {
    let hasUniqChars = new Set([]);
    for(let i = 0; i < word.length; i++) {
        hasUniqChars.add(word[i]);
    }
    return hasUniqChars.size === word.length; 
};
// Runtime complexity: The worst case for adding to a set is O(n), but is usually on average O(1). The for loop is O(n), so runtime complexity would be O(n^2), but usually O(n).
// Space complexity: 


function isPangram(str) {
    let alphabet = ['abcdefghijklmnopqrstuvwxyz'];
    for(let i = 0; i < alphabet.length; i++) {
        if(!str.includes(alphabet[i])) {
            return false;
        }
    }
    return true;
};
// Runtime complexity: O(n^2).  The for loop has a runtime complexity of O(n), and the includes is the loop in itself that also has a runtime complexity of O(n), which makes the total runtime complexity O(n^2).
// Space complexity: 

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

// Runtime complexity: O(n)   
// Space complexity: 