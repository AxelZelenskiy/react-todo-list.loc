import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

    render() {
        const {label, onDeleted , onToggleDone , onToggleImportant,important,done } = this.props;
        let classes = 'text-span';
        classes += (done) ? ' mega-done' : '';
        classes += (important) ? ' text-important' : '';
        return (
            <div className='my-list'>
                <span className={classes} onClick={ onToggleDone }> {label} </span>
                <button type="button" className="some-button btn btn-outline-danger" onClick={onDeleted}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                <button type="button"
                        // onClick={this.importantButtonClick}
                        onClick={ onToggleImportant }
                        className="some-button btn btn-outline-success">
                    <i className="fa fa-exclamation" aria-hidden="true"></i>
                </button>
            </div>)
    }
}