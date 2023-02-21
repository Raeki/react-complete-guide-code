import React from 'react';

import './ExpensesFilter.css';

export default function ExpensesFilter({ selected, onChangeFilter }) {
  const START_YEAR = 2019;
  const CURRENT_YEAR = new Date().getFullYear();
  const arrayOfYearOptions = [];

  for (let year = START_YEAR; year <= CURRENT_YEAR; year++) {
    arrayOfYearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  function dropdownChangeHandler(event) {
    onChangeFilter(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          {arrayOfYearOptions};
        </select>
      </div>
    </div>
  );
}
