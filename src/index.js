import React from 'react';
import ReactDOM from 'react-dom';

import SearchButton from './components/search-button';
import ItemsList from './components/items-list';
import HeadOfApp from './components/head-of-app';


const App = () => {
    return (<div>
        < HeadOfApp />
        < SearchButton />
        < ItemsList />
    </div>)
};

ReactDOM.render(<App/>, document.getElementById('root'));
