import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import {changeSelection} from '../../AC';

import 'react-select/dist/react-select.css';

class SelectFilter extends Component {
    static propTypes = {
        filters: PropTypes.object.isRequired
    };

    render() {
        const {articles, filters} = this.props;
        const {selected} = filters;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <Select options = {options} onChange={this.handleSelectChange} value={selected} multi/>
            </div>
        )
    }

    // т.е. передаем в store не объект с value и label, а только value
    handleSelectChange = (selected) => {
        this.props.changeSelection(selected.map(option => option.value))
    }
}

export default connect(
    (state) => {
        return{
            filters: state.filters
        }
    },
    { changeSelection }
)(SelectFilter)