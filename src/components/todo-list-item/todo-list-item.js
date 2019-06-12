import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {
    const style = (important) ? {color: 'tomato'} : {color: 'black'};
    return (
        <div className='my-list'>
            <span className='text-span' style={style}> {label} </span>
            <button type="button" className="some-button btn btn-outline-dark"><i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            <button type="button" className="some-button btn btn-outline-dark"><i className="fa fa-exclamation" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default TodoListItem;