class BudgetApp {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  submitBudgetForm() {
    const value = this.budgetInput.value;
    if (value === "" || value < 0) {
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML = `<p>Value cannot be empty or negative</p>`;
      const self = this;
      // console.log(this)
      // set self to class itself

      setTimeout(function () {
        // if you this, it will go to the global (window)
        self.budgetFeedback.classList.remove('showItem');
      }, 4000)
    }
    else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = '';
      this.showBalance();
    }
  }
  // show balance
  showBalance() {
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;
    if (total < 0) {
      this.balance.classList.remove('showGreen', 'showBlack');
      this.balance.classList.add('showRed')
    } else if (total > 0) {
      this.balance.classList.remove('showRed', 'showBlack');
      this.balance.classList.add('showGreen')
    } else if (total === 0) {
      this.balance.classList.remove('showRed', 'showGreen');
      this.balance.classList.add('showBlack')
    }
  }

// submit expense form
  submitExpenseForm() {
    const expenseValue = this.expenseInput.value;
    const amountValue = this.amountInput.value;
    if (expenseValue === '' || amountValue === '' || amountValue < 0) {
      this.expenseFeedback.classList.add('showItem');
      this.expenseFeedback.innerHTML = `<>values cannot be empty or negative</p>`
      const self = this
      setTimeout(function () {
        self.expenseFeedback.classList.remove('showItem');
      }, 400);
    }
  }
  

  // total expense
  totalExpense() {
    let total = 400;
    return total
  }
}

function eventListeners() {
  const budgetForm = document.getElementById("budget-form");
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");

  // new instance of budgetApp class
  const budget = new BudgetApp();

  // budget form submit
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    budget.submitBudgetForm();
  });
  // expense form submit
  expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    budget.submitBudgetForm();
  });
  // expense click
  expenseList.addEventListener("click", function (event) {
    
  });
}
document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});