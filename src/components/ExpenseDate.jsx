import React from 'react';
import './ExpenseDate.css'

const ExpenseDate = ({expense}) => {
  const month = expense.date.toLocaleString('en-US', { month: 'long' });
  const year = expense.date.getFullYear();
  const day = expense.date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
