import React, {Component} from 'react';

import HeadOfApp from "../head-of-app";
import SearchApp from "../search-app";
import ItemsList from "../items-list";
import AddItem from "../add-item";

import './app.css'

export default class App extends Component {
    state = {
        todoList: [
            {label: 'Drink cofee', important: true, id: 'dc1'},
            {label: 'Eat breakfast', important: true, id: 'eb2'},
            {label: 'Walk on the street', important: false, id: 'wos1'},
            {label: 'Read some book', important: false, id: 'rsb1'}
        ]
    };
    addSomething = ( text ) => {
        this.setState(({ todoList })=>{
            const newElement = {label: text,important:false,id: 'gid'+ Date.now() };
            return { todoList: [...todoList, newElement]};
        });
    };
    itemDelete = (id) => {
        this.setState(({ todoList }) => {
            const result = this.state.todoList.findIndex((element) => {
                return element.id === id
            });
            const new_result = [
                ...todoList.slice(0, result),
                ...todoList.slice(result + 1)
            ];
            return {todoList : new_result};

        });


    };

    render() {
        return (<div className='container'>
            < HeadOfApp/>
            < SearchApp/>
            < ItemsList
                my_todo={this.state.todoList}
                onDeleted={this.itemDelete}
            />
            < AddItem onAdd={this.addSomething}/>
        </div>);
    };
}