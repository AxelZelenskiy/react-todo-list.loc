import React, {Component} from 'react';
import './search-buttons.css';

export default class SearchButtons extends Component {
    state = {
        buttons: [
            {text: 'All'},
            {text: 'Active'},
            {text: 'Done'}
        ]
    };

    render() {
        const {searchButtonClick, activeButton} = this.props;
        const buttons = this.state.buttons.map((one_button, index) => {
            const classes = (activeButton === one_button.text) ? 'btn btn-info' : 'btn btn-outline-dark';
            const key = 'bt' + index;
            return <button
                type='button' className={classes} onClick={() => searchButtonClick(one_button.text)}
                key={key}
            >{one_button.text}</button>
        });
        return (
            <div className='btn-group src-buttons'>
                {buttons}
            </div>
        )
    }

}
