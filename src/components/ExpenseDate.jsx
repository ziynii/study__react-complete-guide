import React from 'react';

const ExpenseDate = ({expense}) => {
  const month = expense.date.toLocaleString('en-US', { month: 'long' });
  const year = expense.date.getFullYear();
  const day = expense.date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
