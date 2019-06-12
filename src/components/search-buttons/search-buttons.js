import React from 'react';
import './search-buttons.css';

const SearchButtons = () => {
    return (
        <div className='btn-group'>
            <button  type="button" className="btn btn-info">All</button>
            <button  type="button" className="btn btn-outline-dark">Active</button>
            <button  type="button" className="btn btn-outline-dark">Done</button>
        </div>
    )
};
export default SearchButtons;