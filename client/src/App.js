import React, { useEffect, useState } from 'react';
import CreateExpenseButton from './components/Expense/CreateExpense/CreateExpenseUI.js';
import PieDataChart from './components/Expense/PieDataChart';
import ExpenseList from './components/Expense/ExpenseList';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    position: 'absolute',
    height: '650px',
    bottom: 0,
    overflowY: 'auto',
  },
  button: {
    marginLeft: '50px',
    marginTop: '30px',
    fontSize: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const GlobalStyle = (createGlobalStyle)`
  position: relative;
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;


function App() {

  const [expenseLength, setExpenseLength] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getExpenses = async () => {
      const res = await axios.get('http://localhost:5000/api/expenses');
      setExpenses(res.data);
      setExpenseLength(res.data.length);
    }
    getExpenses();
  }, [expenseLength]);

  const expenseTotal = (expenses) => {
    let result = 0;
    for (let i = 0; i < expenses.length; i++) {
      result += expenses[i].cost;
    }
    return result;
  }

  const notify = () => {
    const currentExpenses = expenseTotal(expenses);
    toast.success(currentExpenses === 0 ?  
      'Someone\'s a little frugal...' : 
      '$' + currentExpenses.toLocaleString() +
      ' that could\'ve been invested into 🚀 DOGECOIN 🚀');
  }


  return (
    <>
      <GlobalStyle />

      <CreateExpenseButton expenseLength={expenseLength} setExpenseLength={setExpenseLength} />

      <Button className={classes.button} variant="contained" onClick={notify}
      color="primary">Total Amount in Expenses: <br /> 
      ${Number(expenseTotal(expenses)).toLocaleString()}</Button>

      <PieDataChart expenses={expenses} />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="left">Expense Name</TableCell>
              <TableCell align="left">Expense Cost</TableCell>
              <TableCell align="left">Expense Type</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ExpenseList expenses={expenses} expenseLength={expenseLength} setExpenseLength={setExpenseLength} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;