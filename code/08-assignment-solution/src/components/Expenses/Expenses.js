import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export default function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  const [expenseItems, setExpenseItems] = useState(DUMMY_EXPENSES);

  function makeExpenseItems(item) {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  }

  function filterByYear(item) {
    return item.date.getFullYear() === Number(filteredYear);
  }

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseItems.filter(filterByYear).map(makeExpenseItems)}
      </Card>
    </div>
  );
}
