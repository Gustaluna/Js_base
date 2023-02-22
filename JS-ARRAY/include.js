const students = ["João", "Juliana", "Ana", "Caio"];
const average = [10, 8, 7.5, 9];

const listOfStudentsAndAvarages = [students, average ];

function showGrade(student){
    if (listOfStudentsAndAvarages[0].includes(student)) {    
        // const students = listOfStudentsAndAvarages[0]
        // const average = listOfStudentsAndAvarages[1]

        const [students, average] = listOfStudentsAndAvarages

        const index = students.indexOf(student)

        const averagesStudent = average[index]

        console.log(`${student} have the avarage ${averagesStudent}.`)
    }else{
        console.log("Student are not at the system!")
    }
}

showGrade("Ana")