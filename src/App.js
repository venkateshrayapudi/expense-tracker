import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import Title from './components/UI/Title';

const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: 'A Book',
    amount: 9412,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2', 
    title: 'New Tv',
    amount: 7949,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 2964,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 1355,
    date: new Date(2021, 3, 21),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {

    setExpenses((prevExpenses) => {


      return [expense, ...prevExpenses];
    });
  };
  
  return (
    <div>
      <Title />
      <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items={expenses} />
    </div> 
  );
};
    

export default App;
