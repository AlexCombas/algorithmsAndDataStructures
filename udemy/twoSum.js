function twoSum(numArray, sum) {
    var pairs = [];
    var hashTable = [];

    for (var i = 0; i < numArray.length; i++) {
        var currNum = numArray[i];
        var counterPart = sum - currNum;
        if (hashTable.indexOf(counterPart) !== -1) {
            pairs.push([ currNum, counterPart ]);
        }
    hashTable.push(currNum); 
    }
    return pairs;
}   
var foo = [2, 6, 4, 17, -54, 5, 0,  5, 8, 3, 1, 7, 4, 0]
console.log(twoSum(foo, 8));
