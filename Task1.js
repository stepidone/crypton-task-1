function getStatistics(marks) {
    var avgMark = 0;
    var highestMark = 0;
    var highestMarkName;
    var lowestMark = 5;
    var lowestMarkName;
    for (var i = 0; i < marks.length; i++) {
        avgMark += marks[i].avgMark;
        if (highestMark < marks[i].avgMark) {
            highestMark = marks[i].avgMark;
            highestMarkName = marks[i].name;
        }
        if (lowestMark > marks[i].avgMark) {
            lowestMark = marks[i].avgMark;
            lowestMarkName = marks[i].name;
        }
    }
    avgMark /= marks.length;
    return {
        avgMark: avgMark,
        highestMark: highestMarkName,
        lowestMark: lowestMarkName
    };
}
var testMarks = [{
        name: 'Vasya',
        avgMark: 3.75
    }, {
        name: 'Lena',
        avgMark: 4.89
    }];
console.log(getStatistics(testMarks));
