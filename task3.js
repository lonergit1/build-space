const english = 78;
const mathematics = 85;
const javascript = 92;
const design = 70;
const totalScore = english + mathematics + javascript + design;
const averageScore = totalScore / 4;

function calculateGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 90) {
    return "B";
  } else if (score >= 70 && score <= 80) {
    return "C";
  } else if (score >= 60 && score <= 70) {
    return "D";
  } else if (score >= 0 && score <= 60) {
    return "F";
  } else {
    return "Invalid Score";
  }
}

console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore}`);

console.log(`Grade: ${calculateGrade(averageScore)}`);
console.log("Boundary Tests:");

console.log(`59: ${calculateGrade(59)}`);
console.log(`60: ${calculateGrade(60)}`);
console.log(`69: ${calculateGrade(69)}`);
console.log(`70: ${calculateGrade(70)}`);
console.log(`79: ${calculateGrade(79)}`);
console.log(`80: ${calculateGrade(80)}`);
console.log(`89: ${calculateGrade(89)}`);
console.log(`90: ${calculateGrade(90)}`);

