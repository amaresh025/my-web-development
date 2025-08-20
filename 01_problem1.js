let score = Number(prompt("Enter Your Score (1-100)"));
let grade;
if (score >= 90 && score <= 100) {
    grade = "'A' Pass";
} else if (score >= 80 && score <= 89) {
    grade = "'B' Pass";
} else if (score >= 70 && score <= 79) {
    grade = "'C' Pass";
} else if (score >= 60 && score <= 69) {
    grade = "'D' Pass";
} else if (score >= 50 && score <= 59) {
    grade = "'F' Pass";
} else {
    grade = "Fail";
}
console.log("According to your grade you are", grade)