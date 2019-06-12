import React from 'react';
import SearchButtons from '../search-buttons/';
import SearchField from '../search-field/';
import './search-app.css';

const SearchApp = () => {
    return (
        <div className='btn-toolbar search-app'>
            < SearchField/>
            < SearchButtons/>
        </div>
    );
};

export default SearchApp;