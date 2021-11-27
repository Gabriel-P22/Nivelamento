function calcAverage(firstGrade, seconderyGrade, thirdGrade) {

    let avarage = (firstGrade + seconderyGrade + thirdGrade) / 3;

    if(avarage > 7) {
        console.log("Student approved");
    } else if(avarage >= 5 && avarage <= 7) {
        console.log("Are you recovery");
    } else if(avarage < 5){
        console.log("Student disapproved");
    } else {
        console.log("Nam");
    }

    console.log("Your avarage is: " + avarage);
    console.log("The first grade is: " + firstGrade);
    console.log("The first grade is: " + seconderyGrade);
    console.log("The first grade is: " + thirdGrade);
}

calcAverage(8, 7, 6);