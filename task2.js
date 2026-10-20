const firstNumber = 20;
const secondNumber = 0;
let add = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let multiply = firstNumber * secondNumber;
if (secondNumber === 0) {
  console.log("20 ÷ 6 = Cannot be divided by 0.");
  console.log("20 % 6 = Cannot calculate remainder with 0.");
} else {
  let divide = firstNumber / secondNumber;
  console.log(`20 ÷ 6 = ${divide}`);
  let remainder = firstNumber % secondNumber;
  console.log(`20 % 6 = ${remainder}`);
}
console.log(
  `20 + 6 = ${add},
20 - 6 = ${sub},
20 x 6 = ${multiply}`,
);
