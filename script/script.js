let balance = 0;
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const incomeInput = document.getElementById("input-income");
    const incomeInputText = incomeInput.value;

    const foodInput = document.getElementById("input-food");
    const foodInputText = foodInput.value;

    const rentInput = document.getElementById("input-rent");
    const rentInputText = rentInput.value;

    const clothesInput = document.getElementById("input-clothes");
    const clothesInputText = clothesInput.value;

    if(!(validation.isNumber(incomeInputText)) || !(validation.isNumber(foodInputText)) || !(validation.isNumber(rentInputText)) || !(validation.isNumber(clothesInputText))){

     alert("Only Numbers are ALLOWED");
    }else{
    
   
    const getIncomeValue = parseFloat(incomeInputText);

    
    const getValue = parseFloat(foodInputText);

   
    const getValue2 = parseFloat(rentInputText);

   
    const getValue3 = parseFloat(clothesInputText);

    const inputTotal = document.getElementById("total-expenses");
    var total = getValue + getValue2 + getValue3;
    if (total < incomeInputText) {
      inputTotal.innerText = parseFloat(total);
      const totalExpenses = inputTotal.innerText;
      const balanceAfterExpenses = document.getElementById("balance");
      balance = substract(getIncomeValue, totalExpenses);
      balanceAfterExpenses.innerText = parseFloat(balance);


      foodInput.value = "";
      rentInput.value = "";
      clothesInput.value = "";
    }
    else {
      error_message.innerText = "Expense is much more than income !";
      incomeInput.value = "";
      foodInput.value = "";
      rentInput.value = "";
      clothesInput.value = "";
    }

  }

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
  if (saving_amount < balance) {
    savingAmount.innerText = parseFloat(saving_amount);

    const remainningAmount = document.getElementById("remaining-amount");
    remainningAmount.innerText = parseFloat(substract(balance, saving_amount));
  }
  else {
    error_message2.innerText = "Saving amount is larger than balance!";
  }
});
function substract(first_amount, second_amount) {
  var amount = first_amount - second_amount;
  return amount;
}

var validation = {

  isNumber:function(str) {
      var pattern = /^\d+$/;
      return pattern.test(str);  // returns a boolean
  }
};   

