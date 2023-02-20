const students = ["João", "Juliana", "Ana", "Caio"];
const avarages = [10, 8, 7.5, 9];

const listOfStudentsAndAvarages = [students, avarages ];

function showGrade(student){
    if (listOfStudentsAndAvarages[0].includes(student)) {    
        const index = listOfStudentsAndAvarages[0].indexOf(student)

        const avaragesStudent = listOfStudentsAndAvarages[1][index]

        console.log(`${student} have the avarage ${avaragesStudent}.`)
    }else{
        console.log("Student are not at the system!")
    }
}

showGrade("Ana")