import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

class SelectFilter extends Component {
    static propTypes = {};

    state = {
        selection: null
    };

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <Select options = {options} onChange={this.handleSelectChange} value={this.state.selection} multi/>
            </div>
        )
    }
}

export default SelectFilter