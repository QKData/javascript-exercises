const removeFromArray = function(arr, ...elementsToRemove) {
    return arr.filter(item => !elementsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
