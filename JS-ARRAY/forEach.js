const grades = [10, 6.5, 8, 7.5]

let sumOfGrades = 0

grades.forEach((grade) => {
    sumOfGrades += grade
})

const avarage = sumOfGrades / grades.length

console.log(`The avarage of grades is ${avarage}`)