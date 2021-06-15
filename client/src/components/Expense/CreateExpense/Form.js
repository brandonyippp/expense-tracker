import React, { useState } from 'react';
import { createExpense } from '../../../actions/expenses';
import { CAR, EDUCATION, ENTERTAINMENT, BUSINESS, HEALTH, HOUSING, 
  TRAVEL, FOOD, UTILITIES, OTHER } from '../../../constants/ExpenseCategories';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Form = ({ expenseLength, setExpenseLength }) => {

  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();

  /* On expense category select item change */
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  /* On form submit */
  const onSubmit = data => {
    data.date = new Date().toDateString();
    data.category = value;
    dispatch(createExpense(data));
    setExpenseLength(expenseLength + 1);
    reset();
  };

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <FormControl>
        <InputLabel htmlFor="expense-name">Name</InputLabel>
        <Input placeholder="Expense Name" {...register("name", { required: true })} />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="expense-cost">Cost</InputLabel>
        <Input placeholder="Expense Cost" type="number" {...register("cost", { required: true })} />
      </FormControl>

      <br /> <br />

      <FormControl className={classes.formControl}>
        <InputLabel >Expense Category</InputLabel>

        <Select value={value !== "" ? value : setValue("Car")} onChange={handleChange}>
          <MenuItem value={CAR}>Car</MenuItem>
          <MenuItem value={EDUCATION}>Education</MenuItem>
          <MenuItem value={ENTERTAINMENT}>Entertainment</MenuItem>
          <MenuItem value={BUSINESS}>Business</MenuItem>
          <MenuItem value={HEALTH}>Health</MenuItem>
          <MenuItem value={HOUSING}>Housing</MenuItem>
          <MenuItem value={TRAVEL}>Travel</MenuItem>
          <MenuItem value={FOOD}>Food</MenuItem>
          <MenuItem value={UTILITIES}>Utilities</MenuItem>
          <MenuItem value={OTHER}>Other</MenuItem>
        </Select>

        <FormHelperText>Choose an applicable category</FormHelperText>
      </FormControl>

      {errors.exampleRequired && <span>This field is required</span>}
      <br /> <br />
      <Button variant="contained" color="primary" type="submit">Create Expense</Button>
    </form>
  );
}

export default Form