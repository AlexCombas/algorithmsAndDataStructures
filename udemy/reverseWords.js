function reverseWords(words){
    var splitWords = words.split(' ');
    var revWords = [];
    splitWords.forEach(function(word) {
        var newWord = [];
        for (var i = word.length; i > 0; i--) {
            newWord.push(word[i-1]);
        }
        newWord = newWord.join('');
        revWords.push(newWord);
    });
    return revWords.join(' ');
}
console.log(reverseWords('Hello there Mr. Alex!'));
