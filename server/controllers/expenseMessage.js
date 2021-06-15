import ExpenseMessage from '../models/ExpenseMessage.js';
import mongoose from 'mongoose';

export const postExpense = async (req, res) => {
    const body = req.body;
    const newExpensePost = new ExpenseMessage(body);

    try {
        await newExpensePost.save();

        res.status(201).json(newExpensePost);
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteExpense = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No expense with that id');
    }

    await ExpenseMessage.findByIdAndRemove(id);

    res.json({ message: 'Expense deleted successfully!' });
}

export const updateExpense = async (req, res) => {
    const { id: _id } = req.params;
    const expense = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No expense with that id');
    }
    
    const updatedExpense = await ExpenseMessage.findByIdAndUpdate(_id, expense, { new: true });

    res.json(updatedExpense);
}

export const getExpenses = async (req, res) => {
    try {
        const expenseMessages = await ExpenseMessage.find();

        res.status(200).json(expenseMessages);
    } catch(error) {
        res.status(404).json( { message: error.message });
    }
}