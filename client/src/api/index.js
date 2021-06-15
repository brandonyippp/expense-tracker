import axios from 'axios';

const getURL = 'http://localhost:5000/api/expenses';
const postURL = 'http://localhost:5000/api/expenses/create';
const deleteURL = 'http://localhost:5000/api/expenses/delete';
const updateURL = 'http://localhost:5000/api/expenses/update';

export const fetchExpenses = () => axios.get(getURL);
export const createExpense = (newExpense) => axios.post(postURL, newExpense);
export const deleteExpense = (id) => axios.delete(`${deleteURL}/${id}`);
export const updateExpense = (id, updatedExpense) => axios.patch(`${updateURL}/${id}`, updatedExpense);