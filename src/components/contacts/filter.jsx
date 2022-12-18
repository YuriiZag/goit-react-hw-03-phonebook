import React from 'react';
import PropTypes from 'prop-types';
import { FilterField } from './contacts.styled';

export const Filter = ({ onFilterChange, filterValue }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <form autoComplete="off">
        <label htmlFor="filter">
          <FilterField
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={onFilterChange}
            value={filterValue}
            required
          />
        </label>
      </form>
    </div>
  );
};

Filter.propType = {
  onFilterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.shape().isRequired
}