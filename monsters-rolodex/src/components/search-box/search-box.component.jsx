import React from 'react';

import '../search-box/search-box.styles.css';

// Functional Component - gets some props and returns HTML
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
)