import React from 'react';

import './head-of-app.css';

const HeadOfApp = ({toDo, done}) => {
 return (
     <div className="App-header d-flex">
        <h1>My ToDo list</h1>
         <h2 className='align-text-bottom'>{ toDo } more to do, { done } done </h2>
     </div>
 )
};

export default HeadOfApp;