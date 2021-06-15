import axios from 'axios';
import { getURL, postURL, deleteURL, updateURL } from '../constants/RequestEndpoints';

export const fetchExpenses = () => axios.get(getURL);
export const createExpense = (newExpense) => axios.post(postURL, newExpense);
export const deleteExpense = (id) => axios.delete(`${deleteURL}/${id}`);
export const updateExpense = (id, updatedExpense) => axios.patch(`${updateURL}/${id}`, updatedExpense);
