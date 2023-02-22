const students = ["João", "Juliana", "Ana", "Caio"];
const avarages = [10, 8, 7.5, 9];

const listOfStudentsAndAvarages = [students, avarages ];

function showGrade(student){
    if (listOfStudentsAndAvarages[0].includes(student)) {    
        // const students = listOfStudentsAndAvarages[0]
        // const avarages = listOfStudentsAndAvarages[1]

        const [students, avarages] = listOfStudentsAndAvarages

        const index = students.indexOf(student)

        const avaragesStudent = avarages[index]

        console.log(`${student} have the avarage ${avaragesStudent}.`)
    }else{
        console.log("Student are not at the system!")
    }
}

showGrade("Ana")