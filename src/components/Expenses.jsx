import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = ({items}) => {

	
	return (
		<div className='expenses'>
			 {items.map((item) => {
        return <ExpenseItem item={item} key={item.id}/>;
      })}
		</div>
	);
};

export default Expenses;