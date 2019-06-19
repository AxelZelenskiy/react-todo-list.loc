import React, { Component } from 'react';
import './search-field.css';

export default class SearchField extends Component {
    state = {
      inputValue : ''
    };
    valueUpdate = (e) => {
        this.setState( { inputValue: e.target.value },() => {
            this.props.searchThis(this.state.inputValue);
        });

    };
    render(){
        return <input type="text" className="form-control search-input" placeholder="Search something"
                      onChange={this.valueUpdate}
                      value={this.state.inputValue}  />;
    }
}