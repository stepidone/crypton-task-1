interface Student{
    name: string
    avgMark: number
}

interface Statistics{
    avgMark: number
    highestMark: string
    lowestMark: string
}

function getStatistics(marks: Student[]):Statistics{
    let avgMark = 0
    let highestMark = 0
    let highestMarkName
    let lowestMark = 5
    let lowestMarkName
    for (let i = 0; i < marks.length; i++) {
        avgMark += marks[i].avgMark;
        if (highestMark < marks[i].avgMark) {
            highestMark = marks[i].avgMark
            highestMarkName = marks[i].name
        }
        if (lowestMark > marks[i].avgMark) {
            lowestMark = marks[i].avgMark
            lowestMarkName = marks[i].name
        }
    }
    avgMark /= marks.length
    
    return{
        avgMark: avgMark,
        highestMark: highestMarkName,
        lowestMark: lowestMarkName
    }
}

const testMarks = [{
    name: 'Vasya',
    avgMark: 3.75
},{
    name: 'Lena',
    avgMark: 4.89
}]

console.log(getStatistics(testMarks))