const food = 5000;
const transport = 3000;
const internet = 7000;
const entertainment = 4000;
const invome = 100000;
function calculateExpenses(invome, food, transport, internet, entertainment) {
  const expenses = [food, transport, internet, entertainment];
  const totalExpenses = food + transport + internet + entertainment;
  const averageExpense = totalExpenses / expenses.length;
  const highestExpense = Math.max(...expenses);
  const remainingMoney = invome - totalExpenses;

  console.log(`Total expenses: ₦${totalExpenses}`);
  console.log(`Average expense: ₦${averageExpense}`);
  console.log(`Highest expense: ₦${highestExpense}`);
  console.log(`Remaining money: ₦${remainingMoney}`);
}
calculateExpenses(invome, food, transport, internet, entertainment);
