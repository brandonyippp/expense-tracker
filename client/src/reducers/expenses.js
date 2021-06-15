export default (expenses = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...expenses, action.payload];
        case 'DELETE':
            return expenses.filter((currentExpense) => currentExpense._id !== action.payload);
        case 'UPDATE':
            return expenses.map((currentExpense) => 
                currentExpense._id === action.payload._id ? action.payload : currentExpense);
        default:
            return expenses;
    }
}