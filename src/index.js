import React from 'react';
import ReactDOM from 'react-dom';

import ItemsList from './components/items-list/';
import SearchApp from './components/search-app/';
import HeadOfApp from './components/head-of-app/';

const App = () => {
    const my_todo = [
        {label: 'Drink cofee', important: true , id : 'dc1'},
        {label: 'Eat breakfast', important: true , id : 'eb2'},
        {label: 'Walk on the street', important: false, id : 'wos1'},
        {label: 'Read some book', important: false, id : 'rsb1'}
    ];
    return (<div className='container'>
        < HeadOfApp/>
        < SearchApp/>
        < ItemsList my_todo={my_todo} />
    </div>)
};

ReactDOM.render(<App/>, document.getElementById('root'));
