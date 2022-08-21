import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((item) => {
        return <ExpenseItem item={item} key={item.id} />;
      })}
    </Card>
  );
};

export default Expenses;
