import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false
    };

    clickLabelAction = () => {
        this.setState(({done}) => {
            return {done: !done}
        });
    };
    importantButtonClick = () => {
        this.setState(({important}) => {
            return {important: !important}
        });
    };

    render() {
        const {label, onDeleted} = this.props,
            {done, important} = this.state;
        let classes = 'text-span';
        classes += (done) ? ' mega-done' : '';
        classes += (important) ? ' text-important' : '';
        return (
            <div className='my-list'>
                <span className={classes} onClick={this.clickLabelAction}> {label} </span>
                <button type="button" className="some-button btn btn-outline-danger" onClick={onDeleted}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                <button type="button" onClick={this.importantButtonClick}
                        className="some-button btn btn-outline-success">
                    <i className="fa fa-exclamation" aria-hidden="true"></i>
                </button>
            </div>)
    }
}