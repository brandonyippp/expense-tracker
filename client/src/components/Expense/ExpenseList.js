import React from 'react';
import Expense from './Expense.js';


const Expenses = ({ expenses, expenseLength, setExpenseLength }) => {
    return (
        expenses.map(currentExpense => 
            <Expense key={JSON.stringify(currentExpense)} expense={currentExpense}
                expenseLength={expenseLength} setExpenseLength={setExpenseLength} />)
    )
}

export default Expenses