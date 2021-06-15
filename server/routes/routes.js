import { postExpense, deleteExpense, updateExpense, getExpenses } from '../controllers/expenseMessage.js';
import express from 'express';

const router = express.Router();

router.get('/api/expenses', getExpenses);
router.post('/api/expenses/create', postExpense);
router.patch('/api/expenses/update/:id', updateExpense);
router.delete('/api/expenses/delete/:id', deleteExpense);

export default router;