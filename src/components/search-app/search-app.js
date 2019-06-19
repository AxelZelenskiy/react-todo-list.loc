import React from 'react';
import SearchButtons from '../search-buttons/';
import SearchField from '../search-field/';
import './search-app.css';

const SearchApp = ({searchButtonClick, activeButton, searchThis }) => {
    return (
        <div className='btn-toolbar search-app'>
            < SearchField searchThis={ searchThis }/>
            < SearchButtons searchButtonClick={searchButtonClick} activeButton={activeButton}/>
        </div>
    );
};

export default SearchApp;