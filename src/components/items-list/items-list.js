import React from 'react';

import ToDoListItem from '../todo-list-item/';
import './item-list.css';

const ItemsList = ({ my_todo }) => {
    const my_list = my_todo.map((item) => {
        const { id , ...items_porpertys} = item;
        return (
         <li className='list-group-item' key={ id }>
             < ToDoListItem { ...items_porpertys } />
         </li>
        )
    });
    return (
        <ul className='list-group'>
            { my_list }
        </ul>
    )
};

export default ItemsList;