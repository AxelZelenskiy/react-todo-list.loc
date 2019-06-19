import React, {Component} from 'react';

import HeadOfApp from "../head-of-app";
import SearchApp from "../search-app";
import ItemsList from "../items-list";
import AddItem from "../add-item";

import './app.css'

export default class App extends Component {
    state = {
        todoList: [
            {label: 'Drink cofee', important: true, id: 'dc1', done: false},
            {label: 'Eat breakfast', important: true, id: 'eb2', done: false},
            {label: 'Walk on the street', important: false, id: 'wos1', done: false},
            {label: 'Read some book', important: false, id: 'rsb1', done: false}
        ],
        button: 'All',
        searchData: ''
    };
    addSomething = (text) => {
        this.setState(({todoList}) => {
            const newElement = {label: text, important: false, id: 'gid' + Date.now(), done: false};
            return {todoList: [...todoList, newElement]};
        });
    };
    itemDelete = (id) => {
        this.setState(({todoList}) => {
            const result = this.state.todoList.findIndex((element) => {
                return element.id === id
            });
            const new_result = [
                ...todoList.slice(0, result),
                ...todoList.slice(result + 1)
            ];
            return {todoList: new_result};
        });


    };
    toggleDone = (id) => {
        this.setState(({todoList}) => {
            const done_element_pos = todoList.findIndex((element) => {
                return element.id === id
            });
            let updated_element = todoList.find((element) => element.id === id);
            updated_element.done = !updated_element.done;
            const new_data = [
                ...todoList.slice(0, done_element_pos),
                updated_element,
                ...todoList.slice(done_element_pos + 1)
            ];
            return {todoList: new_data};
        });
    };
    toggleImportant = (id) => {
        this.setState(({todoList}) => {
            const done_element_pos = todoList.findIndex((element) => {
                return element.id === id
            });
            let updated_element = todoList.find((element) => element.id === id);
            updated_element.important = !updated_element.important;
            const new_data = [
                ...todoList.slice(0, done_element_pos),
                updated_element,
                ...todoList.slice(done_element_pos + 1)
            ];
            return {todoList: new_data};
        });
    };
    searchButtonClick = (text) => {
        this.setState({button: text});
    };
    getData = () => {
        if (this.state.button === 'Active') {
            return this.state.todoList.filter((element) => !element.done)
        } else if (this.state.button === 'Done') {
            return this.state.todoList.filter((element) => element.done)
        } else {
            return this.state.todoList;
        }
    };
    searchThis = (text = '') => {
        this.setState({searchData: text});
    };
    searching = (what_to_find, where_to_find) => {
        const result = where_to_find.filter((element) => {
            return element.label.match(new RegExp(what_to_find, 'i'))
        });
        return result;
    };

    render() {
        const todoList = this.state.todoList;
        let done_elements = todoList.filter((element) => element.done).length,
            todo_elements = todoList.length - done_elements,
            data = this.getData();
        data = (this.state.searchData === '') ? data : this.searching(this.state.searchData, data);
        return (<div className='container'>
            < HeadOfApp toDo={todo_elements} done={done_elements}/>
            < SearchApp searchButtonClick={this.searchButtonClick} activeButton={this.state.button}
                        searchThis={this.searchThis}/>
            < ItemsList
                my_todo={data}
                onDeleted={this.itemDelete}
                onToggleDone={this.toggleDone}
                onToggleImportant={this.toggleImportant}
            />
            < AddItem onAdd={this.addSomething}/>
        </div>);
    };
}