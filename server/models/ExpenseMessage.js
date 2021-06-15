import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema({
    name: String,
    cost: Number,
    category: String,
    date: String
})

const ExpenseMessage = mongoose.model('ExpenseMessage', expenseSchema);

export default ExpenseMessage;