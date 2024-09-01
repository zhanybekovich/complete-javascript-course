const weightMark = 78;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.95;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;

console.log(bmiMark);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);
