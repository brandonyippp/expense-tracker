import React from 'react';
import { deleteExpense } from '../../actions/expenses';
import { useDispatch } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';


const Expense = ({ expense, expenseLength, setExpenseLength }) => {
    
    const dispatch = useDispatch();

    const deleteSelectedExpense = () => {
        dispatch(deleteExpense(expense._id));
        setExpenseLength(expenseLength - 1);
    }

    
    return (
        <TableRow key={expense.name}>

            <TableCell component="th" scope="row">{expense.date}</TableCell>
            <TableCell align="left">{expense.name}</TableCell>
            <TableCell align="left">${expense.cost.toLocaleString()}</TableCell>
            <TableCell align="left">{expense.category}</TableCell>

            <TableCell align="left">
                <DeleteIcon onClick={() => deleteSelectedExpense()} />
            </TableCell>

        </TableRow>
    )
}

export default Expense