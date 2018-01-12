//This function will check words in magazineText to see if it contains
//all of the words in noteText, multiple instances of a word in noteText
//must be matched an equal or greater time in magazineText
function harmlessRansomeNote(noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    magazineArr.forEach(function(word) {
        if (!magazineObj[word]) {
            magazineObj[word] = 0;
        }
        magazineObj[word]++;  
    });

    var noteIsPossible = true;
    noteArr.forEach(function(word) {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) {
                noteIsPossible = false;
            }
        } else {
            noteIsPossible = false;
        }
    });
    return noteIsPossible;
}
console.log(harmlessRansomeNote('this is a secret note this is', 'puerto rico is a place of great wonder and excitement it has many a secret place hidden away in this tropical paradize of note this is an opportunity that comes once in a lifetime'));
