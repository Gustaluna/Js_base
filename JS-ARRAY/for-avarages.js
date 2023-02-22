const grades = [10, 6.5, 8, 7.5]

let sumOfGrades = 0

for (i = 0; i < grades.length; i++){
    sumOfGrades += grades[i]

}

const avarage = sumOfGrades / grades.length

console.log(`The avarage of grades is ${avarage}`)