import React, { useState } from 'react';
import { CAR, EDUCATION, ENTERTAINMENT, BUSINESS, HEALTH, HOUSING, 
  TRAVEL, FOOD, UTILITIES, OTHER } from '../../constants/ExpenseCategories';
import { PieChart } from 'react-minimal-pie-chart';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';


const ResizedPieChart = styled(PieChart)`
  width: 35vw;
  height: 35vh;
`;

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        zIndex: '99',
        alignItems: 'center',
        justifyContent: 'center',
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

const labelStyle = {
  fontSize: '5px',
  fontFamily: 'Times New Roman',
}


const PieDataChart = ({ expenses }) => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setDataHelper = (expenses) => {
    let dataMap = new Map();
    for (let i = 0; i < expenses.length; i++) {
      if (dataMap.has(expenses[i].category)) {
        dataMap.set(expenses[i].category, 
          dataMap.get(expenses[i].category) + expenses[i].cost);
      } else {
        dataMap.set(expenses[i].category, expenses[i].cost);
      }
    }
    return dataMap;
  }

  const setDataColorHelper = (expenseCategory) => {
    switch(expenseCategory) {
      case CAR:
        return '#FF6433';
      case EDUCATION:
        return '#FFBE33';
      case ENTERTAINMENT:
        return '#C4FF33';
      case BUSINESS:
        return '#36FF33';
      case HEALTH:
        return '#33D1FF';
      case HOUSING:
        return '#336BFF';
      case TRAVEL:
        return '#6B33FF';
      case FOOD:
        return '#CA33FF';
      case UTILITIES:
        return '#FF33C1';
      case OTHER:
        return '#FF336E';
      default:
        return '#000000';
    }
  }

  const setData = (expenses) => {
    const dataMap = setDataHelper(expenses);
    const keyIterator = dataMap.keys();
    let data = [];

    for (let i = 0; i < dataMap.size; i++) {
      let currentValue = keyIterator.next().value;
      data.push({ title: currentValue, value: dataMap.get(currentValue), 
        color: setDataColorHelper(currentValue) },);
    }

    return data;
  }


  return (
    <div>
      <Button className={classes.button} variant="contained" 
      color="primary"onClick={handleOpen}>Show Pie Chart</Button>

      <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
          timeout: 500
      }}
      >
        <Fade in={open}>
          <ResizedPieChart data={setData(expenses)}
          viewBoxSize={[100, 100]}
          center={[50, 50]}
          radius={50}
          label={ ({ dataEntry }) => dataEntry.title }
          labelPosition={75}
          labelStyle={labelStyle}
          />
        </Fade>
      </Modal>
    </div>
  )
}

export default PieDataChart