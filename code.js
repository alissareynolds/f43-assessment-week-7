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

function hasUniqChars(word) {
    let hasUniqChars = new Set([]);
    for(let i = 0; i < word.length; i++) {
        hasUniqChars.add(word[i]);
    }
    return hasUniqChars.size === word.length; 
}

// Runtime complexity: The worst case for adding to a set is O(n), but is usually on average O(1). The for loop is O(n), so runtime complexity would be O(n^2), but usually O(n).

function isPangram(string) {
    let result = string.split(', ')
    for(let i = 0; i < string.length; i++) {
        if(string) {
            
        }
    }
}