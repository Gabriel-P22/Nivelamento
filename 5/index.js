class Student  {
    construct(name, firstGrade, seconderyGrade, thirdGrade) {
        this.name = name;
        this.firstGrade = firstGrade;
        this.seconderyGrade = seconderyGrade;
        this.thirdGrade = thirdGrade;
    }
}

function calcAverage(firstGrade, seconderyGrade, thirdGrade) {
    let avarage = eval(`${firstGrade} + ${seconderyGrade} + ${thirdGrade}`) / 3;
    console.log(avarage)
    return avarage;
}

let ListStudents = [];

let qtda = 0;

qtda = prompt("Enter the number of students");

console.log(qtda);

for(let i = 0; i < qtda; i++) {
    let student = new Student();
    student.name = prompt(`Enter the number of student ${i + 1}`);
    student.firstGrade = prompt("Enter the first note");
    student.seconderyGrade = prompt("Enter the second note");
    student.thirdGrade = prompt("enter the third note");
    ListStudents.push(student);
}

console.log(`list of students ${ListStudents}`);

ListStudents.forEach((item) => {
    let media = calcAverage(item.firstGrade, item.seconderyGrade, item.thirdGrade);
    console.log(`${item.name}: the average is ${media.toFixed(2)}`);
});
