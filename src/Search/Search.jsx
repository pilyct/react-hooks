import { useState } from 'react';
import './Search.css';

export default function Search({ onSearch, onClear, query }) {
  const [inputQuery, setInputQuery] = useState('');

  const handleChange = (event) => {
    setInputQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputQuery);
  };

  const handleClear = () => {
    setInputQuery('');
    onClear();
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputQuery}
        onChange={handleChange}
        placeholder='Search'
        className='search-input'
      />
      {query && ( // Only show clear button if query prop is not empty
        <button type="button" className='clear-button' onClick={handleClear}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
      <button type="submit" className='search-button'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </form>
  );
}

