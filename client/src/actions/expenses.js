import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/ActionTypes';
import * as api from '../api';

/* GET METHOD */
export const getExpenses = () => async (dispatch) => {
    try {
        const { data } = await api.fetchExpenses();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch(error) {
        console.log(error);
    }
}

/* POST/CREATE METHOD(S) */
export const createExpense = (expense) => async (dispatch) => {
    try {
        const { data } = await api.createExpense(expense);

        dispatch({ type: CREATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}

/* DELETE METHOD */
export const deleteExpense = (id) => async (dispatch) => {
    try {
        await api.deleteExpense(id);

        dispatch({ type: DELETE, payload: id });
    } catch(error) {
        console.log(error);
    }
}

/* UPDATE METHOD */
export const updateExpense = (id, expense) => async (dispatch) => {
    try {
        const { data } = await api.updateExpense(id, expense);

        dispatch({ type: UPDATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}