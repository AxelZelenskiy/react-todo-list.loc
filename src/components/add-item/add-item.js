import React, {Component} from 'react';

import './add-item.css';

export default class AddItem extends Component {
    state = {
        value: ''
    };
    formSend = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.value);
        this.setState({value: ''});
    };
    changeValue = (e) => {
        this.setState({value: e.target.value});
    };

    render() {
        return (<form className='btn-toolbar add-something' onSubmit={this.formSend}>
            <input type="text" value={this.state.value} onChange={this.changeValue}
                   className="form-control search-input" placeholder='New todo here'/>
            <button type="submit" className="btn btn-outline-dark"
            >Add
            </button>
        </form>);
    }
}