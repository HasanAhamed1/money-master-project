let balance = 0;
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const incomeInput = document.getElementById("input-income");
    const incomeInputText = incomeInput.value;
    const getIncomeValue = parseFloat(incomeInputText);

    const foodInput = document.getElementById("input-food");
    const foodInputText = foodInput.value;
    const getValue = parseFloat(foodInputText);

    const rentInput = document.getElementById("input-rent");
    const rentInputText = rentInput.value;
    const getValue2 = parseFloat(rentInputText);

    const clothesInput = document.getElementById("input-clothes");
    const clothesInputText = clothesInput.value;
    const getValue3 = parseFloat(clothesInputText);

    const inputTotal = document.getElementById("total-expenses");
    inputTotal.innerText = parseFloat(getValue + getValue2 + getValue3);
    const totalExpenses = inputTotal.innerText;

    const balanceAfterExpenses = document.getElementById("balance");
    balance = getIncomeValue - totalExpenses;
    balanceAfterExpenses.innerText = parseFloat(balance);

    foodInput.value = "";
    rentInput.value = "";
    clothesInput.value = "";
  });

document.getElementById("save-button").addEventListener("click", function () {
  const incomeInput = document.getElementById("input-income");
  const incomeInputText = incomeInput.value;
  const getIncomeValue = parseFloat(incomeInputText);

  const saveInput = document.getElementById("input-save");
  const saveInputText = saveInput.value;
  const getsavingValue = parseFloat(saveInputText);

  const savingAmount = document.getElementById("saving-amount");
  var saving_amount = getIncomeValue * ((getsavingValue * 1) / 100);
  savingAmount.innerText = parseFloat(saving_amount);

  const remainningAmount =  document.getElementById("remaining-amount");
  remainningAmount.innerText = parseFloat(balance - saving_amount);
  // foodInput.value = '';
  // rentInput.value = '';
  // clothesInput.value = '';
});
