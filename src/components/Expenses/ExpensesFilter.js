import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const expenseYears = [...new Set(props.dates)]
    // const dates = [...expenseYears]
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="all">All</option>
                    { expenseYears.map((date, index) => <option key={index} value={date}>{date}</option>)}
                </select>
             </div>
              </div>
            );
        };

export default ExpensesFilter;