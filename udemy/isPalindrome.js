function isPalindrome(string) {
    var oldArray = string.split('');
    var validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newArray = []
    string = string.toLowerCase();

    oldArray.forEach(function(char) {
        if (validChars.indexOf(char) > -1) {
            newArray.push(char);
        }
    });

    if (newArray.join('') === newArray.reverse().join('')) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("Race car"));
