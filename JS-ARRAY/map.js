const grades = [10, 9.5, 8, 7, 6]

const NewGrades = grades.map((grade) => {
    return grade + 1 >= 10 ? 10 : grade + 1
})

console.log(NewGrades)