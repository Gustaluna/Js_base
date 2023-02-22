const JSClass = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const JavaClass = [6, 5, 8, 9, 5, 6];
const PythonClass = [7, 3.5, 8, 9.5];

function calculateGrades(gradesOfClass) {
    const sumOfGrades = gradesOfClass.reduce((acc, grade)=> acc + grade, 0)

    const average = sumOfGrades / gradesOfClass.length

    return average
}

console.log(`The avarage of the JavaScript is${calculateGrades(JSClass)}`)
console.log(`The avarage of the JavaScript is${calculateGrades(JavaClass)}`)
console.log(`The avarage of the JavaScript is${calculateGrades(PythonClass)}`)