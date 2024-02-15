function removeSmallest(arr) {
    // If the array is empty, return an empty array
    if (arr.length === 0) {
        return [];
    }
    
    // Find the minimum value and its index
    let minValue = Math.min(...arr);
    let minIndex = arr.indexOf(minValue);
    
    // Create a new array without the element at the minimum index
    let newArr = arr.slice(0, minIndex).concat(arr.slice(minIndex + 1));
    
    return newArr;
}

// Test cases
console.log(removeSmallest([1,2,3,4,5])); // Output: [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4])); // Output: [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1])); // Output: [2,2,2,1]
