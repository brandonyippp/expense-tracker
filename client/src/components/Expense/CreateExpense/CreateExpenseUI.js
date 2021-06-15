import React, { useState } from 'react';
import Form from './Form';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    zIndex: '99',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '625px',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    marginLeft: '50px',
    marginTop: '40px',
    height: '50px',
  },
}));


const CreateExpense = ({ expenseLength, setExpenseLength }) => {

  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button className={classes.button} variant="contained" 
      color="primary"onClick={handleOpen}>Create New Expense</Button>

      <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        invisible: true,
        timeout: 500
      }}
      >
        <Fade in={open}>
          <Form expenseLength={expenseLength} setExpenseLength={setExpenseLength} />
        </Fade>
      </Modal>
    </div>
  )
}

export default CreateExpense