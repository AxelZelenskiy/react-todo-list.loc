import React from 'react';

import ToDoListItem from '../todo-list-item/';
import './item-list.css';

const ItemsList = ({ my_todo , onDeleted, onToggleDone, onToggleImportant }) => {
    const my_list = my_todo.map((item) => {
        const { id , ...items_porpertys} = item;
        return (
         <li className='list-group-item' key={ id }>
             < ToDoListItem { ...items_porpertys }
                            onDeleted={ () => onDeleted(id)}
                            onToggleDone={ () => onToggleDone(id) }
                            onToggleImportant={ () => onToggleImportant(id) }
             />
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